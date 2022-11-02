const productsModel = require('../models/products.model');
const statusCodes = require('../helpers/statusCodes');
const errorMessages = require('../helpers/errorMessages');

const {
  modelGetAllProducts,
  modelGetProductsById,
  modelRegisterProduct,
  modelUpdateProduct,
  modelDeleteProduct,
} = productsModel;

const serviceGetAllProducts = async () => {
  const [result] = await modelGetAllProducts();
  return result;
};

const serviceGetById = async (id) => {
  const [[result]] = await modelGetProductsById(id);
  return result || false;
};

const serviceRegisterProduct = async (product) => {
  const newProduct = await modelRegisterProduct(product);
  return newProduct;
};

const serviceUpdateProduct = async (id, name) => {
  const product = await serviceGetById(id);
  
  if (!product || product === '') {
    return {
      statusCode: statusCodes.NotFound,
      message: {
        message: errorMessages.notFoundData,
      },
    };
  }

  await modelUpdateProduct(id, name);

  return {
    statusCode: statusCodes.OK,
    message: { id, name },
  };
};

const serviceDeleteProduct = async (id) => {
  const product = await serviceGetById(id);
  if (!product || product === '') {
    return {
      statusCode: statusCodes.NotFound,
      message: {
        message: errorMessages.notFoundData,
      },
    };
  }

  await modelDeleteProduct(id);

  return {
    statusCode: statusCodes.NoContent,
  };
};

module.exports = {
  serviceGetAllProducts,
  serviceGetById,
  serviceRegisterProduct,
  serviceUpdateProduct,
  serviceDeleteProduct,
};
