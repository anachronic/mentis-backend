const Author = require('../models/Author')

module.exports = {
  create: async function (req, res) {
    let author = req.body
    author['posts'] = []
    let createdAuthor = await Author.create(author)
    res.send({
      status: 'success',
      post: createdAuthor.toObject()
    })
  }
}
