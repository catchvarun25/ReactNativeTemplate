import { call, fork, put, takeLatest } from "redux-saga/effects";
import { delay } from "redux-saga/effects";
import { ILoginResponse } from "./interface";
import { callRestAPI, REST_METHODS, END_POINT } from "../../WebService";
import {
  LoginActionTypes,
  successMemberLogin,
} from "../../actions/LoginActions";

function* requestLoginMember(payload: any) {
  try {
    // const response: ILoginResponse = yield call(
    //   callRestAPI,
    //   END_POINT.AUTH_LOGIN,
    //   REST_METHODS.GET,
    //   payload
    // );
    //TODO: Remove this hard coding later
    yield call(delay, 2000);
    yield put(successMemberLogin());
  } catch (error) {}
}

function* watchLogin() {
  yield takeLatest(LoginActionTypes.REQUEST_MEMBER_LOGIN, requestLoginMember);
}

const loginSaga = [fork(watchLogin)];
export default loginSaga;
