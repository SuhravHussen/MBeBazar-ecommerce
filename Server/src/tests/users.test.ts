import { setCookie } from './../utils/jwt';
import mongoose from 'mongoose';
import request from 'supertest';
import App from '@/app';
import UsersRoute from '@/routes/users.route';

const jwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VocmF2IGh1c3NhaW4iLCJfaWQiOiI2MmQ2M2QwYWU5YmNkYjY5NTFmNTRhODkiLCJlbWFpbCI6InN1aHJhdmh1c3NlbkBnbWFpbC5jb20iLCJhdmF0YXIiOm51bGwsImFkZHJlc3MiOm51bGwsImlhdCI6MTY1OTI1NDA3MCwiZXhwIjoxNjU5MjU1ODcwfQ.Zpid-tLup2265zqMr3s44nCwRDmRvzWt0eHrE-t9Pg0';
const refresh =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VocmF2IGh1c3NhaW4iLCJfaWQiOiI2MmQ2M2QwYWU5YmNkYjY5NTFmNTRhODkiLCJlbWFpbCI6InN1aHJhdmh1c3NlbkBnbWFpbC5jb20iLCJhdmF0YXIiOm51bGwsImFkZHJlc3MiOm51bGwsImlhdCI6MTY1OTI1NDA3MCwiZXhwIjoxNjYxODQ2MDcwfQ.sCLL4UWy2z5-ES8d7EXy_dOnETusWrMuBVwcmpKi4QU';

describe('Testing Users Route', () => {
  describe('[GET]/users/orders', () => {
    const usersRoute = new UsersRoute();
    const app = new App();
    app.initializePassport();
    app.initializeMiddlewares();
    app.initializeRoutes([usersRoute]);
    it("get user's orders", async () => {
      const users = usersRoute.usersController.userService.order;
      users.find = jest.fn().mockReturnValue([
        {
          _id: '62ce6bcd90b05947c41e39d8',
          bookingInfo: {
            name: 'name',
            address: 'address',
            phone: 'phone',
            email: 'exampo@gmail.com',
            totalPrice: '100',
            shippingPrice: '10',
            shippingMethod: 'COD',
            status: 'Pending',
            payment: 'Pending',
            paymentMethod: 'COD',
          },
          user: '62b40bd17ab97151ee992ad8',
          items: [
            {
              product: '62ce6bcd90b05947c41e39d8',
              quantity: '1',
              price: '100',
            },
          ],
        },
      ]);

      (mongoose as any).connect = jest.fn();

      const res = await request(app.getServer()).get('/users/orders').set('Cookie', setCookie(jwt)).set('Cookie', setCookie(refresh));
      expect(res.status).toBe(200);
    });
  });

  describe('[GET]/users/:id', () => {
    const usersRoute = new UsersRoute();
    const app = new App();
    app.initializePassport();
    app.initializeMiddlewares();
    app.initializeRoutes([usersRoute]);
    it('get user information', async () => {
      const users = usersRoute.usersController.userService.users;
      users.findOne = jest.fn().mockReturnValue([
        {
          _id: '62ce6bcd90b05947c41e39d8',
          name: 'name',
          email: 'suhrav@fmail.com',
          phone: '123456789',
          address: 'address',
          avatar: 'avatar',
        },
      ]);
      (mongoose as any).connect = jest.fn();

      const res = await request(app.getServer()).get('/users/62a980a5030ab5cb1b306bf7').set('Cookie', setCookie(refresh));

      expect(res.status).toBe(200);
    });
  });

  describe('[POST]/users/updateProfile', () => {
    const usersRoute = new UsersRoute();
    const app = new App();
    app.initializePassport();
    app.initializeMiddlewares();
    app.initializeRoutes([usersRoute]);
    it('update user information', async () => {
      const users = usersRoute.usersController.userService.users;

      users.findOneAndUpdate = jest.fn().mockReturnValue({
        _id: '62ce6bcd90b05947c41e39d8',
        name: 'name',
        email: 'sijrab@gmail.com ',
        phone: '123456789',
        address: 'address',
        avatar: 'avatar',
      })(mongoose as any).connect = jest.fn();

      const res = await request(app.getServer())
        .post('/users/updateProfile')
        .set('Cookie', setCookie(jwt))
        .set('Cookie', setCookie(refresh))
        .type('form')
        .field('name', 'name')
        .field('avatar', 'avatar');

      expect(res.status).toBe(200);
    });
  });
});
