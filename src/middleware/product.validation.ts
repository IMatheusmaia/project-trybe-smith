import { Request, Response, NextFunction } from 'express';
import productSchema from '../validations/product.schema';
import userModel from '../database/models/user.model';

const findUser = async (userId: number): Promise<boolean> => {
  const userExists = await userModel.findOne({ where: { 
    id: userId,
  },
  });
  if (!userExists) return false;
  return true;
};

const productValidation = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { name, price, userId } = req.body;

  const { error } = productSchema.validate({ name, price, userId });

  if (error) {
    if (error.message.includes('required')) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(422).json({ message: error.message });
  }
  const userExists = await findUser(userId);

  if (userExists === false) {
    return res.status(422).json({ message: '"userId" not found' });
  }
  if (typeof userId !== 'number') {
    return res.status(422).json({ message: '"userId" must be a number' });
  }
  next();
};

export default productValidation;