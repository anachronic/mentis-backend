module.exports = {
  httpErrorHandler: (err, req, res, next) => {
    if (err) {
      switch (err.name) {
        case 'BadRequestError':
          res.status(400).send({
            status: 'error',
            message: err.message
          })
          break
        case 'NotFoundError':
          res.status(404).send({
            status: 'error',
            message: err.message
          })
          break
        default:
          // default is unhandled error so... this would be Internal Server Error
          res.status(500).send({
            status: 'error',
            message: err.message
          })
          break
      }
    } else {
      next()
    }
  }
}
