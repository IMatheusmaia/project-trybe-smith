import Joi, { ObjectSchema } from 'joi';

type LoginSchemaType = {
  username: string;
  password: string;
};

const loginSchema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(6).required(),
}) as ObjectSchema<LoginSchemaType>;

export default loginSchema;