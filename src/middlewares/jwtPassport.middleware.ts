import { generateJwt } from '@/utils/jwt';
import { DataStoredInToken, RequestWithUser } from '@interfaces/auth.interface';
import redisClient from '@databases/redis';
import Jwt from 'jsonwebtoken';
import { HttpException } from '@exceptions/HttpException';
import { SECRET_KEY, JWT_REFRESH_EXPIRE } from '@config/index';

const setCookie = (req: RequestWithUser, res, next) => {
  let jwt, refreshToken;

  if (req.body.tokens === undefined) throw new HttpException(401, 'unauthorized');
  if (!req.body.tokens) throw new HttpException(401, 'unauthorized');
  if (!req.isFormData) {
    jwt = req.body.tokens['jwt-token'] || '';
    refreshToken = req.body.tokens['refresh-token'] || '';
  } else {
    const parsed = JSON.parse(req.body.tokens);
    jwt = parsed['jwt-token'] || '';
    refreshToken = parsed['refresh-token'] || '';
  }

  if (jwt === '' && refreshToken === '') throw new HttpException(401, 'unauthorized');
  Jwt.verify(jwt, SECRET_KEY as string, async err => {
    if (err) {
      Jwt.verify(refreshToken, SECRET_KEY as string, async err => {
        if (!err) {
          const payload: any = Jwt.decode(refreshToken);

          const verified = await redisClient.get(payload._id);

          if (verified === refreshToken) {
            const jwtPayload: DataStoredInToken = {
              _id: payload._id,
              name: payload.name,
              address: payload.address,
              avatar: payload.avatar,
              email: payload.email,
            };
            const tokens = await generateJwt(jwtPayload);
            await redisClient.set(payload._id, tokens.refreshToken);
            await redisClient.expire(payload._id, parseInt(JWT_REFRESH_EXPIRE as string));
            req.user = payload;
            req.tokens = tokens;
            req.tokenChanged = true;

            next();
          } else {
            res.status(401).json({ message: 'refresh token does not match with database' });
          }
        } else {
          res.status(401).json({ message: 'unauthorized' });
        }
      });
    } else {
      const payload: any = Jwt.decode(jwt);
      req.user = payload;
      next();
    }
  });
};

const jwtPassport = [setCookie];

export default jwtPassport;
