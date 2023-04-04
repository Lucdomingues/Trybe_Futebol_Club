import { Response, Request, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export default class Token {
  private secret = process.env.JWT_SECRET || 'seusecretdetoken';

  validateToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { authorization: token } = req.headers;

      if (!token) {
        return res.status(401).json({ message: 'Token not found' });
      }

      jwt.verify(token, this.secret);

      next();
    } catch (error) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  };
}
