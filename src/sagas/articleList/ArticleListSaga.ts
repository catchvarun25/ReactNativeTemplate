import { takeLatest, fork, call, put } from "redux-saga/effects";
import {
  requestArticleList,
  errorArticleList,
  successArticleList,
} from "../../actions/ArticleListActions";
import { callRestAPI, END_POINT, REST_METHODS } from "../../WebService";
import { IArticleListResponse, IArticleListRequest } from "./Interface";

//TODO: Can we use IArticleListRequest
function* getArticleList(action: any) {
  try {
    const response: IArticleListResponse = yield call(
      callRestAPI,
      END_POINT.TOP_HEADLINES,
      REST_METHODS.GET,
      action.payload
    );
    console.log("Varun Response:", response);
    yield put(successArticleList(response.data ?? {}));
  } catch (error) {
    yield put(errorArticleList);
  }
}

function* watchArticleList() {
  yield takeLatest(requestArticleList.type, getArticleList);
}

const articleListSaga = [fork(watchArticleList)];
export default articleListSaga;
