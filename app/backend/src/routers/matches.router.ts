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
    this.route.patch(
      '/:id',
      this.validateToken.validateToken,
      this.matchesController.matcheUpdate,
    );
    this.route.post(
      '/',
      this.validateToken.validateToken,
      this.matchesController.matcheCreate,
    );
  }
}

const matchesRouter = new MatchesRouter();

export default matchesRouter;
