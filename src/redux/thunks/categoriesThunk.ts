import { createAsyncThunk } from "@reduxjs/toolkit";
import { categoriesService } from "../../services";

export const fetchDataCategories = createAsyncThunk(
  "categories/fetchDataCategories",
  () => {
    return categoriesService.getCategories();
  }
);
