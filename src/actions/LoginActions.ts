import { ILoginRequest, ILoginResponse } from "../sagas/login/interface";
import { createAction } from '@reduxjs/toolkit';

export const requestMemberLogin = createAction<ILoginRequest>('AUTH/LOGIN_REQUEST');
export const successMemberLogin = createAction<ILoginResponse>('AUTH/SUCCESS_LOGIN_REQUEST');
export const errorMemberLogin = createAction<ILoginResponse>('AUTH/ERROR_LOGIN_REQUEST');
export const requestMemberLogout = createAction('AUTH/LOGOUT_REQUEST');
