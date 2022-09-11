import jwtPassport from '@/middlewares/jwtPassport.middleware';
import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import bodyParser from 'body-parser';
import PaymentController from '@/controllers/stripepayment.controller';

class paymentRoute implements Routes {
  public path = '/payment';
  public router = Router();
  public controller = new PaymentController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/', jwtPassport, this.controller.makePayment);
    this.router.post('/webhook', bodyParser.raw({ type: 'application/json' }), this.controller.webhook);
  }
}

export default paymentRoute;
