import { User } from './../interfaces/users.interface';
import { HttpException } from '@exceptions/HttpException';
import { TokenData, DataStoredInToken } from '@interfaces/auth.interface';
import { UserDocument } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import { isEmpty } from '@utils/util';
import { generateJwt } from '@/utils/jwt';

class AuthService {
  public users = userModel;

  public async signup(userData: User): Promise<UserDocument> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: UserDocument = (await this.users.findOne({ email: userData.email })) as UserDocument;
    if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`);

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
}

export default AuthService;
