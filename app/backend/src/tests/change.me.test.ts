import * as sinon from 'sinon';
import * as bcrypt from 'bcryptjs';
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

  afterEach(() => sinon.restore());

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

  it('check /login allows login with invalid email', async () => {
    sinon.stub(User, 'findOne').resolves(loginMocks.userMock as User)

    const response = await chai
      .request(app)
      .post('/login').send({
        email: 'invalid_email@',
        password: '123456',
      })

    expect(response.status).to.be.equal(401);
    expect(response.body).to.deep.equal({ message: 'Invalid email or password' });
  });

  it('checks if /login returns error 401 if password does not exist in db', async () => {
    sinon.stub(User, 'findOne').resolves(loginMocks.userMock as User)
    sinon.stub(bcrypt, 'compareSync').returns(false)

    const response = await chai
      .request(app)
      .post('/login').send({
        email: 'test@mock.com',
        password: 'invalid_password',
      })

    expect(response.status).to.be.equal(401);
    expect(response.body).to.deep.equal({ message: 'Invalid email or password' });
  });

  it('checks if /login returns a token', async () => {
    sinon.stub(User, 'findOne').resolves(loginMocks.userMock as User)
    sinon.stub(bcrypt, 'compareSync').returns(true)

    const response = await chai
      .request(app)
      .post('/login').send(loginMocks.loginMock)

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.key('token');
  });

  it('checks if /login returns error 401 if the specified email does not exist in the db', async () => {
    sinon.stub(User, 'findOne').resolves(null)
    sinon.stub(bcrypt, 'compareSync').returns(true)

    const response = await chai
      .request(app)
      .post('/login').send({
        email: 'email_not@exists.com',
        password: '123456',
      })

    expect(response.status).to.be.equal(401);
    expect(response.body).to.deep.equal({ message: 'Invalid email or password' });
  });

  it('checks if /login returns error 400 if email is not specified', async () => {
    sinon.stub(User, 'findOne').resolves(null)
    sinon.stub(bcrypt, 'compareSync').returns(true)

    const response = await chai
      .request(app)
      .post('/login').send({
        password: '123456',
      })

    expect(response.status).to.be.equal(400);
    expect(response.body).to.deep.equal({ message: 'All fields must be filled' });
  });

  it('checks if /login returns error 400 if password is not specified', async () => {
    sinon.stub(User, 'findOne').resolves(null)
    sinon.stub(bcrypt, 'compareSync').returns(true)

    const response = await chai
      .request(app)
      .post('/login').send({
        email: 'test@mock.com',
      })

    expect(response.status).to.be.equal(400);
    expect(response.body).to.deep.equal({ message: 'All fields must be filled' });
  });

  // it('checks if the login method returns the users role if the token is specified', async () => {
  //   sinon.stub(User, 'findByPk').resolves(loginMocks.userMock as User)
  //   sinon.stub(bcrypt, 'compareSync').returns(true)

  //   const response = await chai
  //     .request(app)
  //     .get('/login')

  //   expect(response.status).to.be.equal(200);
  //   expect(response.body).to.deep.equal({ role: 'admin' });
  // });
});
