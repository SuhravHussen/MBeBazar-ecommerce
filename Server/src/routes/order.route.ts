import { orderDto } from './../dtos/order.dto';

import jwtPassport from '@/middlewares/jwtPassport.middleware';
import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import orderController from '@/controllers/order.controller';
import { validate } from '@/middlewares/validate.middleware';

class orderRoute implements Routes {
  public path = '/order';
  public router = Router();
  public controller = new orderController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/', jwtPassport, validate(orderDto, 'body'), this.controller.addOrder);
    this.router.get('/:id', this.controller.getOrderById);
  }
}

export default orderRoute;
