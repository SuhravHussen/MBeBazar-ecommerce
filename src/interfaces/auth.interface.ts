import { Request } from 'express';
import { User } from '@interfaces/users.interface';

export interface DataStoredInToken extends User {
  _id: string;
}

export interface TokenData {
  token: string;
  refreshToken: string;
}

export interface RequestWithUser extends Request {
  user: DataStoredInToken;
  tokens?: {
    token: string;
    refreshToken: string;
  };
  tokenChanged?: boolean;
  file?: any;
  isFormData?: boolean;
}

export interface updatePassword {
  id: string;
  oldPassword: string;
  newPassword: string;
}
