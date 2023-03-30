import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

const {app} = require('../../src/app');
import Team from '../database/models/Team'
import User from '../database/models/User'
import teamsMocks from './mocks/teams.mock';
import loginMocks from './mocks/login.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Integration Test', () => {
  it('checks if /teams returns a list of teams', async () => {
    sinon.stub(Team, 'findAll').resolves(teamsMocks.teamsMock as Team[])

    const response = await chai.request(app).get('/teams')

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(teamsMocks.teamsMock as Team[]);
  });

  it('checks if /teams returns a time by id', async () => {
    sinon.stub(Team, 'findByPk').resolves(teamsMocks.teamsMock[0] as Team)

    const response = await chai.request(app).get('/teams/1')

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(teamsMocks.teamMock as Team);
  });

  it('checks if /login returns a token', async () => {
    sinon.stub(User, 'findOne').resolves(loginMocks.loginMock as User)

    const response = await chai
      .request(app)
      .post('/login').send({
        email: 'test@mock.com',
        password: '123456',
      })

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal({ token: loginMocks.tokenMock });
  });

  after(()=>{
    sinon.restore();
  })
});
