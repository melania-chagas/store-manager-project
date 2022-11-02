const statusCodes = require('../helpers/statusCodes');
const errorMessages = require('../helpers/errorMessages');
const salesModel = require('../models/sales.model');

const { modelGetAllSales, modelGetById } = salesModel;

const serviceGetAllSales = async () => {
  const sales = await modelGetAllSales();
  return {
    statusCode: statusCodes.OK,
    message: sales,
  };
};

const serviceGetById = async (id) => {
  const saleById = await modelGetById(id);

  if (saleById.length > 0) {
    return {
      statusCode: statusCodes.OK,
      message: saleById,
    };
  }

  return {
    statusCode: statusCodes.NotFound,
    message: {
      message: errorMessages.NotFoundSale,
    },
  };
};

module.exports = {
  serviceGetAllSales,
  serviceGetById,
};