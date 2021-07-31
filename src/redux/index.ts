import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { homeSlice } from "./HomeSlice";
import { logger } from "./Logger";
import { userSlice } from "./UserSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    users: userSlice.reducer
  },
  middleware: [...getDefaultMiddleware(), logger]
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type Store = typeof store;
