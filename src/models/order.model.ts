import { Order } from './../interfaces/order.interface';
import { model, Schema } from 'mongoose';
const orderSchema = new Schema<Order>(
  {
    bookingInfo: {
      name: {
        required: [true, 'Name is required'],
        type: String,
      },
      address: {
        required: [true, 'Address is required'],
        type: String,
      },
      phone: {
        required: [true, 'Phone is required'],
        type: String,
      },
      totalPrice: {
        required: [true, 'Total price is required'],
        type: Number,
      },
      shippingPrice: {
        required: [true, 'Shipping price is required'],
        type: Number,
      },
      shippingMethod: {
        type: String,
        required: [true, 'Shipping method is required'],
        enum: ['Sundarban', 'RedX', 'Paperfly'],
      },
      status: {
        type: String,
        required: [true, 'Status is required'],
        enum: ['pending', 'processing', 'cancelled', 'delivered'],
        default: 'Pending',
      },
      payment: {
        type: String,
        required: [true, 'Payment is required'],
        enum: ['pending', 'success', 'failed'],
        default: 'Pending',
      },
      paymentMethod: {
        type: String,
        required: [true, 'Payment method is required'],
        enum: ['COD', 'CreditCard'],
        default: 'COD',
      },
    },

    user: {
      required: [true, 'User Id is required'],
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    items: [
      {
        product: {
          required: [true, 'Product Id is required'],
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
        quantity: {
          required: [true, 'Quantity is required'],
          type: Number,
        },
        price: {
          required: [true, 'Price is required'],
          type: Number,
        },
      },
    ],
  },

  {
    timestamps: true,
  },
);

const orderModel = model<Order>('order', orderSchema);

export default orderModel;
