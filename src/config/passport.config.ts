import { DataStoredInToken } from '@interfaces/auth.interface';
import { generateJwt } from '@/utils/jwt';
import { HttpException } from '@exceptions/HttpException';
import redisClient from '@databases/redis';
import { SECRET_KEY, JWT_REFRESH_EXPIRE, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '@config/index';
import userModel from '@models/users.model';
import passport from 'passport';
const JwtStrategy = require('passport-jwt').Strategy;
import LocalStrategy from 'passport-local';
import GoogleStrategy from 'passport-google-oauth20';
import passwordGenerator from 'password-generate';
import Jwt from 'jsonwebtoken';
// login with email and pass
export class PassportLogin {
  user = userModel;
  customFields = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  };

  public verifyCallback = async (req, email, password, done) => {
    try {
      email = email || req.body.email;
      password = password || req.body.password;
      let avatar: string | null = '';
      let address: string | null = '';

      const userData = await this.user.findOne({ email: email });

      if (!userData) {
        throw new HttpException(409, 'User not found');
      }

      const isValid = await userData.comparePassword(password);

      if (isValid) {
        'avatar' in userData ? (avatar = userData.avatar as string) : (avatar = null);
        'address' in userData ? (address = userData.address as string) : (address = null);
        const user = {
          name: userData.name,
          _id: userData._id,
          email: userData.email,
          avatar: avatar,
          address: address,
        };
        done(null, user);
      } else {
        return done({
          message: 'Invalid password',
        });
      }
    } catch (e) {
      done(e);
    }
  };

  strategy = new LocalStrategy(this.customFields, this.verifyCallback);

  public async Login() {
    passport.use(this.strategy);
  }
}

// jwt authentication
export class passportJwt {
  private cookieExtractor = async req => {
    let token = null;
    try {
      if (req.body.tokens === undefined) return null;
      if (!req.body.tokens) return null;

      const jwt = req.body.tokens['jwt-token'] || '';
      const refreshToken = req.body.tokens['refresh-token'] || '';
      Jwt.verify(jwt, SECRET_KEY as string, err => {
        if (err) {
          Jwt.verify(refreshToken, SECRET_KEY as string, err => {
            if (!err) {
              token = refreshToken;
              req.refreshToken = refreshToken;
            }
          });
        } else token = jwt;
      });
    } catch (e) {
      console.log(e);
    }
    Jwt.verify(token || '', SECRET_KEY as string, err => {
      if (err) {
        console.log('err', err);
      }
      console.log('token', token);
    });
    return token;
  };

  opts = {
    jwtFromRequest: this.cookieExtractor,
    secretOrKey: SECRET_KEY,
    passReqToCallback: true,
  };

  private jwtCallBack = async (req, payload, done) => {
    console.log('coming');
    console.log('payload', payload);
    try {
      if (req.refreshToken) {
        const verified = await redisClient.get(payload._id);

        if (verified === req.refreshToken) {
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
          req.tokens = tokens;
          done(false, payload);
        } else {
          done({ message: 'refresh token does not match with database' });
        }
      } else {
        done(false, payload);
      }
    } catch (e) {
      new HttpException(401, 'passport jwt invalid');
    }
  };

  strategy = new JwtStrategy(this.opts, this.jwtCallBack);

  public jwtAuth() {
    passport.use(this.strategy);
  }
}

export class passportGoogle {
  private user = userModel;

  private options = {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback',
    passReqToCallback: true,
  };

  private googleCallBack = async (req, accessToken, refreshToken, profile, done) => {
    try {
      const userInfo = profile._json;

      const found = await this.user.findOne({ email: userInfo.email });
      if (!found) {
        const password = passwordGenerator.generate({ length: 10, numbers: true });
        const newUser = await this.user.create({ name: userInfo.name, email: userInfo.email, password: password, avatar: userInfo.picture });
        done(false, newUser);
      }

      done(false, found);
    } catch (e) {
      new HttpException(500, 'Problem in google auth');
    }
  };

  private strategy = new GoogleStrategy(this.options, this.googleCallBack);
  public signupOrLogin() {
    passport.use(this.strategy);
  }
}
