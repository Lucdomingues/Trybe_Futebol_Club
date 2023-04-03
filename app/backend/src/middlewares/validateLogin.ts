import { Response, Request, NextFunction } from 'express';

const isPasswordAndEmail = (email:string, password:string) => email && password;

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!isPasswordAndEmail(email, password)) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  const regex = /\S+@\S+\.\S+/;
  const validacion = regex.test(email);

  if (!validacion || password.length < 6) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  next();
};

const validate = { validateLogin };

export default validate;
