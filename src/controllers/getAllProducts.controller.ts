import { Request, Response } from 'express';
import getAllProducts from '../services/getAllProducts.service';

const getAllProductsController = async (_req: Request, res: Response) => {
  const newProduct = await getAllProducts();

  res.status(200).json(newProduct);
};

export default getAllProductsController;