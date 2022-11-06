const errorMessages = require('../helpers/errorMessages');
const statusCodes = require('../helpers/statusCodes');

const { BadRequest, UnprocessableEntity } = statusCodes;
const { ProductIdIsRequired, QuantityIsRequired, QuantityGreaterThanZero } = errorMessages;

const verifyProductsIds = (id) => {
  const productIds = id.every(({ productId = 0 }) => productId);

  if (!productIds) {
    return {
      message: ProductIdIsRequired,
    };
  }

  return false;
};

const quantityOfProducts = (products) => {
  const productQuantity = products.every(({ quantity }) => quantity !== undefined);
  if (!productQuantity) {
    return {
      statusCode: BadRequest,
      message: QuantityIsRequired,
    };
  }

  const validateQuantityValue = products.every(
    ({ quantity }) => Number(quantity) > 0,
  );
  if (!validateQuantityValue) {
    return {
      statusCode: UnprocessableEntity,
      message: QuantityGreaterThanZero,
    };
  }

  return false;
};

const salesValidation = (req, res, next) => {
  const newSale = req.body;

  if (verifyProductsIds(newSale)) {
    return res.status(BadRequest).json(verifyProductsIds(newSale));
  }

  if (quantityOfProducts(newSale)) {
    const { statusCode, message } = quantityOfProducts(newSale);
    return res.status(statusCode).json({ message });
  }

  next();
};

module.exports = salesValidation;