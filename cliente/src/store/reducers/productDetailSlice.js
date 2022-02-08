import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    author: {
        name: "",
        lastname: ""
    },
    item: {
        id: "",
        title: "",
        price: {
            currency: "",
            amount: "",
            decimals: ""
        },
        picture: "",
        condition: "",
        free_shipping: "",
        sold_quantity: "",
        description: "",
        address: "",
    }
};

export const productDetailSlice = createSlice({
  name: "ProductDetail",
  initialState,
  reducers: {
      getProductDetail: (state, action) => {
        state.value = action.payload
      }
  },
});

export const { increment, decrement, incrementByAmount } = productDetailSlice.actions

export default productDetailSlice.reducer
