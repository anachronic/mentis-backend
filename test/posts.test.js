const Author = require('../models/Author')
const Post = require('../models/Post')
const expect = require('chai').expect

var author

describe('Post', function () {
  before(function () {
    author = Author.create({
      'name': 'jperez',
      'biography': 'a biography for the great jperez'
    })
  })

  describe('#create a post', function () {
    it('should create normally with content', async function () {
      let expectedTitle = 'a post title'
      let expectedContent = 'some content for this post'

      let createdPost = await Post.create({
        title: expectedTitle,
        author: author.id,
        content: expectedContent
      })

      expect(createdPost.title).to.equal(expectedTitle)
      expect(createdPost.content).to.equal(expectedContent)
    })
  })
})
