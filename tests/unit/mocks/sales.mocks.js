const productX = {
  id: 1,
  name: "ProdutoX",
};

const bodyMock = [
  {
    productId: 1,
    quantity: 1,
  }
];

const bodyMockProductIdLessThan1 = [
  {
    productId: -1 ,
    quantity: 1,
  },
];

const bodyMockQuantityLacking = [
  {
    productId: 1,
  },
];

const bodyMockProductIdLacking = [
  {
    quantity: 0,
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
  bodyMockProductIdLessThan1,
  bodyMockQuantityLacking,
  bodyMockProductIdLacking,
};
