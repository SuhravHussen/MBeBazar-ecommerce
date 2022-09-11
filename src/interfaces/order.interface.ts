import { ObjectId } from 'mongoose';

export interface Order {
  bookingInfo: {
    name: string;
    address: string;
    phone: string;
    totalPrice: number;
    shippingPrice: number;
    shippingMethod: 'Sundarban' | 'RedX' | 'Paperfly';
    status: 'pending' | 'processing' | 'cancelled' | 'delivered';
    payment: 'pending' | 'success' | 'failed';
    paymentMethod: 'COD' | 'CreditCard';
  };
  user: ObjectId | string;
  items: {
    product: string;
    quantity: number;
    price: number;
  }[];
}
