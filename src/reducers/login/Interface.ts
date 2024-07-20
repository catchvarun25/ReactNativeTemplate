export interface IUserLoginPayload {
  userName: string;
  password: string;
}

export interface IUserLoginState {
  userName: string;
  password: string;
  isLoading: boolean;
}
