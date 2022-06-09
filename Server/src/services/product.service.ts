import { paginationProducts, product } from './../interfaces/product.interface';
import productModel from '@/models/products.model';
import { SortOrder } from 'mongoose';

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
    return await this.products.find({ category: { $regex: category, $options: 'i' } });
  }

  public async getProductByMostSell(): Promise<product[]> {
    return await this.products.find({}).sort({ sold: -1 }).limit(10);
  }

  public async getPopularProducts(): Promise<product[]> {
    return await this.products.find({ featured: { $all: ['popular'] } });
  }

  public async getDealsOfTheDay(): Promise<product[]> {
    return await this.products.find({ featured: { $all: ['dealsOfTheDay'] } });
  }

  public async productSearchSuggestions(array: string[]): Promise<product[]> {
    return await this.products.find({ tags: { $in: array } });
  }

  public async productFullSearch(text: string, page: number, limit: number): Promise<paginationProducts> {
    const options = {
      query: { $text: { $search: text } },
      limit: limit || 15,
      page: page || 1,
      select: { score: { $meta: 'textScore' } },
      sort: { score: { $meta: 'textScore' } as unknown as SortOrder },
    };

    return await this.products.paginate(options);
  }

  public async getRelatedProducts(id, title): Promise<product[]> {
    const options = {
      query: { $text: { $search: title }, _id: { $ne: id } },
      limit: 10,
      page: 1,
      select: { score: { $meta: 'textScore' } },
      sort: { score: { $meta: 'textScore' } as unknown as SortOrder },
    };

    const returnProduct = await this.products.paginate(options);
    return returnProduct.docs;
  }
}

export default ProductService;
