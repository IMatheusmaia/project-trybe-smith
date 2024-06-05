import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import userModel from '../../../src/database/models/user.model';
import { User } from '../../../src/types/User';

chai.use(chaiHttp);

describe('GET /users', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Testa se ao requisitar a lista de usuários, retorna o objeto esperado', async function () {
    
    const user: User = {
      id: 10,
      vocation: 'qualquer',
      level: 100,
      username: 'matheus',
      password: 'password',
    };
    const listUsers: User[] = Array.from({ length: 3 }).map(() => user);
    console.log(listUsers);

    const dataReturn = listUsers.map((user) => userModel.build(user));

    sinon.stub(userModel, 'findAll').resolves(dataReturn);

    const response = await chai.request(app).get('/users').send(listUsers);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.lengthOf(3);
});

});
