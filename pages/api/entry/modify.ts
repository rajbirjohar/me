import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'
var mongodb = require('mongodb')

export default async function modifyEntry(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
    console.log(result.ops[0])
    return res.status(200).json({})
  } catch {
    res.status(500)
    res.json({ error: 'Unable to modify entry.' })
  }
}
