const mongo = require('../db').mongo
const Post = require('./Post')

const Schema = mongo.Schema

let schema = new Schema({
  name: { type: String, required: true, trim: true },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  biography: { type: String, required: false }
})

schema.statics.deleteByName = async function (name) {
  let author = await this.findOne({ name: name }).lean().exec()

  await Post.deleteMany({ author: author._id }).exec()
  await this.deleteOne({ _id: author._id }).exec()
}

module.exports = mongo.model('Author', schema)
