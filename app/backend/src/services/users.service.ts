import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import IData from '../interfaces/IData';
import User from '../database/models/User';
import jwtGenerator from '../auth/authFunc';

export default class UsersServices {
  private usersModel = User;

  getByEmail = async (email: string, password: string) => {
    const user = await this.usersModel.findOne({ where: { email } }) as User;

    if (!user) {
      return { type: 401, message: 'Invalid email or password' };
    }
    const decoded = bcrypt.compareSync(password, user.password);

    if (!decoded) {
      return { type: 401, message: 'Invalid email or password' };
    }
    const token = await jwtGenerator(user);

    return { type: null, message: token };
  };

  role = async (token: string) => {
    const { data: { role } } = jwt.decode(token) as IData;

    return { role };
  };
}
