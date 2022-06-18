import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '@config/index';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { UserDocument } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import { isEmpty } from '@utils/util';

class AuthService {
  public users = userModel;

  public async signup(userData: CreateUserDto): Promise<UserDocument> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: UserDocument = await this.users.findOne({ email: userData.email });
    if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`);

    const createUserData: UserDocument = await this.users.create(userData);

    return createUserData;
  }

  public async login(): Promise<{ cookie: string }> {
    return {
      cookie: 'sdjksd',
    };
  }

  public async logout(userData: UserDocument): Promise<UserDocument> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: UserDocument = await this.users.findOne({ email: userData.email, password: userData.password });
    if (!findUser) throw new HttpException(409, `You're email ${userData.email} not found`);

    return findUser;
  }

  public createToken(user: UserDocument): TokenData {
    const dataStoredInToken: DataStoredInToken = { _id: user._id };
    const secretKey: string = SECRET_KEY;
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default AuthService;
