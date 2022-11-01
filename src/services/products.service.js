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

const serviceRegisterProduct = async (product) => {
  const newProduct = await productsModel.modelRegisterProduct(product);
  return newProduct;
};

module.exports = {
  serviceGetAllProducts,
  serviceGetById,
  serviceRegisterProduct,
};
