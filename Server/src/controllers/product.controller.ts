import { product } from './../interfaces/product.interface';
import ProductService from '@/services/product.service';
import { NextFunction, Request, Response } from 'express';
import { response } from '@/interfaces/response.interface';

class productController {
  public productService = new ProductService();

  addProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createdProduct: product | product[] = await this.productService.addProduct(req.body);
      const response: response = {
        message: 'product added successfully',
        data: createdProduct,
        error: false,
      };
      res.json(response);
    } catch (err) {
      next(err);
    }
  };

  getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product: product = await this.productService.getProductById(req.params.id);
      const response: response = {
        message: 'Product found successfully',
        data: product,
        error: false,
      };
      res.json(response);
    } catch (err) {
      next(err);
    }
  };
}

export default productController;
