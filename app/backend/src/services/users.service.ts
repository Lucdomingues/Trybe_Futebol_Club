import User from '../database/models/User';

export default class UsersServices {
  private usersModel = User;

  getByEmail = async (email: string) => {
    const user = await this.usersModel.findOne({ where: { email } });

    return user;
  };
}
