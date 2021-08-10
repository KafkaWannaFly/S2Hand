import { Category } from "../../models";
import { createSlice } from "@reduxjs/toolkit";
import { fetchDataCategories } from "../thunks";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: [] as Category[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataCategories.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  }
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice.reducer;
