import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

const {app} = require('../../src/app');
import Team from '../database/models/Team'
import mocks from './mocks/teams.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Integration Test', () => {
  it('checks if /teams returns a list of teams', async () => {
    sinon.stub(Team, 'findAll').resolves(mocks.teamsMock as Team[])

    const response = await chai.request(app).get('/teams')

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(mocks.teamsMock as Team[]);
  });

  it('checks if /teams returns a specific team through its id', async () => {
    sinon.stub(Team, 'findByPk').resolves(mocks.teamsMock[0] as Team)

    const response = await chai.request(app).get('/teams/1')

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(mocks.teamMock as Team);
  });

  after(()=>{
    sinon.restore();
  })
});
