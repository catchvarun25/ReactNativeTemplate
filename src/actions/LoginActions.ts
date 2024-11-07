import { action } from "typesafe-actions";
import { ILoginRequest, ILoginResponse } from "../sagas/login/interface";

export enum LoginActionTypes {
  REQUEST_MEMBER_LOGIN = "AUTH/LOGIN_REQUEST",
  SUCCESS_MEMBER_LOGIN = "AUTH/SUCCESS_LOGIN_REQUEST",
  ERROR_MEMBER_LOGIN = "AUTH/ERROR_LOGIN_REQUEST",
  REQUEST_MEMBER_LOGOUT = "AUTH/LOGOUT_REQUEST",
}

export const requestMemberLogin = (request: ILoginRequest) =>
  action(LoginActionTypes.REQUEST_MEMBER_LOGIN, request);
export const requestMemberLogout = () =>
  action(LoginActionTypes.REQUEST_MEMBER_LOGOUT);
export const successMemberLogin = () =>
  action(LoginActionTypes.SUCCESS_MEMBER_LOGIN);
