import clientPromise from 'lib/mongodb'

const entriesFetch = async (req, res) => {
  const isConnected = await clientPromise
  const db = isConnected.db(process.env.MONGODB_DB)

  const entries = await db
    .collection('entries')
    .find({})
    .sort({ createdAt: -1 })
    .toArray()

  return res.status(200).json({ entries })
}

export default entriesFetch
