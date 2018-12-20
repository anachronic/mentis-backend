import { Post } from '../models'

export default {
  getAll: async function (req, res) {
    let posts = await Post.find()
    res.send({
      status: 'sucess',
      posts: posts
    })
  },
  create: async function (req, res) {
    let post = req.body
    let createdPost = await Post.create(post)
    res.send({
      status: 'success',
      post: createdPost
    })
  }
}