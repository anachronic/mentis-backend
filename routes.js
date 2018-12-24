const PostsController = require('./controllers/PostsController')
const AuthorController = require('./controllers/AuthorController')
const asyncHelper = require('./middleware/AsyncHelper')

module.exports = (express) => {
  express.get('/posts', asyncHelper(PostsController.getAll))
  express.post('/posts', asyncHelper(PostsController.create))

  express.post('/author', asyncHelper(AuthorController.create))
}
