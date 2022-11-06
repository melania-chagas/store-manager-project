const statusCodes = require('../helpers/statusCodes');
const errorMessages = require('../helpers/errorMessages');
const salesModel = require('../models/sales.model');
const productsService = require('./products.service');

const { serviceGetById } = productsService;

const {
  modelGetAllSales,
  modelGetById,
  modelRegisterSale,
  modelRegisterSaleInTheDatabase,
  modelDeleteSale,
} = salesModel;

const { OK, NotFound, Created, NoContent } = statusCodes;
const { NotFoundSale, notFoundData } = errorMessages;

const serviceGetAllSales = async () => {
  const sales = await modelGetAllSales();
  return {
    statusCode: OK,
    message: sales,
  };
};

const serviceGetSaleById = async (id) => {
  const saleById = await modelGetById(id);

  if (saleById.length > 0) {
    return {
      statusCode: OK,
      message: saleById,
    };
  }

  return {
    statusCode: NotFound,
    message: {
      message: NotFoundSale,
    },
  };
};

const verifyProductsIds = async (products) => {
  const results = [];
  await Promise.all(
    products.map(async ({ productId }) => {
      const id = await serviceGetById(productId);
      results.push(id);
    }),
  );
  return results.every((result) => result);
};

const insertSaleId = (saleId, products) =>
  products.map((product) => ({
    ...product,
    saleId,
  }));

const serviceRegisterSaleInDatabase = (saleId, sale) => {
  const readyToInsertIntoDatabase = insertSaleId(saleId, sale);

  readyToInsertIntoDatabase.forEach(async (product) => {
    await modelRegisterSaleInTheDatabase(product);
  });
};

const serviceRegisterSale = async (sale) => {
  const idValid = await verifyProductsIds(sale);

  if (!idValid || idValid === '') {
    return {
      statusCode: NotFound,
      message: notFoundData,
    };
  }

  const saleId = await modelRegisterSale();
  serviceRegisterSaleInDatabase(saleId, sale);

  return {
    statusCode: Created,
    message: {
      id: saleId,
      itemsSold: sale,
    },
  };
};

const serviceDeleteSale = async (id) => {
  const saleId = await serviceGetSaleById(id);
  
  if (saleId.statusCode === NotFound) {
    return saleId;
  }

  await modelDeleteSale(id);

  return {
    statusCode: NoContent,
    message: undefined,
  };
};

module.exports = {
  serviceGetAllSales,
  serviceGetSaleById,
  serviceRegisterSale,
  serviceDeleteSale,
};