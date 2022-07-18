import jwtPassport from '@/middlewares/jwtPassport.middleware';

import { Router } from 'express';
import UsersController from '@controllers/users.controller';
import { Routes } from '@interfaces/routes.interface';
import { fromidableMiddleware } from '@/middlewares/formidable.middleware';

class UsersRoute implements Routes {
  public path = '/users';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/orders', jwtPassport, this.usersController.getUserOrders);
    this.router.get('/:id', jwtPassport, this.usersController.getUser);
    this.router.post('/updateProfile', jwtPassport, fromidableMiddleware, this.usersController.updateProfile);
  }
}

export default UsersRoute;
