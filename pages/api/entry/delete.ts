import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase()
  const {
    entry_Id: [id],
  } = req.body

  const result = await db.collection('entries').deleteOne({
    _id: id,
  })
  return res.status(200).json({})
}
