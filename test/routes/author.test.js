const chai = require('chai')
const expect = chai.expect
const server = require('../../server')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe("Author's routes", function () {
  describe('POST#authors', function () {
    it('will not return 404 not found', function (done) {
      chai.request(server).post('/author').end(function (err, res) {
        expect(err).to.be.null
        expect(res).to.not.have.status(404)
        done()
      })
    })

    it('will succeed with a good-formed author object', function (done) {
      chai.request(server)
        .post('/author')
        .send({
          name: "the author's name",
          biography: 'a cool biography about this author'
        })
        .end(function (err, res) {
          expect(err).to.be.null
          expect(res).to.be.json
          expect(res).to.have.status(200)
          done()
        })
    })

    it('will suceed with good author object with no biography', function (done) {
      chai.request(server)
        .post('/author')
        .send({
          name: 'another author'
        })
        .end(function (err, res) {
          expect(err).to.be.null
          expect(res).to.be.json
          expect(res).to.have.status(200)
          done()
        })
    })

    it('will not succeed with an empty object', function (done) {
      chai.request(server)
        .post('/author')
        .send({})
        .end(function (err, res) {
          expect(err).to.be.null
          expect(res).to.be.json
          expect(res).to.have.status(400)
          done()
        })
    })

    it('will not suceed with a fully trim-able author name', function (done) {
      chai.request(server)
        .post('/author')
        .send({
          name: '   '
        })
        .end(function (err, res) {
          expect(err).to.be.null
          expect(res).to.be.json
          expect(res).to.have.status(400)
          done()
        })
    })
  })
})
