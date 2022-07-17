import { response } from '@/interfaces/response.interface';
import orderService from '@/services/orders.service';
import { NextFunction, Request, Response } from 'express';

class orderController {
  public authService = new orderService();

  public addOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.authService.addOrder(req.body);
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
}

export default orderController;
