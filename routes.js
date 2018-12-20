import PostsController from './controllers/PostsController'
import AuthorController from './controllers/AuthorController'
import asyncHelper from './middleware/AsyncHelper'

export default (express) => {
  express.get('/posts', asyncHelper(PostsController.getAll))
  express.post('/posts', asyncHelper(PostsController.create))

  express.post('/author', asyncHelper(AuthorController.create))
}
