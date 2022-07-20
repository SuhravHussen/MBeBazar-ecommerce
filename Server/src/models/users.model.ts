import { hashPassword } from './../utils/passwordHash';
import { NextFunction } from 'express';
import { model, Schema, Model } from 'mongoose';
import { UserDocument, User } from '@interfaces/users.interface';
import { compare } from 'bcrypt';

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
  console.log(user.password, this.password);

  if (this.isModified('password') || (this.isNew && this.password)) {
    hashPassword(user.password as string)
      .then(hashedPassword => {
        user.password = hashedPassword;
        next();
      })
      .catch(err => next(err));
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
    compare(candidatePassword, password as string, (err, success) => {
      if (err) return reject(err);
      return resolve(success);
    });
  });
};

const userModel = model<User, UserModel>('User', userSchema);

export default userModel;
