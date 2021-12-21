import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from 'lib/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const isConnected = await clientPromise
  const db = isConnected.db(process.env.MONGODB_DB)

  const hitcount = await db
    .collection('hitcount')
    .updateOne({}, { $inc: { hitcount: 1 }, $set: { updatedAt: new Date() } })

  return res.status(200).json({ hitcount })
}
