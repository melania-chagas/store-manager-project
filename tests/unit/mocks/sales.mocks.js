const productX = {
  id: 1,
  name: "ProdutoX",
};

const bodyMock = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const response = {
  statusCode: 201,
  message: {
    id: 1,
    itemsSold: bodyMock,
  }
}

module.exports = {
  productX,
  bodyMock,
  response,
};
