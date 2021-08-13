import { createAsyncThunk } from "@reduxjs/toolkit";
import { productsService } from "../../services";

export const fetchDataProducts = createAsyncThunk(
  "products/fetchDataProducts",
  () => {
    return productsService.getProducts();
  }
);
