import { reviewDto } from './../dtos/review.dto';
import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import reviewController from '@/controllers/review.controller';
import jwtPassport from '@/middlewares/jwtPassport.middleware';
import { validate } from '@/middlewares/validate.middleware';

class review implements Routes {
  public path = '/review';
  public router = Router();
  public controller = new reviewController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/', jwtPassport, validate(reviewDto, 'body'), this.controller.addReview);
    this.router.get('/', this.controller.getReviews);
    this.router.get('/avg', this.controller.getAvgRating);
  }
}

export default review;
