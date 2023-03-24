import { updatePassword } from '@interfaces/auth.interface';
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

      res.json(response);
    } catch (e) {
      next(e);
    }
  };

  public loginFailed = (req: Request, res: Response) => {
    res.status(401).json({
      error: true,
      message: 'failed to login ',
      data: [],
    });
  };

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      res.clearCookie('jwt-token');
      res.clearCookie('refresh-token');
      res.status(200).json({ message: 'Logged out successfully', data: [], error: false });
    } catch (error) {
      next(error);
    }
  };

  public updatePassword = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const data: updatePassword = {
        oldPassword: req.body.oldPassword,
        newPassword: req.body.newPassword,
        id: req.user._id,
      };

      const userData = await this.authService.updatePassword(data);
      res.json({
        ...userData,
        tokenChanged: req?.tokenChanged || false,
        tokens: req?.tokens || null,
      });
    } catch (error) {
      next(error);
    }
  };

  public socialLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.authService.socialLogin(req.body);
      const tokens: TokenData = await this.authService.login({
        _id: user._id,
        email: user.email,
        name: user.name,
        avatar: user?.avatar,
        address: user?.address,
        phone: user?.phone,
        toReview: user?.toReview,
      });

      res.json({
        message: 'Logged in successfully',
        data: {
          tokens,
          user,
        },
        error: false,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
