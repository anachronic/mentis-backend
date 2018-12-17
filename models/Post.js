import { mongo } from '../db'

let PostSchema = new mongo.Schema({
  title: String,
  author: String,
  content: String
})

let Post = mongo.model('Post', PostSchema)

export default Post
