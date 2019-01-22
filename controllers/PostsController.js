const Post = require('../models/Post')
const { NotFoundError } = require('../exceptions')

module.exports = {
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
  },
  getSingle: async function (req, res) {
    let id
    // this doesn't need to be try/catch'd because if there's no params
    // we'd end up in /posts route
    id = req.params.id

    try {
      let post = await Post.findById(id).lean().exec()
      if (post) {
        res.send(post).end()
        return
      }
    } catch (err) {
      throw new NotFoundError('Searched post was not found')
    }
  }
}
