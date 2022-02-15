import { createHash } from 'crypto'
import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from 'lib/mongodb'
import { z } from 'zod'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const ipAddress =
      req.headers['x-forwarded-for'] ||
      // Fallback for localhost or non Vercel deployments
      '0.0.0.0'
    const isConnected = await clientPromise
    const db = isConnected.db(process.env.MONGODB_DB)
    const currentUserId =
      // Since a users IP address is part of the sessionId in our database, we
      // hash it to protect their privacy. By combining it with a salt, we get
      // get a unique id we can refer to, but we won't know what their ip
      // address was.
      createHash('md5')
        .update(ipAddress + process.env.IP_ADDRESS_SALT!, 'utf8')
        .digest('hex')

    // Identify a specific users interactions with a specific post
    const sessionId = currentUserId

    switch (req.method) {
      case 'GET': {
        const [total, user] = await Promise.all(
          [
            // get the number of likes this post has
            await db.collection('likes').find({ name: 'totalLikes' }).toArray(),
            // get the number of times the current user has liked this post
            await db
              .collection('userLikes')
              .find({ userSessionId: sessionId })
              .toArray(),
          ].flat()
        )
        res.json({
          likes: total?.count || 0,
          currentUserLikes: user?.count || 0,
        })

        break
      }

      case 'POST': {
        const count = z.number().min(1).max(10).parse(req.body.count)
        const [total, user] = await Promise.all(
          [
            await db.collection('likes').updateOne(
              { name: 'totalLikes' },
              {
                $inc: {
                  count: count,
                },
              }
            ),
            await db.collection('userLikes').updateOne(
              { userSessionId: currentUserId },
              {
                $inc: {
                  count: count,
                },
              },
              {
                upsert: true,
              }
            ),
          ].flat()
        )
        res.json({
          likes: total?.count || 0,
          currentUserLikes: user?.count || 0,
        })
        break
      }

      default: {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).send('Method Not Allowed')
      }
    }
  } catch (err: any) {
    console.error(err.message)

    res.status(500).json({
      statusCode: 500,
      message: err.message,
    })
  }
}
