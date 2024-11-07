import { takeLatest, fork, call, put } from "redux-saga/effects";
import {
  ArticleListActionTypes,
  errorArticleList,
  successArticleList,
} from "../../actions/ArticleListActions";
import { callRestAPI, END_POINT, REST_METHODS } from "../../WebService";
import { IArticleListResponse } from "./Interface";

function* requestArticleList(payload: any) {
  try {
    const response: IArticleListResponse = yield call(
      callRestAPI,
      END_POINT.TOP_HEADLINES,
      REST_METHODS.GET,
      payload
    );
    yield put(successArticleList(response));
  } catch (error) {
    yield put(errorArticleList);
  }
}

function* watchArticleList() {
  yield takeLatest(
    ArticleListActionTypes.REQUEST_GET_ARTICLE_LIST,
    requestArticleList
  );
}

const articleListSaga = [fork(watchArticleList)];
export default articleListSaga;
