import { setCookie } from './../utils/jwt';
import request from 'supertest';
import App from '@/app';
import OrderRoute from '@/routes/order.route';
import mongoose from 'mongoose';
const jwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VocmF2IGh1c3NhaW4iLCJfaWQiOiI2MmQ2M2QwYWU5YmNkYjY5NTFmNTRhODkiLCJlbWFpbCI6InN1aHJhdmh1c3NlbkBnbWFpbC5jb20iLCJhdmF0YXIiOm51bGwsImFkZHJlc3MiOm51bGwsImlhdCI6MTY1OTI1NDA3MCwiZXhwIjoxNjYxODQ2MDcwfQ.sCLL4UWy2z5-ES8d7EXy_dOnETusWrMuBVwcmpKi4QU';

describe('Order Route', () => {
  describe('[GET] /', () => {
    const orderRoute = new OrderRoute();
    const app = new App();
    app.initializePassport();
    app.initializeMiddlewares();
    app.initializeRoutes([orderRoute]);

    const orders = orderRoute.controller.orderService.model;
    const users = orderRoute.controller.orderService.userModel;

    orders.create = jest.fn().mockReturnValue({
      _id: '62ce6bcd90b05947c41e39d8',
      bookingInfo: {
        name: 'name',
        address: ' ',
        phone: '123456789',
        totalPrice: ' ',
        shippingPrice: ' ',
        shippingMethod: ' ',
        paymentMethod: ' ',
        payment: ' ',
        status: ' ',
      },
      user: '',
      items: [
        {
          product: 'id',
          price: 'price',
          quantity: 'quantity',
        },
      ],
    })(mongoose as any).connect = jest.fn();

    users.updateOne = jest.fn().mockReturnValue({
      _id: '62ce6bcd90b05947c41e39d8',
      name: 'name',
      email: ' ',
      phone: '123456789',
      toReview: ['id'],
    })(mongoose as any).connect = jest.fn();

    it('response statusCode 200', async () => {
      const res = await request(app.getServer())
        .post('/order')
        .set('Cookie', setCookie(jwt))
        .send({
          bookingInfo: {
            name: 'name',
            address: ' 32 dhfd jsdj',
            phone: '01768622332',
            totalPrice: 1500,
            shippingPrice: 150,
            shippingMethod: 'RedX',
            status: 'processing',
            payment: 'pending',
            paymentMethod: 'COD',
          },
          user: '62a980a5030ab5cb1b306bf7',
          items: [
            {
              product: '629ef076d43eb983f88afcb1',
              price: 1350,
              quantity: 1,
            },
          ],
        });

      expect(res.status).toBe(200);
    });
  });

  describe('[GET] /:id', () => {
    const orderRoute = new OrderRoute();
    const app = new App();
    app.initializePassport();
    app.initializeMiddlewares();
    app.initializeRoutes([orderRoute]);

    const orders = orderRoute.controller.orderService.model;

    orders.findOne = jest.fn().mockReturnValue({
      _id: '62ce6bcd90b05947c41e39d8',
      bookingInfo: {
        name: 'name',
        address: ' ',
        phone: '123456789',
        totalPrice: ' ',
        shippingPrice: ' ',
        shippingMethod: ' ',
        paymentMethod: ' ',
        payment: ' ',
        status: ' ',
      },
      user: '',
      items: [
        {
          product: 'id',
          price: 'price',
          quantity: 'quantity',
        },
      ],
    })(mongoose as any).connect = jest.fn();

    it('response statusCode 200', async () => {
      const res = await request(app.getServer()).get('/order/62d2581e56e3f9934bca2299').set('Cookie', setCookie(jwt));
      expect(res.status).toBe(200);
    });
  });
});
