import { configureStore } from "@reduxjs/toolkit";
import { productsReducer, categoriesReducer, userReducer } from "./slices";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    user: userReducer
  }
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type Store = typeof store;
