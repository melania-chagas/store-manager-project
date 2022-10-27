const connection = require('../connection');

const modelGetAllProducts = async () => connection.execute(
    'SELECT * FROM products',
  );

const modelGetProductsById = async (id) =>
  connection.execute(`SELECT * FROM products WHERE id = ${id}`);

module.exports = {
  modelGetAllProducts,
  modelGetProductsById,
};