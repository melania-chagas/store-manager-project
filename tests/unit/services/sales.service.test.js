
// const { expect } = require("chai");
// const sinon = require("sinon");

// const salesModel = require("../../../src/models/sales.model");
// const salesService = require("../../../src/services/sales.service");
// const productsService = require('../../../src/services/products.service');
// const { bodyMock, response } = require("../mocks/sales.mocks");

// const { serviceRegisterSale } = salesService;

// describe("Camada service de vendas", function () {
//   it("Verifica se é possível registrar uma nova venda", async function () {
//     sinon.stub(salesModel, "modelRegisterSale").resolves(1);
//     sinon.stub(productsService, "serviceGetById").resolves({
//       id: 1,
//       name: "Martelo de Thor",
//     });
//     sinon.stub(salesModel, "modelRegisterSaleInTheDatabase").resolves();

//     const result = await   serviceRegisterSale(bodyMock);

//     expect(result).to.deep.equal(response);
//   });

//   it("Deve retornar um erro caso o productId seja inválido", async function () {
//     sinon.stub(salesModel, "modelRegisterSale").resolves(1);
//     sinon.stub(productsService, "serviceGetById").resolves(false);
//     sinon.stub(salesModel, "modelRegisterSaleInTheDatabase").resolves();

//     const result = await serviceRegisterSale(bodyMock);

//     expect(result).to.deep.equal({
//       statusCode: 404,
//       message: "Product not found",
//     });
//   });

//   afterEach(sinon.restore);
// });