import { Optional } from 'sequelize';
import userModel from '../database/models/user.model';
import { User } from '../types/User';

type ExcludeTypeUser = 'id' | 'vocation' | 'level' | 'password';
type UserInfo = Optional<User, ExcludeTypeUser>;

const getAllUsers = async (): Promise<UserInfo[]> => {
  const users = await userModel.findAll({
    include: 'productIds',
    attributes: {
      exclude: ['id', 'vocation', 'level', 'password'] },
  });

  return users.map(({ dataValues }) => ({
    username: dataValues.username,
    productIds: dataValues.productIds?.map(
      (product: any) => product.id,
    ),
  }));
};

export default getAllUsers;