import { IRequestStatus } from "../common/Interface";

export interface ILoginRequest {
  userName: string;
  password: string;
}

export interface ILoginResponse {
  status: IRequestStatus;
  message: string;
  errorCode?: string;
}

export interface ILoginState {
  userName: string;
  isLoggedIn: boolean;
  status: IRequestStatus;
  message: string;
}
