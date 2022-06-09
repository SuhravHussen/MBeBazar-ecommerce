import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

const userSchema: Schema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  number: {
    type: String,
  },
  address: {
    type: String,
  },
  avatar: {
    type: String,
  },
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
