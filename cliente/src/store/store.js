import { configureStore } from '@reduxjs/toolkit'
import productDetailReducer from './reducers/productDetailSlice'

export const store = configureStore({
  reducer: {
      productDetail: productDetailReducer,
  },
})