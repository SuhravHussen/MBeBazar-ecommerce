import { product } from './../interfaces/product.interface';
import { model, Schema } from 'mongoose';

const productSchema = new Schema<product>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    price: {
      type: Number,
      required: [true, 'price is required'],
    },
    offerPrice: {
      type: Number,
      required: [true, 'offerPrice is required'],
    },
    details: {
      type: String,
      required: [true, 'details is required'],
    },
    unit: {
      type: String,
      required: [true, 'unit is required'],
    },
    stock: {
      type: Number,
      required: [true, 'stock is required'],
    },
    images: {
      type: [String],
      required: [true, 'images is required'],
      validate: [v => v.length < 4, 'You can not add more than three images'],
    },
    featured: {
      type: [String],
      required: [true, 'featured is required'],
    },
    category: {
      type: String,
      required: [true, 'category is required'],
    },
    sold: {
      type: Number,
      default: 1,
    },
    show: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const productModel = model<product>('Product', productSchema);

export default productModel;
