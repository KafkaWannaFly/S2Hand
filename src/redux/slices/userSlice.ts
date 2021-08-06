import { createSlice } from "@reduxjs/toolkit";
import { userService } from "../../services";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: userService.getUsers(),
  reducers: {}
});
