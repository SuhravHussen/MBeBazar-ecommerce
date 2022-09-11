import { Review } from './../interfaces/review.interface';

import { JSONSchemaType } from 'ajv';

export const reviewDto: JSONSchemaType<Review> = {
  type: 'object',
  required: ['review', 'rating', 'product'],
  additionalProperties: false,
  properties: {
    review: {
      type: 'string',
    },
    rating: {
      type: 'integer',
      minimum: 1,
      maximum: 5,
      errorMessage: 'Rating must be between 1 and 5',
    },
    product: {
      type: 'string',
    },
    user: {
      type: 'string',
      nullable: true,
    },
  },
};
