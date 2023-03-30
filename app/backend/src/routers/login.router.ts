import * as express from 'express';
import LoginController from '../controllers/login.controller';

class LoginRouter {
  route: express.Router;
  private loginController = new LoginController();
  constructor() {
    this.route = express.Router();

    this.route.post('/', this.loginController.authLogin);
  }
}

const loginRouter = new LoginRouter();

export default loginRouter;
