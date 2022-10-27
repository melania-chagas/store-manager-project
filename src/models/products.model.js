const connection = require('../connection');

const modelGetAllProducts = async () => connection.execute(
    'SELECT * FROM StoreManager.products',
  );

const modelGetProductsById = async (id) =>
  connection.execute(`SELECT * FROM StoreManager.products WHERE id = ${id}`);

module.exports = {
  modelGetAllProducts,
  modelGetProductsById,
};