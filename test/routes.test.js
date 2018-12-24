const chai = require('chai')
const expect = chai.expect
const server = require('../server')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('Route testing', function () {
  describe('GET#posts', function () {
    it('should return ok with no args', function (done) {
      chai.request(server)
        .get('/posts')
        .end((err, res) => {
          if (err) {
            expect.fail()
          }
          expect(res).to.be.json

          done()
        })
    })
  })
})
