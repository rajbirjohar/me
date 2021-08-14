import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { connectToDatabase } from '@/util/mongodb'

export default async function createEntry(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })
  if (session) {
    try {
      const { db } = await connectToDatabase()
      const {
        entry_data: [name, email, entry],
      } = req.body

      const result = await db.collection('entries').insertOne({
        name: name,
        email: email,
        entry: entry,
        createdAt: new Date(),
      })
      return res.status(200).json({ message: 'Successfully posted entry.' })
    } catch {
      res
        .status(500)
        .json({
          error: 'Unable to create entry or accessing sensitive routes.',
        })
    }
  } else {
    // Not Signed in
    res.status(401).json({
      error:
        'Not signed in. Why are you trying to access sensitive information or attack my site? :(',
    })
  }
}
