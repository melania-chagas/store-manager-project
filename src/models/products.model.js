const connection = require('../connection');

const modelGetAllProducts = async () => {
  const result = await connection.execute(
    'SELECT * FROM StoreManager.products',
  
  );
  return result;
};

const modelGetProductsById = async (id) =>
  connection.execute(`SELECT * FROM StoreManager.products WHERE id = ${id}`);

const modelRegisterProduct = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products(name) VALUE(?)', [product],
  );
  const [[newProduct]] = await modelGetProductsById(insertId);
  // const newProduct = { id: insertId, product };

  return newProduct;
};

const modelUpdateProduct = async (id, name) => {
  const [{ affectedRows }] = await connection.execute(
    `UPDATE StoreManager.products
    SET name = ? WHERE id = ?`, [name, id],
  );

  return affectedRows;
};

const modelDeleteProduct = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    `DELETE FROM StoreManager.products
    WHERE id = ${id};`,
  );

  return affectedRows;
};

module.exports = {
  modelGetAllProducts,
  modelGetProductsById,
  modelRegisterProduct,
  modelUpdateProduct,
  modelDeleteProduct,
};