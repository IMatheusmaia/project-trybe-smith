import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productModel from '../../../src/database/models/product.model';
import { inputProduct } from '../../mocks/products.mock';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Testa se ao criar um novo produto com sucesso retorna o status code e o objeto esperado', async function () {
    
    const dataReturn = productModel.build({
      id: 9,
      name: 'Excalibur',
      price: '100 lingotes de ouro',
      userId: 3,
    });

    sinon.stub(productModel, 'create').resolves(dataReturn);

    const response = await chai.request(app).post('/products').send(inputProduct);

    expect(response.status).to.equal(201);
    expect(response.body).to.be.deep.equal({...inputProduct, id: 9 });
});
it('Testa se ao não fornecer o campo "name" retorna uma menssagem de erro', async function () {
  const response = await chai.request(app).post('/products').send({ prince: '10 lingotes de prata'})

  expect(response.status).to.be.equal(400);
})
it('Testa se ao não fornecer o campo "name" muito curto retorna uma menssagem de erro', async function () {
  const response = await chai.request(app).post('/products').send({ prince: '10 lingotes de prata', name: 'a'})

  expect(response.status).to.be.equal(422);
})
it('Testa se ao não fornecer o campo "name" diferente de uma string retorna uma menssagem de erro', async function () {
  const response = await chai.request(app).post('/products').send({ prince: '10 lingotes de prata', name: 10 })

  expect(response.status).to.be.equal(422);
})
});
