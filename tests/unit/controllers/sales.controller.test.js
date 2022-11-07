const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const {
  bodyMock,
  response,
  bodyMockProductIdLacking,
  bodyMockQuantityLacking,
} = require("../mocks/sales.mocks");

const salesService = require("../../../src/services/sales.service");
const salesController = require("../../../src/controllers/sales.controller");
const { controllerRegisterSale } = salesController;
const { serviceRegisterSale } = salesService;
const statusCodes = require('../../../src/helpers/statusCodes');
const { Created, NotFound } = statusCodes;
const errorMessages = require('../../../src/helpers/errorMessages');
const { notFoundData } = errorMessages;

const { expect } = chai;
chai.use(sinonChai);

describe("Camada controller de vendas", function () {
  afterEach(sinon.restore);

  it("Verifica se é possível registrar uma nova venda", async function () {
    const res = {};
    const req = {
      body: bodyMock,
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, "serviceRegisterSale")
      .resolves(response)

    await controllerRegisterSale(req, res);

    expect(res.status).to.have.been.calledWith(Created);

  });

  // it("Deve retornar um erro caso o productId não seja passado", async function () {
  //   const res = {};
  //   const req = {
  //     body: bodyMockProductIdLacking,
  //   };
  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();
  //   sinon
  //     .stub(salesService, "serviceRegisterSale")
  //     .resolves({
  //       statusCode: 404,
  //       message: 'Product not found',
  //     });

  //   await controllerRegisterSale(req, res);

  //   expect(res.status).to.have.been.calledWith(404);
  //   expect(res.json).to.have.been.calledWith({
  //     message: "Product not found",
  //   });
  // });

  // it("Deve retornar 'productId is required' se o productId não for passado", async () => {
  //   sinon
  //     .stub(salesService, "serviceRegisterSale")
  //     .resolves({
  //     statusCode: 400,
  //     message: '"productId" is required',
  //   });
  //   const req = {
  //     bodyMockProductIdLacking,
  //   };
  //   const res = {};

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();
  //   await controllerRegisterSale(req, res);

  //   expect(res.status).to.have.been.calledWith(400);
  //   expect(res.json).to.have.been.calledWith({
  //     message: '"productId" is required',
  //   });
  // });

  // it("Deve retornar um erro ao passar um quantity menor que 1", async () => {
  //   sinon
  //     .stub(salesService, "serviceRegisterSale")
  //     .resolves({
  //       statusCode: 422,
  //       message: '"quantity" must be greater than or equal to 1',
  //   });
  //   const req = {
  //     body: bodyMockQuantityLacking,
  //   };
  //   const res = {};

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();
  //   await controllerRegisterSale(req, res);

  //   expect(res.status).to.have.been.calledWith(422);
  //   expect(res.json).to.have.been.calledWith({
  //     message: '"quantity" must be greater than or equal to 1',
  //   });
  // });

 
});
