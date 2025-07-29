import { ERequestStatus } from "../../utility/CommonInterface";

export interface ILoginRequest {
  userName: string;
  password: string;
}

export interface ILoginResponse {
  status: ERequestStatus;
  message: string;
  errorCode?: string;
}

export interface ILoginState {
  userName: string;
  isLoggedIn: boolean;
  status: ERequestStatus;
  message: string;
}
