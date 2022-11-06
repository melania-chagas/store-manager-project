
const chai = require("chai");
const sinon = require("sinon");
const chaiHttp = require("chai-http");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);
chai.use(chaiHttp);

const app = require("../../../src/app");
const connection = require("../../../src/connection");

const { products, product } = require("../mocks/products.mock");
const statusCode = require('../../../src/helpers/statusCodes');
const errorMessages = require('../../../src/helpers/errorMessages');
const productsService = require('../../../src/services/products.service');
const productsController = require("../../../src/controllers/products.controller");

describe("Camada Controller de produtos", function () {
  it("Listar todos os produtos", async function () {
    sinon.stub(connection, "execute").resolves([products]);

    const result = await chai.request(app).get("/products");

    expect(result.status).to.be.equal(statusCode.OK);
    expect(result.body).to.be.deep.equal(products);
  });

  it("Deve retornar o produto específico do id passado", async function () {
    sinon.stub(connection, "execute").resolves([[product]]);

    const result = await chai.request(app).get("/products/2");

    expect(result.status).to.be.equal(statusCode.OK);
    expect(result.body).to.be.deep.equal(product);
  });

  it("Deve retornar 'Product not found' quando nenhum produto for encontrado ", async function () {
    sinon.stub(connection, "execute").resolves([[]]);

    const result = await chai.request(app).get("/products/50");

    expect(result.status).to.be.equal(statusCode.NotFound);
    expect(result.body).to.be.deep.equal({
      message: errorMessages.notFoundData,
    });
  });


  
  afterEach(sinon.restore);
});
