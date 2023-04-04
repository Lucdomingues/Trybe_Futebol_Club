import * as express from 'express';
import validate from '../middlewares/validateLogin';
import UserController from '../controllers/users.controller';
import Token from '../middlewares/validateToken';

class LoginRouter {
  route: express.Router;
  private userController = new UserController();
  private token = new Token();
  constructor() {
    this.route = express.Router();

    this.route.get(
      '/role',
      this.token.validateToken,
      this.userController.verifyLogin,
    );
    this.route.post(
      '/',
      validate.validateLogin,
      this.userController.authLogin,
    );
  }
}

const loginRouter = new LoginRouter();

export default loginRouter;
