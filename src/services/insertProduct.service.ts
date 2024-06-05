import productModel, { ProductInputtableTypes } from '../database/models/product.model';

const insertProduct = async (input: ProductInputtableTypes): Promise<ProductInputtableTypes> => {
  const newProduct = await productModel.create(input);

  return {
    id: newProduct.dataValues.id,
    name: newProduct.dataValues.name,
    price: newProduct.dataValues.price,
    userId: newProduct.dataValues.userId,
  };
};

export default insertProduct;
