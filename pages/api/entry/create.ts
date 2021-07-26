import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'

export default async function createEntry(
  req: NextApiRequest,
  res: NextApiResponse
) {
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

  console.log(result.ops[0])

  return res.status(200).json({})
}
