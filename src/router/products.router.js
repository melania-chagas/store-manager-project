const express = require('express');
const productsController = require('../controllers/products.controller');

const productRouter = express.Router();

productRouter.get('/:id', productsController.controllerGetProductById);
productRouter.get('/', productsController.controllerGetAllProducts);

module.exports = {
  productRouter,
};