import { call, fork, put, takeLatest } from "redux-saga/effects";
import { delay } from "redux-saga/effects";
import { callRestAPI, REST_METHODS, END_POINT } from "../../WebService";
import {
  requestMemberLogin,
  successMemberLogin,
  errorMemberLogin,
} from "../../actions/LoginActions";
import { ILoginResponse } from "./interface";
import { IRequestStatus } from "../common/Interface";

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
      status: IRequestStatus.SUCCESS,
      message: "Success Logged In",
    };
    yield put(successMemberLogin(loginResponse));
  } catch (error) {
    const loginResponse: ILoginResponse = {
      status: IRequestStatus.FAILED,
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
