import { setCookie } from './../utils/jwt';
import redisClient from '@databases/redis';
import { PassportLogin } from '@config/passport.config';
import request from 'supertest';
import App from '@/app';
import AuthRoute from '@/routes/auth.route';
import mongoose from 'mongoose';
import passport from 'passport';
import MockStrategy from 'passport-mock-strategy';

const jwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VocmF2IGh1c3NhaW4iLCJfaWQiOiI2MmQ2M2QwYWU5YmNkYjY5NTFmNTRhODkiLCJlbWFpbCI6InN1aHJhdmh1c3NlbkBnbWFpbC5jb20iLCJhdmF0YXIiOm51bGwsImFkZHJlc3MiOm51bGwsImlhdCI6MTY1OTI1NDA3MCwiZXhwIjoxNjYxODQ2MDcwfQ.sCLL4UWy2z5-ES8d7EXy_dOnETusWrMuBVwcmpKi4QU';

describe('Testing Auth', () => {
  describe('[POST] /auth/signup', () => {
    const authRoute = new AuthRoute();
    const app = new App();
    app.initializeMiddlewares();
    app.initializeRoutes([authRoute]);

    const users = authRoute.authController.authService.users;

    users.findOne = jest.fn().mockReturnValue({})(mongoose as any).connect = jest.fn();

    users.create = jest.fn().mockReturnValue({
      _id: '62ce6bcd90b05947c41e39d8',
      name: 'name',
      email: 'abc@gmail.com',
      phone: '123456789',
    })(mongoose as any).connect = jest.fn();

    it('response statusCode should be 201', async () => {
      const res = await request(app.getServer())
        .post('/auth/signup')
        .send({
          name: 'name',
          email: 'abc@gmail.com',
          password: 'Sourov123',
        })
        .set('Accept', 'application/json');
      expect(res.status).toBe(200);
    });
  });

  // describe('[POST] /auth/login', () => {
  //   const authRoute = new AuthRoute();
  //   const app = new App();
  //   const passportLogin = new PassportLogin();
  //   app.initializePassport();
  //   app.initializeMiddlewares();
  //   app.connectToRedis();
  //   app.initializeRoutes([authRoute]);
  //   const users = passportLogin.user;
  //   users.findOne = jest.fn().mockReturnValue({
  //     _id: '62ce6bcd90b05947c41e39d8',
  //     name: 'name',
  //     email: 'abc@gmail.com',
  //     phone: '123456789',
  //   })(mongoose as any).connect = jest.fn();
  //   it('response statusCode should be 201', async () => {
  //     const res = await request(app.getServer()).get('/auth/login').send({
  //       email: 'abc@gmail.com',
  //       password: 'Sourov123',
  //     });

  //     console.log(res.text);
  //     expect(res.status).toBe(200);
  //   });
  // });

  describe('[GET] /auth/logout', () => {
    const authRoute = new AuthRoute();
    const app = new App();
    app.initializeMiddlewares();
    app.initializePassport();
    app.initializeRoutes([authRoute]);

    it('response statusCode should be 200', async () => {
      const res = await request(app.getServer()).get('/auth/logout').set('Cookie', setCookie(jwt));

      expect(res.status).toBe(200);
    });
  });
});
