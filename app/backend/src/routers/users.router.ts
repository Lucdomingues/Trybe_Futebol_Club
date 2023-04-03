import * as express from 'express';
import validate from '../middlewares/validateLogin';
import UserController from '../controllers/users.controller';

class LoginRouter {
  route: express.Router;
  private userController = new UserController();
  constructor() {
    this.route = express.Router();

    this.route.post(
      '/',
      validate.validateLogin,
      this.userController.authLogin,
    );
  }
}

const loginRouter = new LoginRouter();

export default loginRouter;
