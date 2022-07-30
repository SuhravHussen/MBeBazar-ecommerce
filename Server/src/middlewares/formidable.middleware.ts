import { RequestWithUser } from '@interfaces/auth.interface';
import { Response, NextFunction } from 'express';
import formidable from 'formidable';

export const fromidableMiddleware = (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    const form = new formidable.IncomingForm({
      maxFileSize: 50 * 1024 * 1024,
    });
    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
      }
      console.log(files);
      req.body = fields;
      req.file = files;
      next();
    });
  } catch (error) {
    next(error);
  }
};
