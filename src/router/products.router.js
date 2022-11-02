const express = require('express');
const productsController = require('../controllers/products.controller');

const {
  controllerGetAllProducts,
  controllerGetProductById,
  controllerRegisterProduct,
  controllerUpdateProduct,
  controllerDeleteProduct,
} = productsController;
const productRouter = express.Router();

const productValidation = require('../middlewares/productValidation');

productRouter.get('/:id', controllerGetProductById);
productRouter.put('/:id', productValidation, controllerUpdateProduct);
productRouter.get('/', controllerGetAllProducts);
productRouter.post('/', productValidation, controllerRegisterProduct);
productRouter.delete('/:id', controllerDeleteProduct);

module.exports = {
  productRouter,
};