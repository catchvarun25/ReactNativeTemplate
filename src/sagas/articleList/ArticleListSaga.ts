import { takeLatest, fork, call, put } from "redux-saga/effects";
import {
  requestArticleList,
  errorArticleList,
  successArticleList,
} from "../../reducers/ArticleListReducers";
import { PayloadAction } from "@reduxjs/toolkit";
import { IArticleListRequest, API_PAGES_SIZE } from "./Interface";
import {
  newsService,
  NEWS_END_POINT,
  REST_METHODS,
} from "../../network/services";

//TODO: Can we use IArticleListRequest
function* getArticleList(action: PayloadAction<IArticleListRequest>) {
  try {
    const { data } = yield call(
      newsService,
      NEWS_END_POINT.TOP_HEADLINES,
      REST_METHODS.GET,
      {
        ...action.payload,
        pageSize: API_PAGES_SIZE,
      }
    );
    yield put(
      successArticleList({ ...data, category: action.payload.category })
    );
  } catch {
    yield put(errorArticleList("Request failed. Please try again later."));
  }
}

function* watchArticleList() {
  yield takeLatest(requestArticleList.type, getArticleList);
}

const articleListSaga = [fork(watchArticleList)];
export default articleListSaga;
