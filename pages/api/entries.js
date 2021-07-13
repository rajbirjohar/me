import nc from 'next-connect'
import { all } from '@/middlewares/index'
import { getPosts, insertPost } from '@/db/index'

const handler = nc()

handler.use(all)

handler.post(async (req, res) => {
  if (!req.user) {
    return res.status(401).send('unauthenticated')
  }

  if (!req.body.content) return res.status(400).send('You must write something')

  const post = await insertPost(req.db, {
    content: req.body.content,
    creatorId: req.user._id,
  })

  return res.json({ post })
})

export default handler
