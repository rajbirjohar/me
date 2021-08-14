import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { connectToDatabase } from '@/util/mongodb'
var mongodb = require('mongodb')

export default async function deleteEntry(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })
  if (session) {
    try {
      const { db } = await connectToDatabase()
      const { entry: entryId } = req.body

      const result = await db
        .collection('entries')
        .deleteOne({ _id: new mongodb.ObjectID(entryId) })
      return res.status(200).json(result.deletedCount)
    } catch {
      res.status(500)
      res.json({
        error: 'Unable to delete entry or accessing sensitive routes.',
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
