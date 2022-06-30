import { model, Schema } from 'mongoose';
const reviewSchema = new Schema(
  {
    review: {
      type: String,
      required: [true, 'review is required'],
    },
    rating: {
      type: Number,
      required: [true, 'rating is required'],
    },
    user: {
      required: [true, 'user Id is required'],
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  },
);

const reviewModel = model('Review', reviewSchema);

export default reviewModel;
