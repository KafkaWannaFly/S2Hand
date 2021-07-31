import { createSlice } from "@reduxjs/toolkit";
import { productService } from "../services";

export const homeSlice = createSlice({
  name: "homeSlice",
  initialState: productService.getProducts(),
  reducers: {
    // Example
    addOneItem: (state, action) => {
      return [...state, action.payload];
    }
  }
});
