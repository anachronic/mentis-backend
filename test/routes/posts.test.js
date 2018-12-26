const chai = require('chai')
const expect = chai.expect
const server = require('../../server')
const chaiHttp = require('chai-http')
const { Post, Author } = require('../../models')

chai.use(chaiHttp)

describe("Post's routes", function () {
  describe('GET all posts', function () {
    it('should return ok with no args', function (done) {
      chai.request(server)
        .get('/posts')
        .end((err, res) => {
          expect(err).to.be.null
          expect(res).to.be.json
          expect(res).to.have.status(200)

          done()
        })
    })
  })

  var createdPost

  describe('GET a post', function () {
    before(async function () {
      let author = await Author.create({ name: 'routes author' })
      let post = await Post.create({
        title: 'post for routes',
        content: 'some content',
        author: author._id
      })

      createdPost = post
    })

    it("will return 404 with an argument that isn't a post", function (done) {
      chai.request(server)
        .get('/posts/82349jmalsx')
        .end((err, res) => {
          expect(err).to.be.null
          expect(res).to.be.json
          expect(res).to.have.status(404)

          done()
        })
    })

    it('will return the post if it previously exists', function (done) {
      chai.request(server)
        .get(`/posts/${createdPost._id}`)
        .end((err, res) => {
          expect(err).to.be.null
          expect(res).to.be.json
          expect(res).to.have.status(200)

          done()
        })
    })
  })
})
