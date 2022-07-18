import { HttpException } from '@exceptions/HttpException';
import userModel from '@models/users.model';
import { Review } from './../interfaces/review.interface';
import { response } from '@/interfaces/response.interface';
import reviewModel from '@/models/review.model';

class reviewService {
  public model = reviewModel;
  private user = userModel;
  public async addReview(review: Review): Promise<response> {
    const allowed = await this.user.findOne({ _id: review.user, toReview: { $in: [review.product] } });

    if (!allowed) {
      throw new HttpException(409, 'You are not allowed to review this product');
    }

    const data: Review = await this.model.create(review);
    await this.user.updateOne({ _id: review.user }, { $pull: { toReview: review.product } });

    const res: response = {
      data: data,
      message: 'Review added successfully',
      error: false,
    };
    return res;
  }

  public async getReviews(id: string): Promise<response> {
    const data: Review[] = await this.model.find({ product: id }).populate('user', 'name');

    const res: response = {
      data: data,
      message: 'Reviews fetched successfully',
      error: false,
    };
    return res;
  }

  public async getAvgRating(id: string): Promise<response> {
    const data = await this.model.aggregate([{ $match: { product: id } }, { $group: { _id: null, avg_rating: { $avg: '$rating' } } }]);

    const res: response = {
      data: data,
      message: 'Reviews fetched successfully',
      error: false,
    };
    return res;
  }
}

export default reviewService;
