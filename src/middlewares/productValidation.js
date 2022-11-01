const statusCode = require('../helpers/statusCodes');
const errorMessages = require('../helpers/errorMessages');

const { BadRequest, UnprocessableEntity } = statusCode;
const { BadRequestMessage, UnprocessableEntityMessage } = errorMessages;

const productValidation = (req, res, next) => {
  const { name } = req.body;

  if (!name || name === '') {
    return res.status(BadRequest).json({
      message: BadRequestMessage,
    });
  }

  if (name.length < 5) {
    return res.status(UnprocessableEntity).json({
      message: UnprocessableEntityMessage,
    });
  }

  next();
};

module.exports = productValidation;
