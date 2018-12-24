import Author from '../models/Author'
import Post from '../models/Post'
import { expect } from 'chai'

var expectedName = 'jperez'
var expectedBio = 'just another brick in the wall'

describe('Author', function () {
  describe('#create', function () {
    it('should create ok with name and biography', async function () {
      let withNameAndBio = {
        'name': expectedName,
        'biography': expectedBio
      }
      let created = await Author.create(withNameAndBio)

      expect(created.name).to.be.a('string')
      expect(created.name).to.equal(expectedName)
      expect(created.biography).to.be.a('string')
      expect(created.biography).to.equal(expectedBio)
    })

    describe('#delete', function () {
      it('should erase all author\'s posts when deleting the author', async function () {
        let author = await Author.create({
          'name': expectedName,
          'biography': expectedBio
        })

        let postOne = await Post.create({
          title: 'title for post one',
          content: 'the content for post one'
        })

        let postTwo = await Post.create({
          title: 'title for post one',
          content: 'the content for post one'
        })

        let authorId = author._id
        let postIds = [postOne._id, postTwo._id]

        await Author.remove({ _id: authorId })

        let foundAuthor = await Author.findOne({ _id: authorId })
        expect(foundAuthor).to.be.null

        let foundPosts = await Post.find({
          _id: {
            $in: postIds
          }
        })
        expect(foundPosts).to.be.empty
      })
    })
  })
})
