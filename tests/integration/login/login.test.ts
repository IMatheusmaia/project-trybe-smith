import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import userModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  // it('Testa se ao logar com um usuário válido um token é retornado', async function () {
  
  //   sinon.stub(userModel, 'findOne').resolves(userModel.build({
  //     id: 10,
  //     username: 'Matheus',
  //     vocation: 'qualquer',
  //     level: 100,
  //     password: '$2a$10$e6LY5fGCL1R8KgugND30bOtFixs0fkPw4SK2expJddRMcYITRHX2W',
  //   }));

  //   const response = await chai.request(app).post('/login').send({ 
  //     username: 'Matheus',
  //     password: 'terrível'
  //   })

  //   expect(response.status).to.be.equal(200);
  //   expect(response.body).to.have.key('token');
  //   expect(response.body.token).to.be.a('string');
  // })
  it('Testa se ao não fornecer o campo "username" retorna uma menssagem de erro', async function () {
    const response = await chai.request(app).post('/login').send({ password: 'password'})

    expect(response.status).to.be.equal(400);
    expect(response.body.message).to.be.equal('"username" and "password" are required');
  })
});
