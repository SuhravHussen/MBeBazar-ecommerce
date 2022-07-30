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
    this.router.get('/login', passport.authenticate('local', { session: false }), this.authController.logIn);
    this.router.get('/logout', jwtPassport, this.authController.logOut);
    this.router.post('/login/failed', this.authController.loginFailed);
    this.router.get(
      '/google',
      passport.authenticate('google', {
        scope: ['profile', 'email'],
        session: false,
      }),
    );
    this.router.get(
      '/google/callback',
      passport.authenticate('google', {
        session: false,

        failureRedirect: '/login/failed',
      }),
      (req, res) => {
        res.cookie('ds', 'sds');
        res.json({ message: 'Logged in successfully', data: [], error: false });
      },
    );
    this.router.post('/updatePassword', jwtPassport, this.authController.updatePassword);
  }
}

export default AuthRoute;
