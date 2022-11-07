
const { expect } = require("chai");
const sinon = require("sinon");

const salesModel = require("../../../src/models/sales.model");
const salesService = require("../../../src/services/sales.service");
const productsModel = require('../../../src/models/products.model');
const productsService = require('../../../src/services/products.service');
const {
  bodyMock,
  response,
  bodyMockProductIdLessThan1,
  bodyMockQuantityLacking,
  bodyMockProductIdLacking,
} = require("../mocks/sales.mocks");

const { serviceRegisterSale } = salesService;

// describe("Camada service de vendas", () => {
//   beforeEach(sinon.restore);

//   it("Deve retornar um erro quando o productId é menor que 1", async () => {
//     const result = await serviceRegisterSale(bodyMockProductIdLessThan1);
//     expect(result).to.deep.equal({
//       message: '"productId" must be greater than or equal to 1',
//     });
//   });

//   it("Deve retornar um erro quando a quantity não é passada", async () => {
//     const result = await serviceRegisterSale(bodyMockQuantityLacking);
//     expect(result).to.deep.equal({
//       message: '"quantity" is required',
//     });
//   });

//   it("Deve retornar um erro quando o productId não é passado", async () => {
//     const result = await salesService.registerSales(bodyMockProductIdLacking);
//     expect(result).to.deep.equal({
//       message: '"productId" is required',
//     });
//   });

// });