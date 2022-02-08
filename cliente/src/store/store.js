import { configureStore } from "@reduxjs/toolkit";
import productsApi from "./ApiSlice";
import productDetailReducer from "./reducers/productDetailSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    productDetail: productDetailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
