import { createAsyncThunk } from "@reduxjs/toolkit";
import { cartService } from "../../services";

export const loadCart = createAsyncThunk("cart/loadCart", () => {
  return cartService.getCart();
});
