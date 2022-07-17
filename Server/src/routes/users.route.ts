import { userDto } from './../dtos/users.dto';
import { Router } from 'express';
import UsersController from '@controllers/users.controller';
import { Routes } from '@interfaces/routes.interface';
import { validate } from '@/middlewares/validate.middleware';

class UsersRoute implements Routes {
  public path = '/users';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', this.usersController.getUsers);
    this.router.get('/:id', this.usersController.getUserById);
    this.router.post('/', validate(userDto, 'body'), this.usersController.createUser);
    this.router.put('/:id', validate(userDto, 'body'), this.usersController.updateUser);
    this.router.delete('/:id', this.usersController.deleteUser);
  }
}

export default UsersRoute;
