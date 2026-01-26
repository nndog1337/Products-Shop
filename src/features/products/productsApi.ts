import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IProduct } from "../../types/types";


export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  tagTypes: ['Product'],
  endpoints: (build) => ({
    getProducts: build.query<IProduct, string>({
      query: () => `products`,
    }),
  }),
})

export const {useGetProductsQuery} = productsApi