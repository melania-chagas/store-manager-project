const productsModel = require('../models/products.model');

const { modelGetAllProducts, modelGetProductsById } = productsModel;

const serviceGetAllProducts = async () => {
  const [result] = await modelGetAllProducts();
  return result;
};

const serviceGetById = async (id) => {
  const [[result]] = await modelGetProductsById(id);
  return result || false;
};

module.exports = {
  serviceGetAllProducts,
  serviceGetById,
};
