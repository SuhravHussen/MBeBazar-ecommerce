import { NextFunction, Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.cookie('tt', 'test', {
        httpOnly: true,
        signed: true,
      });
      res.json('WELCOME TO MBeBAZAR API v1');
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
