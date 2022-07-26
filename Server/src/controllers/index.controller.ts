import { HttpException } from '@exceptions/HttpException';
import { NextFunction, Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      throw new HttpException(404, 'Not found');
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
