import { mongo } from '../db'

const Schema = mongo.Schema

let schema = new Schema({
  title: String,
  author: { type: Schema.Types.ObjectId, ref: 'Author' },
  content: String
}, {
  timestamps: true
})

export default mongo.model('Post', schema)
