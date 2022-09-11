import { Order } from './../interfaces/order.interface';
import { RequestWithUser } from '@interfaces/auth.interface';
import { response } from '@/interfaces/response.interface';
import { NextFunction, Request, Response } from 'express';

import { User } from '@interfaces/users.interface';
import userService from '@services/users.service';

class UsersController {
  public userService = new userService();

  public getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const usersData: User = await this.userService.findUserById(req.params.id);

      const response: response = {
        message: 'User found successfully',
        data: usersData,
        error: false,
      };
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  public getUserOrders = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const userOrders: Order[] | null = await this.userService.findUserOrder('62b40bd17ab97151ee992ad8');

      const response: response = {
        message: userOrders.length > 0 ? 'Found user orders successfully' : 'No orders found',
        data: userOrders,
        error: false,
      };
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  public updateProfile = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const userData = await this.userService.updateUser(req);

      const response: response = {
        message: 'User updated successfully',
        data: userData,
        error: false,
      };
      res.json(response);
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
