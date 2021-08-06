import { configureStore } from "@reduxjs/toolkit";
import { productsReducer, categoriesReducer } from "./slices";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer
  }
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type Store = typeof store;
