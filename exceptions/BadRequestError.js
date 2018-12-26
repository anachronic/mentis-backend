class BadRequestError extends Error {
  constructor (message) {
    super(message)
    this.name = 'BadRequestError'
  }
}

module.exports = BadRequestError
