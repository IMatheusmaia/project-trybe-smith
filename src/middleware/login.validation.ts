import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import loginSchema from '../validations/login.schema';
import userModel from '../database/models/user.model';

const findUser = async (username: string): Promise<any> => {
  const userExists = await userModel.findOne({ where: { 
    username,
  },
  attributes: ['id', 'username', 'password'] });
  return userExists;
};

const loginValidation = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  const { username, password } = req.body;

  const { error } = loginSchema.validate({ username, password });
  if (error) {
    const ERROR = new Error('"username" and "password" are required');
    return res.status(400).json({ message: ERROR.message });
  }
  const userExists = await findUser(username);
  if (!userExists?.dataValues.username
    || !bcrypt.compareSync(password, userExists?.dataValues.password)
  ) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  next();
};

export default loginValidation;