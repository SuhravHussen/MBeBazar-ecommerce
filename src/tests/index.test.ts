import request from 'supertest';
import App from '@/app';
import IndexRoute from '@/routes/index.route';

describe('Testing Index', () => {
  describe('[GET] /', () => {
    const indexRoute = new IndexRoute();
    const app = new App();
    app.initializeRoutes([indexRoute]);

    it('response statusCode 200', async () => {
      const res = await request(app.getServer()).get('/');
      expect(res.status).toBe(200);
    });
  });
});
