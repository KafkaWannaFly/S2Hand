import { Cart, Product } from "../../models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadCart } from "../thunks";

const initialCart: Cart = {
  items: [],
  totalPrice: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    updateItemToCart: (
      state,
      action: PayloadAction<{ product: Product; quantity: number }>
    ) => {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        state.items = state.items.map((item) =>
          item.id === product.id
            ? {
                ...product,
                quantity:
                  (item.quantity ?? 0) + quantity > 10
                    ? 10
                    : (item.quantity ?? 0) + quantity
              }
            : item
        );
        state.items = state.items.filter(
          (item) => item.quantity && item.quantity > 0
        );
      } else {
        state.items.push({ ...product, quantity: quantity });
      }
      state.totalPrice += parseFloat(product.price) * quantity;
    },
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
