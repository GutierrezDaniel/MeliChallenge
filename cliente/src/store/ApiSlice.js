import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/items" }),
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: (search) => `?q=${search}`,
    }),
    getProductDetails: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { usegetProductList, usegetProductDetails } = productsApi;

export default productsApi;
