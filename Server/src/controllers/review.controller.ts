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

    try {
      const review: Review = {
        review: reviewIs,
        rating: rating,
        user: user,
      };
      const data: response = await this.reviewService.addReview(review);
      res.json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

export default reviewController;
