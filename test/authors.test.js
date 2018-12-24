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
          'name': 'yei perez',
          'biography': 'with another biography'
        })

        let postOne = await Post.create({
          title: 'title for post one',
          content: 'the content for post one',
          author: author._id
        })

        let postTwo = await Post.create({
          title: 'title for post two',
          content: 'the content for post two',
          author: author._id
        })

        let authorId = author._id
        let authorName = author.name
        let postIds = [postOne._id, postTwo._id]

        await Author.deleteByName(authorName)

        let foundAuthor = await Author.findById(authorId).exec()
        console.log(foundAuthor)
        expect(foundAuthor).to.be.null

        let foundPosts = await Post.find({
          _id: {
            $in: postIds
          }
        }).exec()
        expect(foundPosts).to.be.empty
      })
    })
  })
})
