import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "../../config/commonTypes";
import initialUserValues from "../../config/initialValues/initialUserValues";

const initialState: IUserState = {
  userDetails: initialUserValues,
  isAuthenticated: false,
  userToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.userToken = action.payload;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.userToken = "";
    },

    signup: (state, action: PayloadAction<IUserState["userDetails"]>) => {
      state.userDetails = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
