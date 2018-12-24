const mongo = require('../db').mongo

const Schema = mongo.Schema

let schema = new Schema({
  title: String,
  author: { type: Schema.Types.ObjectId, ref: 'Author' },
  content: String
}, {
  timestamps: true
})

module.exports = mongo.model('Post', schema)
