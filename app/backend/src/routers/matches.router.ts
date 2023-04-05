import * as express from 'express';
import MatchesController from '../controllers/matches.controller';
import Token from '../middlewares/validateToken';

class MatchesRouter {
  route: express.Router;
  private matchesController = new MatchesController();
  private validateToken = new Token();
  constructor() {
    this.route = express.Router();

    this.route.get('/', this.matchesController.getAllandFilters);
    this.route.patch(
      '/:id/finish',
      this.validateToken.validateToken,
      this.matchesController.matcheFinish,
    );
  }
}

const matchesRouter = new MatchesRouter();

export default matchesRouter;
