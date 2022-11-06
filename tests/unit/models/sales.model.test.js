const { expect } = require("chai");
const sinon = require("sinon");

const connection = require("../../../src/connection");
const salesModel = require("../../../src/models/sales.model");
const { bodyMock } = require("../mocks/sales.mocks");
const { modelRegisterSale, modelRegisterSaleInTheDatabase } = salesModel;

describe("Camada model de vendas", function () {
  it("Verifica se é possível registrar uma venda", async function () {
    sinon.stub(connection, "execute").resolves([{ insertId: 1 }]);

    const result = await modelRegisterSale();
    expect(result).to.equal(1);
  });

  it("Inserindo uma venda no banco de dados", async function () {
    sinon.stub(connection, "execute").resolves();

    const result = await modelRegisterSaleInTheDatabase(bodyMock);

    expect(result).to.be.undefined;
  });

  afterEach(sinon.restore);
});
