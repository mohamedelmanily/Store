import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //prevent adding same product (card) in the cart
      const item = state.products.find((item) => item.id === action.payload.id);
      if(item){
        // لو منتج موجود قبل كده في الكارت
        item.count +=action.payload.count
      }
      else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state,action) => {
        state.products=state.products.filter(item=>item.id !== action.payload)
      },

    resetCart: (state) => {
        state.products = []
      },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
