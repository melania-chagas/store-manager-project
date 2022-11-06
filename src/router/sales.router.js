const express = require('express');

const salesRouter = express.Router();

const salesController = require('../controllers/sales.controller');
const salesValidation = require('../middlewares/salesValidation');

const { controllerGetAllSales, controllerGetSaleById, controllerRegisterSale } = salesController;

salesRouter.get('/:id', controllerGetSaleById);
salesRouter.get('/', controllerGetAllSales);
salesRouter.post('/', salesValidation, controllerRegisterSale);

module.exports = salesRouter;
