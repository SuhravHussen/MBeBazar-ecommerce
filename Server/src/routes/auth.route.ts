import jwtPassport from '@/middlewares/jwtPassport.middleware';
import { Router } from 'express';
import AuthController from '@controllers/auth.controller';
import { Routes } from '@interfaces/routes.interface';
import passport from 'passport';
class AuthRoute implements Routes {
  public path = '/auth';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/signup', this.authController.signUp);
    this.router.post('/login', passport.authenticate('local', { session: false }), this.authController.logIn);
    this.router.post('/logout', jwtPassport, this.authController.logOut);
  }
}

export default AuthRoute;
