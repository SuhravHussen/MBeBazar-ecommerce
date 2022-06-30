import { Document } from 'mongoose';
export interface User {
  name: string;
  email: string;
  password?: string;
  address?: string;
  phone?: string;
  avatar?: string;
  toReview?: Array<string>;
}

export interface UserDocument extends User, Document {
  comparePassword(candidatePassword: string): Promise<boolean>;
  createdAt: Date;
  updatedAt: Date;
}
