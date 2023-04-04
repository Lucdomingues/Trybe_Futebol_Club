import { Request, Response } from 'express';
import UsersServices from '../services/users.service';

export default class UserController {
  private usersServices = new UsersServices();

  authLogin = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const user = await this.usersServices.getByEmail(email, password);
      const { type, message } = user;

      if (type) {
        return res.status(type).json({ message });
      }

      return res.status(200).json({ token: message });
    } catch (error) {
      return res.status(500).json('Server Error!');
    }
  };

  verifyLogin = async (req: Request, res: Response) => {
    try {
      const { Authorization: token } = req.headers;

      const response = await this.usersServices.role(token as string);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json('Server Error!');
    }
  };
}
