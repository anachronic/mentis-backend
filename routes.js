import PostsController from './controllers/posts'
import asyncHelper from './middleware/AsyncHelper'

export default (express) => {
  express.get('/posts', asyncHelper(PostsController.getAll))
  express.post('/posts/add', asyncHelper(PostsController.create))
}
