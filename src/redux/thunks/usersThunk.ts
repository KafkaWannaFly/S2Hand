import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../../services";

interface DataLogin {
  email: string;
  password: string;
}
export const fetchUserByLogin = createAsyncThunk(
  "users/fetchUserByLogin",
  ({ email, password }: DataLogin) => {
    return userService.getUserByLogin(email, password);
  }
);
