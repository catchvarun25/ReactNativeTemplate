import { Reducer } from "redux";
import { IRequestStatus } from "../../sagas/common/Interface";
import { ILoginState } from "../../sagas/login/interface";
import { LoginActionTypes } from "../../actions/LoginActions";

const initialState: ILoginState = {
  userName: "",
  status: IRequestStatus.NONE,
};

export const loginReducer: Reducer<ILoginState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LoginActionTypes.REQUEST_MEMBER_LOGIN:
      return { ...state, status: IRequestStatus.LOADING };
    case LoginActionTypes.SUCCESS_MEMBER_LOGIN:
      return { ...state, status: IRequestStatus.SUCCESS };
    case LoginActionTypes.ERROR_MEMBER_LOGIN:
      return { ...state, status: IRequestStatus.FAILED };
    default:
      return { ...initialState };
  }
};
