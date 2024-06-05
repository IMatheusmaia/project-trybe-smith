import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import userModel from '../database/models/user.model';

type TokenPayload = {
  id: number | undefined,
  username: string | undefined,
};

const secret = process.env.JWT_SECRET as string;

const authentication = async (req: Request, res: Response): Promise<Response> => {
  const { username } = req.body;

  const user = await userModel.findOne({
    where: { username },
    attributes: ['id', 'username'],
  });

  const payload: TokenPayload = {
    id: user?.dataValues.id,
    username: user?.dataValues.username,
  };

  const token = jwt.sign(payload, secret);
  return res.status(200).json({ token });
};

export default authentication;