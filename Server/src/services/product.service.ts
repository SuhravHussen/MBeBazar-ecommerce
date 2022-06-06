import { product } from './../interfaces/product.interface';
import productModel from '@/models/products.model';

class ProductService {
  public products = productModel;
  public async addProduct(productData: product): Promise<product | product[]> {
    const createProductData: product = await this.products.create(productData);

    return createProductData;
  }

  public async getProductById(id: string): Promise<product> {
    return await this.products.findById(id);
  }

  public async getProductByCategory(category: string): Promise<product[]> {
    return await this.products.find({ category: category });
  }
}

export default ProductService;
