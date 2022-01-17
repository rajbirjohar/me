import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import clientPromise from 'lib/mongodb'
var mongodb = require('mongodb')

export default async function modifyEntry(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })
  const isConnected = await clientPromise
  const db = isConnected.db(process.env.MONGODB_DB)
  if (!session) {
    res.status(401).json({
      error:
        'Not signed in. Why are you trying to access sensitive information or attack my site? :(',
    })
  }
  const {
    entryData: { entryId, newEntry, user },
  } = req.body
  await db.collection('entries').updateOne(
    {
      _id: new mongodb.ObjectID(entryId),
      name: user,
    },
    { $set: { entry: newEntry, createdAt: new Date() } }
  )
  return res.status(200).json({ message: 'Successfully modified entry.' })
}
