import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { connectToDatabase } from '@/util/mongodb'
var mongodb = require('mongodb')

export default async function modifyEntry(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })
  if (session) {
    try {
      const { db } = await connectToDatabase()
      const {
        newEntry_data: [entryId, newEntry],
      } = req.body
      const result = await db.collection('entries').findOneAndUpdate(
        {
          _id: new mongodb.ObjectID(entryId),
        },
        { $set: { entry: newEntry, createdAt: new Date() } }
      )
      return res.status(200).json({ message: 'Successfully modified entry.' })
    } catch {
      res.status(500)
      res.json({
        error: 'Unable to modify entry or accessing sensitive routes.',
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
