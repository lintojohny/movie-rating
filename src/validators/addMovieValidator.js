const {BAD_REQUEST} = require('http-status-codes');
const Joi = require('@hapi/joi');

const {ErrorHandler} = require('../errorHandlers');
const {createReadableMessageFromJoi} = require('../helpers/helpers');

const mongoDbObjectId = new RegExp('^[0-9a-fA-F]{24}$');

module.exports = (req, res, next) => {
  const schema = Joi.object({
    adult: Joi.boolean().required(),
    genreIds: Joi.number().required(),
    originalLanguage: Joi.string().required(),
    originalTitle: Joi.string().required(),
    overview: Joi.string().required(),
    posterPath: Joi.string(),
    popularity: Joi.string().allow('', null),
    releaseDate: Joi.number(),
    video: Joi.boolean().required(),
    title: Joi.string().required(),
    writer: Joi.string().regex(mongoDbObjectId),
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
