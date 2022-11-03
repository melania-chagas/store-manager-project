const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/connection');
const productsModel = require('../../../src/models/products.model');
const { modelGetAllProducts, modelGetProductsById, modelRegisterProduct } = productsModel;
const { products, product } = require('../mocks/products.mock');

describe('Camada Model de produtos', function () {
  describe('Listar todos os produtos', function () { 
    it('Deve retornar um array com todos os elementos', async function () {

      sinon.stub(connection, "execute").resolves(products);

      const result = await modelGetAllProducts();

      expect(result).to.be.a('array');
      expect(result).to.be.deep.equal(products);
      
    });

    it("Deve retornar o produto específico do id passado", async function () {

      sinon.stub(connection, "execute").resolves(product);

      const result = await modelGetProductsById(2);
      
      expect(result).to.be.deep.equal(product);
    });

    afterEach(() => {
      sinon.restore();
    })
  })
})