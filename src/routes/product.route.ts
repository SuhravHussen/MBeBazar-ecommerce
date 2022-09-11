import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import productController from '@/controllers/product.controller';

class ProductRoute implements Routes {
  public router = Router();
  public path = '/product';
  public productController = new productController();
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', this.productController.getProductByCategory);
    this.router.post('/', this.productController.addProduct);
    this.router.get('/mostSell', this.productController.getProductByMostSell);
    this.router.get('/popular', this.productController.getPopularProducts);
    this.router.get('/deals-of-the-day', this.productController.getDealsOfTheDay);
    this.router.post('/search-suggestions', this.productController.getProductSearchSuggestions);
    this.router.post('/full-search', this.productController.getFullSearchedProducts);
    this.router.get('/:id', this.productController.getProductById);
  }
}
export default ProductRoute;
