import { IRequestStatus } from "../sagas/common/Interface";
import { ILoginRequest, ILoginResponse } from "../sagas/login/interface";
import { ILoginState } from "../sagas/login/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ILoginState = {
  userName: "",
  isLoggedIn: false,
  status: IRequestStatus.NONE,
  message: "",
};

const loginSlice = createSlice({
  name: "LoginSlice",
  initialState,
  reducers: {
    requestMemberLogin: (state, action: PayloadAction<ILoginRequest>) => {
      state.isLoggedIn = false;
      state.status = IRequestStatus.INPROGRESS;
      state.userName = action.payload.userName;
    },
    successMemberLogin: (state, action: PayloadAction<ILoginResponse>) => {
      state.isLoggedIn = true;
      state.status = IRequestStatus.SUCCESS;
    },
    errorMemberLogin: (state, action: PayloadAction<ILoginResponse>) => {
      state.isLoggedIn = false;
      state.status = IRequestStatus.FAILED;
      state.userName = "";
    },
    requestMemberLogout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export default loginSlice;
export const {
  requestMemberLogin,
  successMemberLogin,
  errorMemberLogin,
  requestMemberLogout,
} = loginSlice.actions;
