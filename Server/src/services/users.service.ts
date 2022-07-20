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

  public async updateUser(req: RequestWithUser): Promise<User> {
    let uploadedFile: null | { url: string } = null;
    const user = await this.findUserById(req.user._id);
    if (!user) throw new HttpException(409, "You're not user");
    if (!isEmpty(req.file)) {
      uploadedFile = await uploadFile(req.file, `${req.user.name}_${req.user._id}`);
    }

    const updatedProfile = {
      name: req.body.name ? req.body.name : user.name,
      email: req.body.email ? req.body.email : user.email,
      phone: req.body.phone ? req.body.phone : user.phone,
      address: req.body.address ? req.body.address : user.address,
      avatar: uploadedFile ? uploadedFile.url : user.avatar,
    };

    const updateUser: User = (await this.users.findOneAndUpdate({ _id: req.user._id }, { $set: updatedProfile }, { new: true })) as User;

    return updateUser;
  }
}

export default UserService;
