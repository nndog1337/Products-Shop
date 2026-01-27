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
  tagTypes: ['Product'],
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], {
      limit?:number,
      skip?:number
    }>({
      query: ({limit,skip=0}) => `products?limit=${limit}&skip=${skip}`,
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
    }
    >({
      query: ({ category, limit = 30, skip = 0 }) => `products/category/${category}?limit=${limit}&skip=${skip}`,
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