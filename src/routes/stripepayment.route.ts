import jwtPassport from '@/middlewares/jwtPassport.middleware';
import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';

import PaymentController from '@/controllers/stripepayment.controller';
import express from 'express';
class paymentRoute implements Routes {
  public path = '/payment';
  public router = Router();
  public controller = new PaymentController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/', jwtPassport, this.controller.makePayment);
    this.router.post('/webhook', express.raw({ type: '*/*' }), this.controller.webhook);
  }
}

export default paymentRoute;
