import { User } from './../interfaces/users.interface';

import { JSONSchemaType } from 'ajv';

export const userDto: JSONSchemaType<User> = {
  type: 'object',
  required: ['name', 'email'],
  additionalProperties: false,
  properties: {
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
      pattern: '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$',
      errorMessage: 'Email is invalid',
    },
    password: {
      type: 'string',
      pattern: '^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$',
      errorMessage: 'Password must be at least 8 characters, contain at least one letter and one number',
      nullable: true,
    },
    address: {
      type: 'string',
      nullable: true,
    },
    phone: {
      type: 'string',
      nullable: true,
    },
    avatar: {
      type: 'string',
      nullable: true,
    },
    toReview: {
      type: 'array',
      items: {
        type: 'string',
      },
      nullable: true,
    },
  },
};
