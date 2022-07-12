import { Review } from './../interfaces/review.interface';
import { response } from '@/interfaces/response.interface';
import reviewModel from '@/models/review.model';

class reviewService {
  public model = reviewModel;

  public async addReview(review: Review): Promise<response> {
    const data: Review = await this.model.create(review);

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
