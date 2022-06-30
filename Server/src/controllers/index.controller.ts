import { NextFunction, Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json('Welcome to MBeBAZAR server');
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
