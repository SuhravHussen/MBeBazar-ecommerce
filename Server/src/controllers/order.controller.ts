import { Order } from './../interfaces/order.interface';
import { response } from '@/interfaces/response.interface';
import orderService from '@/services/orders.service';
import { NextFunction, Request, Response } from 'express';

class orderController {
  public orderService = new orderService();

  public addOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.orderService.addOrder(req.body);
      const response: response = {
        data,
        message: 'Order added successfully',
        error: false,
      };
      res.json(response);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  public getOrderById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: Order = await this.orderService.getOrderById(req.params.id);
      const response: response = {
        data,
        message: 'Order found successfully',
        error: false,
      };
      res.json(response);
    } catch (error) {
      next(error);
    }
  };
}

export default orderController;
