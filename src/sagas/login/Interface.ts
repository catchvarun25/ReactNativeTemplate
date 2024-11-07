import { IRequestStatus } from "../common/Interface";

export interface ILoginRequest {
  userName: string;
  password: string;
}

export interface ILoginResponse {
  status: IRequestStatus;
  message: string;
}

export interface ILoginState {
  userName: string;
  status: IRequestStatus;
}
