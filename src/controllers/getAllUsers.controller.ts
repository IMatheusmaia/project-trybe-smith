import { Request, Response } from 'express';
import getAllUsers from '../services/getAllUsers.service';

const getAllUsersController = async (_req: Request, res: Response) => {
  const users = await getAllUsers();

  res.status(200).json(users);
};

export default getAllUsersController;