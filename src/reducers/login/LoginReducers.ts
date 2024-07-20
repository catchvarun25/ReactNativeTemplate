import {Reducer} from 'redux';
import {IUserLoginState} from './Interface';
import {LoginActionTypes} from '../../actions/LoginActions';

const initialState: IUserLoginState = {
  userName: '',
  password: '',
  isLoading: false,
};

export const loginReducer: Reducer<IUserLoginState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case LoginActionTypes.REQUEST_MEMBER_LOGIN:
      return {...state, isLoading: true};
    case LoginActionTypes.SUCCESS_MEMBER_LOGIN:
      return {...state, isLoading: false};
    case LoginActionTypes.ERROR_MEMBER_LOGIN:
      return {...state, isLoading: false};
    default:
      return {...initialState};
  }
};
