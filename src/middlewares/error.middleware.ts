import { RequestWithUser } from '@interfaces/auth.interface';
import { response } from './../interfaces/response.interface';
import { NextFunction, Response } from 'express';
import { HttpException } from '@exceptions/HttpException';
import { logger } from '@/utils/logger';

const errorMiddleware = (error: HttpException, req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    const status: number = error.status || 500;
    const message: string = error.message || 'Something went wrong';

    const response: response = {
      message: message,
      error: true,
      data: [],
    };

    logger.error(`error occurred by in the ${req.path} and message is ${message}`, {
      status: status,
      id: req.user?._id ? req.user._id : '',
    });

    res.status(status).json(response);
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
