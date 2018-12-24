const PostsController = require('./controllers/PostsController')
const AuthorController = require('./controllers/AuthorController')
const asyncHelper = require('./middleware/AsyncHelper')
const AuthorValidator = require('./validators/AuthorValidator')

module.exports = (express) => {
  express.get('/posts', asyncHelper(PostsController.getAll))
  express.post('/posts', asyncHelper(PostsController.create))

  express.post('/author',
    asyncHelper(AuthorValidator.validate),
    asyncHelper(AuthorController.create))
}
