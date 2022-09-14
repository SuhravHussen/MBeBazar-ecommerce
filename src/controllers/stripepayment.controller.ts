import { Order } from './../interfaces/order.interface';
import orderService from '@/services/orders.service';
import { RequestWithUser } from './../interfaces/auth.interface';
import { Request, Response, NextFunction } from 'express';

import paymentService from '@/services/stripepayment.service';

class PaymentController {
  public paymentService = new paymentService();
  private orderService = new orderService();
  public makePayment = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const { item, orderInfo } = req.body;
      const userID = req.user._id;
      const payment = await this.paymentService.makePayment(item, orderInfo, userID);
      res.json(payment);
    } catch (e) {
      next(e);
    }
  };

  public webhook = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = req.body;
      const sig = req.headers['stripe-signature'];
      const endpointsecret = process.env.WEB_HOOK_SECRET;
      const resD: Order | undefined = await this.paymentService.webhook(payload, sig, endpointsecret);
      console.log('response from webhook is', resD);
      if (resD) {
        const order = await this.orderService.addOrder(resD);
        console.log('order added', order);
        res.json({
          success: true,
        });
      } else {
        res.json({
          success: false,
        });
      }
    } catch (e) {
      console.log(e);
      next(e);
    }
  };
}

export default PaymentController;
