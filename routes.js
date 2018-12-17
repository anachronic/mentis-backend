import PostsController from './controllers/posts'

export default (express) => {
  express.get('/posts', PostsController.getAll)
  express.post('/posts/add', PostsController.create)
}
