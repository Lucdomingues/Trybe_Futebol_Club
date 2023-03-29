import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

const app = require('../../src/app');
import Team from '../database/models/Team'
import teamMock from './mocks/teams.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Integration Test', () => {
  it('checks if /teams returns a list of teams', async () => {
    sinon.stub(Team, 'findAll').resolves(teamMock as Team[])

    const response = await chai.request(app).get('/teams')

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(teamMock as Team[]);
  });

  after(()=>{
    sinon.restore();
  })
});
