import { Response, Request, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export default class Token {
  private secret = process.env.JWT_SECRET || 'seusecretdetoken';

  validateToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const decoded = jwt.verify(token as string, this.secret);

    if (!decoded) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }

    next();
  };
}
