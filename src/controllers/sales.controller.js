const serviceSales = require('../services/sales.service');

const statusCodes = require('../helpers/statusCodes');

const {
  serviceGetAllSales,
  serviceGetSaleById,
  serviceRegisterSale,
  serviceDeleteSale,
} = serviceSales;

const { Created } = statusCodes;

const controllerGetAllSales = async (_req, res) => {
  const { statusCode, message } = await serviceGetAllSales();

  res.status(statusCode).json(message);
};

const controllerGetSaleById = async (req, res) => {
  const { id } = req.params;
  const { statusCode, message } = await serviceGetSaleById(id);

  res.status(statusCode).json(message);
};

const controllerRegisterSale = async (req, res) => {
  const newSale = req.body;

  const { statusCode, message } = await serviceRegisterSale(newSale);

  if (statusCode === Created) {
    return res.status(statusCode).json(message);
  }

  res.status(statusCode).json({
    message,
  });
};

// const controllerDeleteSale = async (req, res) => {
//   const { id } = req.params;

//   const { statusCode, message } = await serviceDeleteSale(id);

//   res.status(statusCode).json(message);
// };

module.exports = {
  controllerGetAllSales,
  controllerGetSaleById,
  controllerRegisterSale,
  // controllerDeleteSale,
};
