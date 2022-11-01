const express = require('express');
const productsController = require('../controllers/products.controller');

const productRouter = express.Router();

const productValidation = require('../middlewares/productValidation');

productRouter.get('/:id', productsController.controllerGetProductById);
productRouter.get('/', productsController.controllerGetAllProducts);
productRouter.post('/', productValidation, productsController.controllerRegisterProduct);

module.exports = {
  productRouter,
};