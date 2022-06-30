import { NextFunction } from 'express';
import { model, Schema, Model } from 'mongoose';
import { UserDocument, User } from '@interfaces/users.interface';
import { genSalt, hash, compare } from 'bcrypt';

type UserModel = Model<User, {}, UserDocument>;

const userSchema = new Schema<User, UserModel, UserDocument>(
  {
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
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    avatar: {
      type: String,
    },
    toReview: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
  },
  {
    timestamps: true,
  },
);

userSchema.pre<UserDocument>('save', function (next: NextFunction) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  if (this.isModified('password') || this.isNew) {
    genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }
      hash(user.password, salt, (err, hash) => {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

userSchema.method('fullName', function fullName() {
  return this.name + ' ' + this.email;
});

userSchema.methods.comparePassword = function (candidatePassword: string): Promise<boolean> {
  const user = this as User;
  const { password } = user;
  return new Promise((resolve, reject) => {
    compare(candidatePassword, password, (err, success) => {
      if (err) return reject(err);
      return resolve(success);
    });
  });
};

const userModel = model<User, UserModel>('User', userSchema);

export default userModel;
