import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models";
import { fetchDataProducts } from "../thunks";
// import { getTimeDuration } from "../../utils";

export const productsSlice = createSlice({
  name: "products",
  initialState: [] as Product[],
  reducers: {
    addNewProduct: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      if (state.find((item) => item.id === product.id))
        state.map((item) => (item.id === product.id ? product : item));
      else state.unshift(product);
    },
    deleteProduct: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      return state.filter((item) => item.id !== product.id);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      return state.map((item) => (item.id === product.id ? product : item));
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataProducts.fulfilled, (state, action) => {
      const products = action.payload;
      products.sort((a, b) => {
        if (a.time && b.time) {
          return new Date(b.time).getTime() - new Date(a.time).getTime();
        }
        return 0;
      });
      state.push(...products);
    });
  }
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
