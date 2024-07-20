import {combineReducers} from 'redux';
import {loginReducer} from './login/LoginReducers';
import {IUserLoginState} from './login/Interface';

export interface IAppRootState {
  loginState: IUserLoginState;
}

const rootReducer = combineReducers({
  loginState: loginReducer,
});

export default rootReducer;
