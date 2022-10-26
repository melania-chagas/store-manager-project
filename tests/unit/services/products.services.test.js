const { expect } = require("chai");
const sinon = require("sinon");

const productsModel = require("../../../src/models/products.model");
const productsService = require("../../../src/services/products.service");
const {serviceGetAllProducts, serviceGetById } = productsService
const { products, product } = require("../mocks/products.mock");

describe("Camada Service de produtos", function () {
  it("Listar todos os produtos", async function () {
    sinon.stub(productsModel, "modelGetAllProducts").resolves([products]);

    const result = await serviceGetAllProducts();

    expect(result).to.deep.equal(products);
  });

    it("Deve retornar o produto específico do id passado", async function () {
      sinon.stub(productsModel, "modelGetProductsById").resolves([[product]]);

      const result = await serviceGetById(2);

      expect(result).to.deep.equal(product);
    });

    afterEach(sinon.restore);
  });

