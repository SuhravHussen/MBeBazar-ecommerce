import { User } from '@interfaces/users.interface';
import { IsArray, IsEmail, IsOptional, IsString, Matches } from 'class-validator';

export class CreateUserDto implements User {
  @IsString({
    message: 'Invalid User name',
  })
  name: string;
  @IsEmail(
    {},
    {
      message: 'Invalid email address',
    },
  )
  public email: string;

  @IsString({
    message: 'password must be string',
  })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message: 'Password must contain min eight characters, at least one letter and one number ',
  })
  public password: string;

  @IsOptional()
  @IsString({
    message: 'Invalid address',
  })
  address: string;

  @IsOptional()
  @Matches(/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/, {
    message: 'Phone number must be a Bangladeshi phone number',
  })
  phone: string;

  @IsOptional()
  @IsString({
    message: 'Invalid avatar url',
  })
  avatar: string;

  @IsOptional()
  @IsArray({
    message: 'Invalid format of toReview items',
  })
  toReview: Array<string>;
}
