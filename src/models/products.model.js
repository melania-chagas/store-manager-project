const connection = require('../connection');

const modelGetAllProducts = async () => connection.execute(
    'SELECT * FROM StoreManager.products',
  );

const modelGetProductsById = async (id) =>
  connection.execute(`SELECT * FROM StoreManager.products WHERE id = ${id}`);

const modelRegisterProduct = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products(name) VALUE(?)', [product],
  );
  const [[newProduct]] = await modelGetProductsById(insertId);
  return newProduct;
};

module.exports = {
  modelGetAllProducts,
  modelGetProductsById,
  modelRegisterProduct,
};