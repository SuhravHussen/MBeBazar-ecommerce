import { HttpException } from './../exceptions/HttpException';
import Ajv from 'ajv';
const ajv = new Ajv({ allErrors: true });
require('ajv-errors')(ajv, { singleError: true });

export const validate = (schema, value) => {
  return (req, _res, next) => {
    const valid = ajv.validate(schema, req[value]);
    if (!valid) {
      const message = ajv.errorsText(ajv.errors);
      next(new HttpException(400, message));
    } else {
      next();
    }
  };
};
