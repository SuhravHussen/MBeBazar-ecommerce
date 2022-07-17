import { Order } from './../interfaces/order.interface';
import Ajv, { JSONSchemaType } from 'ajv';

const ajv = new Ajv({ allErrors: true });
require('ajv-errors')(ajv /*, {singleError: true} */);

export const orderDto: JSONSchemaType<Order> = {
  type: 'object',
  required: ['bookingInfo', 'user', 'items'],
  additionalProperties: false,
  properties: {
    user: {
      type: 'string',
    },
    bookingInfo: {
      type: 'object',
      required: ['name', 'address', 'phone', 'totalPrice', 'shippingPrice', 'shippingMethod', 'status', 'payment', 'paymentMethod'],
      additionalProperties: false,
      properties: {
        name: {
          type: 'string',
        },
        address: {
          type: 'string',
        },
        phone: {
          type: 'string',
        },
        totalPrice: {
          type: 'integer',
        },
        shippingPrice: {
          type: 'integer',
        },
        shippingMethod: {
          type: 'string',
          enum: ['COD', 'RedX', 'Paperfly'],
        },
        status: {
          type: 'string',
          enum: ['pending', 'processing', 'cancelled', 'delivered'],
        },
        payment: {
          type: 'string',
          enum: ['pending', 'success', 'failed'],
        },
        paymentMethod: {
          type: 'string',
          enum: ['COD', 'CreditCard'],
        },
      },
    },
    items: {
      type: 'array',
      items: {
        type: 'object',
        required: ['product', 'quantity', 'price'],
        additionalProperties: false,
        properties: {
          product: {
            type: 'string',
          },
          quantity: {
            type: 'integer',
          },
          price: {
            type: 'integer',
          },
        },
      },
    },
  },
};
