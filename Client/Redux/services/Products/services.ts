import { AllProductsRes, ProductsRes } from './../types/productResTypes';
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
        getAllProductsBySearch : builder.mutation<AllProductsRes, {
            search: string,
            page?: number,
        }>({  
            query: ({search , page=1}) => ({
                url: `/product/full-search?page=${page}`,
                method: 'POST',
                body: {text : search}
            }),
        }),
        getProductSuggestions : builder.mutation<ProductsRes, string[] >({
            query: (searchArray: string[] ) => ({
                url: `/product/search-suggestions`,
                method: 'POST',
                body: {tags : searchArray}
            }),
        }),
       
})
});

export const {useGetProductSuggestionsMutation , useGetAllProductsBySearchMutation} = productApi;
