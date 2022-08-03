import { hashPassword } from './../utils/passwordHash';
import { compare } from 'bcrypt';
import { updatePassword } from '@interfaces/auth.interface';
import { HttpException } from '@exceptions/HttpException';
import { TokenData, DataStoredInToken } from '@interfaces/auth.interface';
import { UserDocument, User } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import { isEmpty } from '@utils/util';
import { generateJwt } from '@/utils/jwt';

class AuthService {
  public users = userModel;

  public async signup(userData: User): Promise<UserDocument> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: UserDocument = (await this.users.findOne({ email: userData.email })) as UserDocument;
    if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`);
    userData.name = userData.name.trim();
    userData.email = userData.email.trim();

    const createUserData: UserDocument = await this.users.create(userData);

    return createUserData;
  }

  public async login(userData: DataStoredInToken): Promise<TokenData> {
    const tokens: TokenData = await generateJwt(userData);
    return tokens;
  }

  public async logout(userData: UserDocument): Promise<UserDocument> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: UserDocument = (await this.users.findOne({ email: userData.email, password: userData.password })) as UserDocument;
    if (!findUser) throw new HttpException(409, `You're email ${userData.email} not found`);

    return findUser;
  }

  public async updatePassword(data: updatePassword): Promise<User> {
    // check if the data is empty or not
    if (isEmpty(data)) throw new HttpException(400, 'Invalid data');

    // get user info from database
    const findUser: UserDocument = (await this.users.findOne({ _id: data.id })) as UserDocument;
    if (!findUser) throw new HttpException(409, `Did't find user with id ${data.id}`);

    // compare password
    const isMatch = await compare(data.oldPassword, findUser.password as string);

    // throw error if password is not match
    if (!isMatch) throw new HttpException(409, 'Invalid password');

    // check if both password is same
    if (data.oldPassword === data.newPassword) throw new HttpException(409, 'New password is the same as old password');

    // hash new password
    const hashedPassword = await hashPassword(data.newPassword);
    const updateUser: UserDocument = (await this.users.findOneAndUpdate(
      { _id: findUser._id },
      { $set: { password: hashedPassword } },
      { new: true },
    )) as UserDocument;

    return updateUser;
  }
}

export default AuthService;
