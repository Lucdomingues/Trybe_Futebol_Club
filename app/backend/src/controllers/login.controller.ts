import { Request, Response } from 'express';
// import * as bcrypt from 'bcryptjs';
import jwtGenerator from '../auth/authFunc';
// import UsersServices from '../services/users.service';
// import ILogin from '../interfaces/ILogin';

const isBodyValid = (email: string, password: string) => email && password;

export default class LoginController {
  // private usersServices = new UsersServices();
  authLogin = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      if (!isBodyValid(email, password)) {
        return res.status(400).json({ message: 'All fields must be filled' });
      }
      // const user = await this.usersServices.getByEmail(email) as ILogin;

      // const hash = user.password as string;

      // console.log(await bcrypt.compare(password, hash));

      const token = await jwtGenerator(req.body);

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json('Server Error!');
    }
  };
}
