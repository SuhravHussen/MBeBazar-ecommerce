import { RequestWithUser } from '@interfaces/auth.interface';
import { Order } from './../interfaces/order.interface';
import { response } from '@/interfaces/response.interface';
import orderService from '@/services/orders.service';
import { NextFunction, Response } from 'express';

class orderController {
  public orderService = new orderService();

  public addOrder = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const data = await this.orderService.addOrder(req.body);
      const response: response = {
        data,
        message: 'Order added successfully',
        error: false,
        tokenChanged: req?.tokenChanged || false,
        tokens: req?.tokens || null,
      };
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  public getOrderById = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const data: Order = await this.orderService.getOrderById(req.params.id);
      const response: response = {
        data,
        message: 'Order found successfully',
        error: false,
        tokenChanged: req?.tokenChanged || false,
        tokens: req?.tokens || null,
      };
      res.json(response);
    } catch (error) {
      next(error);
    }
  };
}

export default orderController;
