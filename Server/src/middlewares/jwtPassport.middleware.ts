import { JWT_TOKEN_EXPIRE, JWT_REFRESH_EXPIRE } from '@config/index';
import passport from 'passport';

const setCookie = (req, res, next) => {
  if (req.tokens) {
    res.cookie('jwt-token', req.tokens.token, {
      httpOnly: true,
      maxAge: parseInt(JWT_TOKEN_EXPIRE) * 1000,
    });
    res.cookie('refresh-token', req.tokens.refreshToken, {
      httpOnly: true,
      maxAge: parseInt(JWT_REFRESH_EXPIRE) * 1000,
    });
  }
  next();
};

const jwtPassport = [passport.authenticate('jwt', { session: false, failWithError: true }), setCookie];

export default jwtPassport;
