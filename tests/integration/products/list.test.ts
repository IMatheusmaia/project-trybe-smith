import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productModel from '../../../src/database/models/product.model';
import { Product } from '../../../src/types/Product';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Testa se ao requisitar a lista de produtos, retorna o status code e o objeto esperado', async function () {
    
    const product: Product = {
      id: 10,
      name: 'Dawbraker',
      price: '15 lingotes de ouro',
      userId: 1,
    };
    const listProduct: Product[] = Array.from({ length: 3 }).map(() => product);
    console.log(listProduct);

    const dataReturn = listProduct.map((product) => productModel.build(product));

    sinon.stub(productModel, 'findAll').resolves(dataReturn);

    const response = await chai.request(app).get('/products').send(listProduct);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.lengthOf(3);
});

});
