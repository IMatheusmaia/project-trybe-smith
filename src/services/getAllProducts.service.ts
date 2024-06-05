import productModel from '../database/models/product.model';
import { Product } from '../types/Product';

const getAllProducts = async (): Promise<Product[]> => {
  const products = await productModel.findAll();

  return products.map(({ dataValues }) => ({
    id: dataValues.id,
    name: dataValues.name,
    price: dataValues.price,
    userId: dataValues.userId,
  }));
};

export default getAllProducts;