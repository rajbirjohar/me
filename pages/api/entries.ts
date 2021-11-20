import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from 'lib/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const isConnected = await clientPromise
  const db = isConnected.db(process.env.MONGODB_DB)

  const entries = await db
    .collection('entries')
    .find({})
    .sort({ createdAt: -1 })
    .toArray()

  return res.status(200).json({ entries })
}
