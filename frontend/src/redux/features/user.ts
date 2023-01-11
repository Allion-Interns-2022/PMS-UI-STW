import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "../../config/commonTypes";

const initialState: IUserState = {
  userDetails: {
    id: 0,
    firsName: "",
    lastName: "",
    username: "",
    password: "",
    created: new Date().toDateString(),
    createdBy: "",
    lastModified: new Date().toDateString(),
    lastModifiedBy: "",
  },
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },

    logout: (state) => {
      state.isAuthenticated = false;
    },

    signup: (state, action: PayloadAction<IUserState["userDetails"]>) => {
      state.userDetails = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
