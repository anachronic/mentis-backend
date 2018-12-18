import { mongo } from '../db'

const Schema = mongo.Schema

let schema = new Schema({
  name: { type: String, required: true, trim: true },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  biography: { type: String, required: false }
})

export default mongo.model('Author', schema)
