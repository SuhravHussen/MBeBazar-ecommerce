import { iProduct } from "../../../models/product.interface";

export interface ProductsRes {
    data : iProduct[];
    error : boolean;
    message : string;
}
export interface AllProductsRes {
    data :{
        limit: number;
      hasPrevPage: boolean,
      hasNextPage: boolean,
      hasMore: boolean,
      docs: iProduct[],
      totalDocs: number,
      totalPages: number,
      page: number,
      pagingCounter: number,
      nextPage: number
    };
    error : boolean;
    message : string;
}