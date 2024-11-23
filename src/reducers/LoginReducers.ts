import { IRequestStatus } from "../sagas/common/Interface";
import { ILoginState } from "../sagas/login/interface";
import { createReducer } from "@reduxjs/toolkit";
import {
  requestMemberLogin,
  successMemberLogin,
  errorMemberLogin,
  requestMemberLogout,
} from "../actions/LoginActions";

const initialState: ILoginState = {
  userName: "",
  isLoggedIn: false,
  status: IRequestStatus.NONE,
  message: "",
};

export const loginReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requestMemberLogin, (state, action) => {
      state.isLoggedIn = false;
      state.status = IRequestStatus.INPROGRESS;
      state.userName = action.payload.userName;
    })
    .addCase(successMemberLogin, (state) => {
      state.isLoggedIn = true;
      state.status = IRequestStatus.SUCCESS;
    })
    .addCase(errorMemberLogin, (state) => {
      state.isLoggedIn = false;
      state.status = IRequestStatus.FAILED;
      state.userName = "";
    })
    .addCase(requestMemberLogout, (state) => {
      state.isLoggedIn = false;
    });
});
