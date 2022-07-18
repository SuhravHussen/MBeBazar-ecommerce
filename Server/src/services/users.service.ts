import { RequestWithUser } from '@interfaces/auth.interface';
import orderModel from '@/models/order.model';
import { Order } from './../interfaces/order.interface';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import { isEmpty } from '@utils/util';
import { uploadFile } from '@/utils/cloudinaryUploader';

class UserService {
  public users = userModel;
  private order = orderModel;
  public async findUserById(userId: string): Promise<User> {
    if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

    const findUser: User | null = await this.users.findOne({ _id: userId });
    if (!findUser) throw new HttpException(409, "You're not user");
    return findUser;
  }

  public async findUserOrder(userId: string): Promise<Order[]> {
    if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

    const findOrder: Order[] | null = await this.order.find({ user: userId });

    return findOrder;
  }

  public async updateUser(req: RequestWithUser): Promise<any> {
    const uploaded = uploadFile(req.file, `${req.user.name}_${req.user._id}`);
    return {};
  }
}

export default UserService;
