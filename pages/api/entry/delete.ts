import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'
var mongodb = require('mongodb')

export default async function deleteEntry(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { db } = await connectToDatabase()
    const { entry: entryId } = req.body

    const result = await db
      .collection('entries')
      .deleteOne({ _id: new mongodb.ObjectID(entryId) })
    console.log(result.deletedCount)
    return res.status(200).json({})
  } catch {
    res.status(500)
    res.json({ error: 'Unable to delete entry.' })
  }
}
