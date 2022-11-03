const { expect } = require("chai");
const sinon = require("sinon");
const productsModel = require("../../../src/models/products.model");
const productsService = require("../../../src/services/products.service");
const { serviceGetAllProducts, serviceGetById, serviceRegisterProduct } =
  productsService;
const { products, product, registerProduct } = require("../mocks/products.mock");
const errorMessages = require('../../../src/helpers/errorMessages');

describe("Camada Service de produtos", function () {

  it("Listar todos os produtos", async function () {
    sinon.stub(productsModel, "modelGetAllProducts").resolves(products);
    const result = await serviceGetAllProducts();
    const expectedResult = [
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
    ];
    expect(result).to.be.deep.equal(expectedResult);
    expect(result).to.be.an('array');

  });

  it("Deve retornar o produto específico do id passado", async function () {
    sinon.stub(productsModel, "modelGetProductsById").resolves([[product]]);

    const result = await serviceGetById(2);

    expect(result).to.deep.equal(product);
  });

  it("Deve retornar 'false' ao tentar fazer a requisição com id inexistente", async () => {
    sinon.stub(productsModel, "modelGetProductsById").resolves([]);
    const result = await serviceGetById(10);
    expect(result).to.equal(false);
  });

  afterEach(sinon.restore);

  });

