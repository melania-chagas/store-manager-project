const snakeize = require('snakeize');
const connection = require('../connection');

const modelGetAllSales = async () => {
  const [result] = await connection.execute(
  `SELECT
    sales_products.sale_id AS saleId,
    sales.date,
    sales_products.product_id AS productId,
    sales_products.quantity
  FROM StoreManager.sales_products 

  INNER JOIN StoreManager.sales AS sales

  ON sales.id = sales_products.sale_id;`,
  );
  
  return result;
};

const modelGetById = async (id) => {
  const [result] = await connection.execute(
  `SELECT
      sales.date,
      sales_products.product_id AS productId,
      sales_products.quantity
  FROM StoreManager.sales_products

  INNER JOIN StoreManager.sales AS sales

  ON sales.id = sales_products.sale_id

  WHERE sales_products.sale_id = ${id};`,
  );
  return result;
};

const modelRegisterSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales() VALUE();',
  );
  return insertId;
};

const modelRegisterSaleInTheDatabase = async (sale) => {
  const columns = Object.keys(snakeize(sale))
    .map((key) => `${key}`)
    .join(', ');

  const values = Object.keys(sale)
    .map((_key) => '?')
    .join(', ');

  await connection.execute(
    `INSERT INTO StoreManager.sales_products (${columns})
    VALUE (${values});`,
    [...Object.values(sale)],
  );
};

module.exports = {
  modelGetAllSales,
  modelGetById,
  modelRegisterSale,
  modelRegisterSaleInTheDatabase,
};