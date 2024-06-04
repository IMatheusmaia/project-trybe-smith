import { Request, Response } from 'express';
import insertProduct from '../services/products.service';

const insertProductController = async (req: Request, res: Response) => {
  const { body } = req;
  const newProduct = await insertProduct(body);

  res.status(201).json(newProduct);
};

export default insertProductController;