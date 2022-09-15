import request from 'supertest';
import App from '@/app';
import ProductRoute from '@/routes/product.route';

describe('Order Route', () => {
  // facing problem for used pagination plugin
  describe("[GET] /product?category='category'", () => {
    const productRoute = new ProductRoute();

    const app = new App();
    app.initializeMiddlewares();
    app.initializeRoutes([productRoute]);
    app.connectToDatabase();
    // const product = productRoute.productController.productService.products;

    it('response statusCode 200', async () => {
      const res = await request(app.getServer()).get('/product?category=Meat');

      expect(res.status).toBe(200);
      app.closeMongoDB();
    });
  });
});
