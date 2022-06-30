import { IsNumber, IsString, Max, Min } from 'class-validator';
import { Review } from './../interfaces/review.interface';
export class reviewDto implements Review {
  @IsString({
    message: 'review is required',
  })
  review: string;

  @IsNumber({}, { message: 'rating is required' })
  @Min(0)
  @Max(5)
  rating: number;
}
