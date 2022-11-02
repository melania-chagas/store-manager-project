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

module.exports = {
  modelGetAllSales,
  modelGetById,
};