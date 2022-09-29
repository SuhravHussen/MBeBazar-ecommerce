import { ProductsRes } from './../types/productResTypes';
import { productApi as api } from "./api";

export const  productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPopularProducts: builder.query<ProductsRes, void >({
            query: () => `/product/popular`,
        }),
         getMostSellProducts: builder.query<ProductsRes, void >({
            query: () => `/product/mostSell`,
        }),
        getDealsOfTheDay : builder.query<ProductsRes, void >({
            query: () => `/product/deals-of-the-day`,
        }),
        getProductDetails : builder.query<any, string >({
            query: (id) => `/product/${id}`,
        }),
        getProductReviews : builder.query<ProductsRes, string >({
            query: (id) => `/review?id=${id}`,
        }),
})
});

