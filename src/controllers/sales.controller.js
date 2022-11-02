const serviceSales = require('../services/sales.service');

const { serviceGetAllSales, serviceGetById } = serviceSales;

const controllerGetAllSales = async (_req, res) => {
  const { statusCode, message } = await serviceGetAllSales();

  res.status(statusCode).json(message);
};

const controllerGetSaleById = async (req, res) => {
  const { id } = req.params;
  const { statusCode, message } = await serviceGetById(id);

  res.status(statusCode).json(message);
};

module.exports = {
  controllerGetAllSales,
  controllerGetSaleById,
};
