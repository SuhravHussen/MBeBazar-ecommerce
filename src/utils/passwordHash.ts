import { HttpException } from '@exceptions/HttpException';
import { genSalt, hash } from 'bcrypt';
export const hashPassword = async (password: string): Promise<string> => {
  try {
    const salt = await genSalt(10);
    const hashed = await hash(password, salt);

    return hashed;
  } catch (err) {
    throw new HttpException(400, err.message);
  }
};
