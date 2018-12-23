import Author from '../models/Author'
import { expect } from 'chai'

describe('Author', function () {
  describe('#create', function () {
    it('should create ok with name and biography', async function () {
      let expectedName = 'jperez'
      let expectedBio = 'just another brick in the wall'
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
  })
})
