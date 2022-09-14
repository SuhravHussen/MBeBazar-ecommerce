import { JWT_TOKEN_EXPIRE, JWT_REFRESH_EXPIRE } from '@config/index';
import passport from 'passport';

const setCookie = (req, res, next) => {
  if (req.tokens) {
    res.cookie('jwt-token', req.tokens.token, {
      httpOnly: true,
      maxAge: parseInt(JWT_TOKEN_EXPIRE as string) * 1000,
      signed: true,
      sameSite: 'none',
      secure: true,
    });
    res.cookie('refresh-token', req.tokens.refreshToken, {
      httpOnly: true,
      maxAge: parseInt(JWT_REFRESH_EXPIRE as string) * 1000,
      signed: true,
      sameSite: 'none',
      secure: true,
    });
  }
  next();
};

const jwtPassport = [passport.authenticate('jwt', { session: false, failWithError: true }), setCookie];

export default jwtPassport;
