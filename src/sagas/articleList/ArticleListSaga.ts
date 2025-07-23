import { takeLatest, fork, call, put } from "redux-saga/effects";
import {
  requestArticleList,
  errorArticleList,
  successArticleList,
} from "../../reducers/ArticleListReducers";
import { callRestAPI, END_POINT, REST_METHODS } from "../../WebService";

//TODO: Can we use IArticleListRequest
function* getArticleList(action: any) {
  try {
    const { data } = yield call(
      callRestAPI,
      END_POINT.TOP_HEADLINES,
      REST_METHODS.GET,
      action.payload
    );
    yield put(successArticleList(data ?? {}));
  } catch (error) {
    yield put(errorArticleList);
  }
}

function* watchArticleList() {
  yield takeLatest(requestArticleList.type, getArticleList);
}

const articleListSaga = [fork(watchArticleList)];
export default articleListSaga;
