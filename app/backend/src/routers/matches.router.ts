import * as express from 'express';
import MatchesController from '../controllers/matches.controller';

class MatchesRouter {
  route: express.Router;
  private matchesController = new MatchesController();
  constructor() {
    this.route = express.Router();

    this.route.get('/', this.matchesController.getAllandFilters);
  }
}

const matchesRouter = new MatchesRouter();

export default matchesRouter;
