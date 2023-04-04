import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import User from '../database/models/User';

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtGenerator = async (user: User) => {
  const token = jwt.sign(
    {
      data: {
        userId: user.id,
        email: user.email,
        role: user.role,
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
