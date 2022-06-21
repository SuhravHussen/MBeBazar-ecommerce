import { TokenData, DataStoredInToken } from '@interfaces/auth.interface';
import { HttpException } from '@exceptions/HttpException';
import { JWT_REFRESH_EXPIRE, JWT_TOKEN_EXPIRE, SECRET_KEY } from '@config/index';
import { sign } from 'jsonwebtoken';
import redisClient from '@/databases/redis';

// Create a token
export const generateJwt = async (payload: DataStoredInToken): Promise<TokenData> => {
  payload = JSON.parse(JSON.stringify(payload));

  try {
    const token = await sign(payload, SECRET_KEY, { expiresIn: JWT_TOKEN_EXPIRE + 's' });
    const refreshToken = await sign(payload, SECRET_KEY, { expiresIn: JWT_REFRESH_EXPIRE + 's' });
    await redisClient.set(payload._id, refreshToken);
    redisClient.expire(payload._id, parseInt(JWT_REFRESH_EXPIRE));
    const tokens: TokenData = {
      token: token,
      refreshToken: refreshToken,
    };
    return tokens;
  } catch (e) {
    throw new HttpException(500, e.message);
  }
};
