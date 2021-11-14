import { connectToDatabase } from '../../util/mongodb'

const entriesFetch = async (req, res) => {
  const { db } = await connectToDatabase()

  const entries = await db
    .collection('entries')
    .find({})
    .sort({ createdAt: -1 })
    .toArray()

  return res.status(200).json({ entries })
}

export default entriesFetch
