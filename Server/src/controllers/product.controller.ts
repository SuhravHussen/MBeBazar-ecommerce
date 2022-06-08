import { product, paginationProducts } from './../interfaces/product.interface';
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
      const response1: response = {
        message: 'Product found successfully',
        data: product,
        error: false,
      };
      const response2: response = {
        message: 'Sorry! No Product Found',
        data: [],
        error: false,
      };
      res.json(product !== null ? response1 : response2);
    } catch (err) {
      next(err);
    }
  };

  getProductByCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const category = req.query.category as string;
      const product: product[] = await this.productService.getProductByCategory(category);

      const response1: response = {
        message: 'Product found successfully',
        data: product,
        error: false,
      };
      const response2: response = {
        message: 'Sorry! No Product Found',
        data: [],
        error: false,
      };
      res.json(product.length > 0 ? response1 : response2);
    } catch (err) {
      next(err);
    }
  };

  getProductByMostSell = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product: product[] = await this.productService.getProductByMostSell();

      const response1: response = {
        message: 'Product found successfully',
        data: product,
        error: false,
      };
      const response2: response = {
        message: 'Sorry! No Product Found',
        data: [],
        error: false,
      };
      res.json(product.length > 0 ? response1 : response2);
    } catch (err) {
      next(err);
    }
  };

  getPopularProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products: product[] = await this.productService.getPopularProducts();

      const response1: response = {
        message: 'Product found successfully',
        data: products,
        error: false,
      };
      const response2: response = {
        message: 'Sorry! No Product Found',
        data: [],
        error: false,
      };
      res.json(products.length > 0 ? response1 : response2);
    } catch (err) {
      next(err);
    }
  };

  getDealsOfTheDay = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products: product[] = await this.productService.getDealsOfTheDay();

      const response1: response = {
        message: 'Product found successfully',
        data: products,
        error: false,
      };
      const response2: response = {
        message: 'Sorry! No Product Found',
        data: [],
        error: false,
      };
      res.json(products.length > 0 ? response1 : response2);
    } catch (err) {
      next(err);
    }
  };

  getProductSearchSuggestions = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tags: string[] = req.body.tags;
      const products: product[] = await this.productService.productSearchSuggestions(tags);

      const response1: response = {
        message: 'Product found successfully',
        data: products,
        error: false,
      };
      const response2: response = {
        message: 'Sorry! No Product Found',
        data: [],
        error: false,
      };
      res.json(products.length > 0 ? response1 : response2);
    } catch (err) {
      next(err);
    }
  };

  getFullSearchedProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { page = '1', limit = '5' } = req.params as unknown as { page: string; limit: string };

      const text: string = req.body.text;
      const products: paginationProducts = await this.productService.productFullSearch(text, parseInt(page), parseInt(limit));

      const response1: response = {
        message: 'Product found successfully',
        data: products,
        error: false,
      };
      const response2: response = {
        message: 'Sorry! No Product Found',
        data: [],
        error: false,
      };
      console.log(products);
      res.json(products.totalDocs > 0 ? response1 : response2);
    } catch (err) {
      next(err);
    }
  };
}

export default productController;
