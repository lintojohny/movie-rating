const {BAD_REQUEST} = require('http-status-codes');
const Joi = require('@hapi/joi');

const {ErrorHandler} = require('../errorHandlers');
const {createReadableMessageFromJoi} = require('../helpers/helpers');

module.exports = (req, res, next) => {
  const schema = Joi.object({
    image: Joi.string(),
    lastName: Joi.string().required(),
    firstName: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    username: Joi.string().required(),
    roleCode: Joi.string(),
  });

  const {error} = schema.validate(req.body);

  if (error) {
    return res.json({
      success: false,
      err: createReadableMessageFromJoi(error),
    });
  }

  next();
};
