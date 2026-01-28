import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IProduct } from "../../types/types";

interface IProductResponse{
  products: IProduct[],
  total: number,
  skip: number,
  limit: number
}


export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], {
      limit?:number,
      skip?:number,
      sortBy?: string,
      order?:'asc' | 'desc'
    }>({
      query: ({ limit, skip = 0, sortBy, order }) => {
        const params = new URLSearchParams();
        if (limit) params.append('limit', limit.toString());
        if (skip) params.append('skip', skip.toString());
        if (sortBy) params.append('sortBy', sortBy);
        if (order) params.append('order', order);
        
        const queryString = params.toString();
        return `products${queryString ? `?${queryString}` : ''}`;
      },
      transformResponse: (response: IProductResponse) => response.products
    }),
    getProduct: build.query<IProduct, string | void >({
      query: (id) => `products/${id}`,
    }),
    getProductsCategories: build.query<string[], void >({
      query: () => `products/category-list`,
    }),

    getProductsByCategory: build.query<IProduct[], { 
      category: string; 
      limit?: number;
      skip?: number;
      sortBy?: string,
      order?:'asc' | 'desc'
    }
    >({
      query: ({ category, limit = 30, skip = 0, sortBy, order}) => {
        const params = new URLSearchParams();
        if (limit) params.append('limit', limit.toString());
        if (skip) params.append('skip', skip.toString());
        if (sortBy) params.append('sortBy', sortBy);
        if (order) params.append('order', order);
        
        const queryString = params.toString();
        return `products/category/${category}${queryString ? `?${queryString}` : ''}`;
      },
      transformResponse: (response: IProductResponse) => response.products
    }),
    getProductsBySearch: build.query<IProduct[], {
      query: string,
      skip?: number
    } >({
      query: ({query,skip=0}) => `products/search?q=${query}&skip=${skip}`,
      transformResponse: (response: IProductResponse) => response.products
    }),
  }),
})

export const {useGetProductsQuery, useGetProductQuery, useGetProductsCategoriesQuery, useGetProductsByCategoryQuery, useGetProductsBySearchQuery} = productsApi