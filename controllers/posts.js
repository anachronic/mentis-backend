import { Post } from '../models'

export default {
  getAll: async function (req, res) {
    let posts = await Post.find()
    res.send({
      status: 'sucess',
      posts: posts
    })
  }
}
