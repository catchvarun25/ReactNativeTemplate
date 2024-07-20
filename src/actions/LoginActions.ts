import {action} from 'typesafe-actions';
import {IUserLoginPayload} from '../reducers/login/Interface';

export enum LoginActionTypes {
  REQUEST_MEMBER_LOGIN = 'AUTH/LOGIN_REQUEST',
  SUCCESS_MEMBER_LOGIN = 'AUTH/SUCCESS_LOGIN_REQUEST',
  ERROR_MEMBER_LOGIN = 'AUTH/ERROR_LOGIN_REQUEST',
  REQUEST_MEMBER_LOGOUT = 'AUTH/LOGOUT_REQUEST',
}

export const requestMemberLogin = (payload: IUserLoginPayload) => {
  action(LoginActionTypes.REQUEST_MEMBER_LOGIN, payload);
};
export const requestMemberLogout = () =>
  action(LoginActionTypes.REQUEST_MEMBER_LOGOUT);
export const successMemberLogin = () => {
  action(LoginActionTypes.SUCCESS_MEMBER_LOGIN);
};
