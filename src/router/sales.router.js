const express = require('express');

const salesRouter = express.Router();

const salesController = require('../controllers/sales.controller');

const { controllerGetAllSales, controllerGetSaleById } = salesController;

salesRouter.get('/:id', controllerGetSaleById);
salesRouter.get('/', controllerGetAllSales);

module.exports = {
  salesRouter,
};
