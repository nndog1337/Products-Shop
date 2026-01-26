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
    getProducts: build.query<IProduct[], number | void>({
      query: (limit=30) => `products?limit=${limit}`,
      transformResponse: (response: IProductResponse) => response.products
    }),
    getProduct: build.query<IProduct, string | void >({
      query: (id) => `products/${id}`,
    }),
  }),
})

export const {useGetProductsQuery, useGetProductQuery} = productsApi