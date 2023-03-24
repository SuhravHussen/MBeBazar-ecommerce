import userModel from '@models/users.model';
import { Order } from './../interfaces/order.interface';
import orderModel from '@/models/order.model';

class orderService {
  public model = orderModel;
  public userModel = userModel;
  public async addOrder(orderData: Order): Promise<Order> {
    const removedTokens = { ...orderData };
    delete removedTokens.tokens;
    const data: Order = await this.model.create(removedTokens);
    const toReview = orderData.items.map(item => {
      return item.product;
    });
    await this.userModel.updateOne({ _id: orderData.user }, { $addToSet: { toReview: { $each: toReview } } });

    return data;
  }

  public async getOrderById(orderId: string): Promise<Order> {
    const data: Order | null = await this.model.findOne({ _id: orderId }).populate('items.product');
    return data as Order;
  }
}

export default orderService;
