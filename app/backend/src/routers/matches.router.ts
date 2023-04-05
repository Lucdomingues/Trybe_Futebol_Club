import * as express from 'express';
import MatchesController from '../controllers/matches.controller';

class MatchesRouter {
  route: express.Router;
  private matchesController = new MatchesController();
  constructor() {
    this.route = express.Router();

    this.route.get('/', this.matchesController.getAll);
    // this.route.get('/:id', this.teamsController.getById);
  }
}

const matchesRouter = new MatchesRouter();

export default matchesRouter;
