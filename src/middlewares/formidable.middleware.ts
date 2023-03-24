import { HttpException } from './../exceptions/HttpException';
import { RequestWithUser } from '@interfaces/auth.interface';
import { Response, NextFunction } from 'express';
import formidable from 'formidable';

export const fromidableMiddleware = (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    if (req.headers['enctype'] === 'multipart/form-data') {
      const form = new formidable.IncomingForm({
        maxFileSize: 50 * 1024 * 1024,
      });

      form.parse(req, (err, fields, files) => {
        if (err) {
          next(err);
        }

        req.body = fields;
        req.file = files;
        req.isFormData = true;
        next();
      });
    } else {
      next(new HttpException(409, 'Invalid file type'));
    }
  } catch (error) {
    next(error);
  }
};
