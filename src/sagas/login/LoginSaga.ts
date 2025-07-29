import { call, fork, put, takeLatest } from "redux-saga/effects";
import { delay } from "redux-saga/effects";
import { callRestAPI, REST_METHODS, END_POINT } from "../../WebService";
import {
  requestMemberLogin,
  successMemberLogin,
  errorMemberLogin,
} from "../../reducers/LoginReducers";

import { ILoginResponse } from "./interface";
import { ERequestStatus } from "../../utility/CommonInterface";

function* requestLoginMember(payload: any) {
  try {
    // const response: ILoginResponse = yield call(
    //   callRestAPI,
    //   END_POINT.AUTH_LOGIN,
    //   REST_METHODS.GET,
    //   payload
    // );
    //TODO: Remove this hard coding later
    // yield delay(2000);
    const loginResponse: ILoginResponse = {
      status: ERequestStatus.SUCCESS,
      message: "Success Logged In",
    };
    yield put(successMemberLogin(loginResponse));
  } catch (error) {
    const loginResponse: ILoginResponse = {
      status: ERequestStatus.FAILED,
      message: error.message,
    };
    console.log("Error: ", error);
    yield put(errorMemberLogin(loginResponse));
  }
}

function* watchLogin() {
  yield takeLatest(requestMemberLogin.type, requestLoginMember);
}

const loginSaga = [fork(watchLogin)];
export default loginSaga;
