const productsService = require('../services/products.service');

const {
  serviceGetAllProducts,
  serviceGetById,
  serviceRegisterProduct,
  serviceUpdateProduct,
} = productsService;

const statusCodes = require('../helpers/statusCodes');
const errorMessages = require('../helpers/errorMessages');

const controllerGetAllProducts = async (_req, res) => {
  const result = await serviceGetAllProducts(); 
  res.status(statusCodes.OK).json(result);
};

const controllerGetProductById = async (req, res) => {
  const { id } = req.params;
  const result = await serviceGetById(id);

  if (result) {
    return res.status(statusCodes.OK).send(result);
  }

  res.status(statusCodes.NotFound).json({
    message: errorMessages.notFoundData,
  });
};

const controllerRegisterProduct = async (req, res) => {
  const { name } = req.body;
  const result = await serviceRegisterProduct(name);

  res.status(statusCodes.Created).json(result);
};

const controllerUpdateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  
  const { statusCode, message } = await serviceUpdateProduct(id, name);

  res.status(statusCode).json(message);
};

module.exports = {
  controllerGetAllProducts,
  controllerGetProductById,
  controllerRegisterProduct,
  controllerUpdateProduct,
};