const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const {
  productX,
  bodyMock,
  response,
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

  it("Deve retornar um erro caso o productId seja inválido", async function () {
    const res = {};
    const req = {
      body: bodyMock,
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, "serviceRegisterSale")
      .resolves({
        statusCode: NotFound,
        message: notFoundData
      });

    await controllerRegisterSale(req, res);

    expect(res.status).to.have.been.calledWith(NotFound);
    expect(res.json).to.have.been.calledWith({
      message: notFoundData,
    });
  });

  afterEach(sinon.restore);
});
