const products = [[
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  },
  {
    id: 3,
    name: "Escudo do Capitão América",
  },
]];

const product = {
  id: 2,
  name: "Traje de encolhimento",
};

const registerProduct = {
  id:1,
  name: "ProdutoX",
};

const deleteProduct = {
  statusCode: 204,
}

module.exports = {
  products,
  product,
  registerProduct,
};
