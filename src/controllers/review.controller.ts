import { Review } from './../interfaces/review.interface';
import { response } from '@/interfaces/response.interface';
import { RequestWithUser } from '@interfaces/auth.interface';
import reviewService from '@/services/review.service';
import { NextFunction, Response } from 'express';

class reviewController {
  public reviewService = new reviewService();

  public addReview = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const reviewIs = req.body.review;
    const rating = req.body.rating;
    const user = req.user._id;
    const product = req.body.product;

    try {
      const review: Review = {
        review: reviewIs,
        rating,
        user,
        product,
      };
      const data: response = await this.reviewService.addReview(review);
      res.json({
        ...data,
        tokenChanged: req?.tokenChanged || false,
        tokens: req?.tokens || null,
      });
    } catch (error) {
      next(error);
    }
  };

  public getReviews = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const productId = req.query.id as string;

    try {
      const data: response = await this.reviewService.getReviews(productId);
      res.json(data);
    } catch (error) {
      next(error);
    }
  };

  public getAvgRating = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const productId = req.query.id as string;

    try {
      const data: response = await this.reviewService.getAvgRating(productId);
      res.json(data);
    } catch (error) {
      next(error);
    }
  };
}

export default reviewController;
