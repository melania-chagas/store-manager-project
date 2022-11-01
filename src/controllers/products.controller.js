const productsService = require('../services/products.service');

const { serviceGetAllProducts, serviceGetById } = productsService;
const statusCode = require('../helpers/statusCodes');
const errorMessages = require('../helpers/errorMessages');

const controllerGetAllProducts = async (_req, res) => {
  const result = await serviceGetAllProducts(); 
  res.status(statusCode.OK).json(result);
};

const controllerGetProductById = async (req, res) => {
  const { id } = req.params;
  const result = await serviceGetById(id);

  if (result) {
    return res.status(statusCode.OK).send(result);
  }

  res.status(statusCode.NotFound).json({
    message: errorMessages.notFoundData,
  });
};

const controllerRegisterProduct = async (req, res) => {
  const { name } = req.body;
  const result = await productsService.serviceRegisterProduct(name);

  res.status(statusCode.Created).json(result);
};

module.exports = {
  controllerGetAllProducts,
  controllerGetProductById,
  controllerRegisterProduct,
};