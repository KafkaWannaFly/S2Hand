import { Cart } from "../../models";
import { createSlice } from "@reduxjs/toolkit";
import { loadCart } from "../thunks";

const initialCart: Cart = {
  items: [],
  totalPrice: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    resetCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadCart.fulfilled, (state, action) => {
      const cart = action.payload;
      state.items = cart.items;
      state.totalPrice = cart.totalPrice;
    });
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
