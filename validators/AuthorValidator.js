const joi = require('joi')

module.exports = {
  validate (req, res, next) {
    const schema = joi.object().keys({
      name: joi.string().required().trim(),
      biography: joi.string()
    })

    let validationResult = joi.validate(req.body, schema)

    if (validationResult.error) {
      res.status(400).send({
        status: 'error',
        message: 'Data provided was not valid'
      })
    } else {
      next()
    }
  }
}
