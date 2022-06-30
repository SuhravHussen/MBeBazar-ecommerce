import jwtPassport from '@/middlewares/jwtPassport.middleware';
import { Router } from 'express';
import IndexController from '@controllers/index.controller';
import { Routes } from '@interfaces/routes.interface';
class IndexRoute implements Routes {
  public path = '/';
  public router = Router();
  public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/', jwtPassport, this.indexController.index);
  }
}

export default IndexRoute;
