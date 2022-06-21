import { JWT_TOKEN_EXPIRE, JWT_REFRESH_EXPIRE } from '@config/index';
import { response } from '@/interfaces/response.interface';
import { NextFunction, Request, Response } from 'express';
import { RequestWithUser, TokenData } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import AuthService from '@services/auth.service';

class AuthController {
  public authService = new AuthService();

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: User = await this.authService.signup(req.body);
      res.json(userData);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  public logIn = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const tokens: TokenData = await this.authService.login(req.user);
      const response: response = {
        message: 'Logged in successfully',
        data: {
          tokens,
          user: req.user,
        },
        error: false,
      };
      res.cookie('jwt-token', tokens.token, {
        httpOnly: true,
        maxAge: parseInt(JWT_TOKEN_EXPIRE) * 1000,
      });
      res.cookie('refresh-token', tokens.refreshToken, {
        httpOnly: true,
        maxAge: parseInt(JWT_REFRESH_EXPIRE) * 1000,
      });
      res.json(response);
    } catch (e) {
      next(e);
    }
  };

  // public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  //   try {
  //     const userData: User = req.user;
  //     const logOutUserData: User = await this.authService.logout(userData);

  //     res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
  //     res.status(200).json({ data: logOutUserData, message: 'logout' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}

export default AuthController;
