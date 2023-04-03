import * as bcrypt from 'bcryptjs';
import User from '../database/models/User';
import jwtGenerator from '../auth/authFunc';

export default class UsersServices {
  private usersModel = User;

  getAll = async () => {
    const users = await this.usersModel.findAll() as User[];

    return users;
  };

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
}
