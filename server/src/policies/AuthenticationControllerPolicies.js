const Joi = require('joi')

// Uses Joi to validate email and password for registration.

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{6,32}$')
      )
    }

    // value never used from tutorial
    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'email must be valid'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'password not good'
          })
          break
        default:
          res.status(400).send({
            error: 'Registration is bad'
          })
      }
    } else {
      next()
    }
  }
}
