import * as express from 'express';
import TeamsController from '../controllers/teams.controller';

class TeamsRouter {
  route: express.Router;
  private teamsController = new TeamsController();
  constructor() {
    this.route = express.Router();

    this.route.get('/', this.teamsController.getAll);
  }
}

const teamsRouter = new TeamsRouter();

export default teamsRouter;
