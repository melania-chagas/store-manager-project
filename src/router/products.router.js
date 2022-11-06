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

productRouter.put('/:id', productValidation, controllerUpdateProduct);
productRouter.get('/:id', controllerGetProductById);
productRouter.delete('/:id', controllerDeleteProduct);
productRouter.get('/', controllerGetAllProducts);
productRouter.post('/', productValidation, controllerRegisterProduct);

module.exports = productRouter;