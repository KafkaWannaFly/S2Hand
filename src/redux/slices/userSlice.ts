import { createSlice } from "@reduxjs/toolkit";
import { fetchUserByLogin } from "../thunks";
import { User } from "../../models";

const initialUser: User = {
  id: 0,
  email: "",
  password: "",
  name: "",
  postedItems: [],
  purchasedItems: []
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initialUser,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserByLogin.fulfilled, (state, action) => {
      const user = action.payload;
      if (user) return { ...state, ...user };
      else return { ...state, ...initialUser };
    });
  }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
