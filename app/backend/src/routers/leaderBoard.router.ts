import * as express from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

class LeaderboardRouter {
  route: express.Router;
  private leaderboardController = new LeaderboardController();
  constructor() {
    this.route = express.Router();

    this.route.get('/home', this.leaderboardController.getAllTeam);
    this.route.get('/away', this.leaderboardController.getAllAway);
    this.route.get('/', this.leaderboardController.getAll);
  }
}

const leaderboardRouter = new LeaderboardRouter();

export default leaderboardRouter;
