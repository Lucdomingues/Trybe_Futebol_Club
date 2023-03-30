import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import User from '../database/models/User';
import UsersServices from '../services/users.service';

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const userService = new UsersServices();

const jwtGenerator = async (reqBody: User) => {
  const { email } = reqBody;

  const user = await userService.getByEmail(email) as User;

  const token = jwt.sign(
    {
      data: {
        userId: user.id,
      },
    },
    secret,
    {
      expiresIn: '7d', algorithm: 'HS256',
    },
  );

  return token;
};

export default jwtGenerator;
