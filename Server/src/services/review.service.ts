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
}

export default reviewService;
