const Post = require('../models/Post')
const { NotFoundError, BadRequestError } = require('../exceptions')

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
    try {
      id = req.params.id
    } catch (err) {
      throw new BadRequestError('Request did not contain a query for the post')
    }

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
