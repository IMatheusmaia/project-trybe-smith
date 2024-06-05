import Joi, { ObjectSchema } from 'joi';

type ProductSchemaType = {
  username: string;
  password: string;
};

const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.string().min(3).required(),
  userId: Joi.number().required(),
}) as ObjectSchema<ProductSchemaType>;

export default productSchema;