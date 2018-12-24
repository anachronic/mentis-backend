class RuntimeError extends Error {
  constructor (message) {
    super(message)
    this.name = 'RuntimeError'
  }
}

module.exports = RuntimeError
