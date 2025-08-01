import { takeLatest, fork, call, put } from "redux-saga/effects";
import {
  requestArticleList,
  errorArticleList,
  successArticleList,
} from "../../reducers/ArticleListReducers";
import { callRestAPI, END_POINT, REST_METHODS } from "../../WebService";
import { PayloadAction } from "@reduxjs/toolkit";
import { IArticleListRequest, API_PAGES_SIZE } from "./Interface";

//TODO: Can we use IArticleListRequest
function* getArticleList(action: PayloadAction<IArticleListRequest>) {
  try {
    const { data } = yield call(
      callRestAPI,
      END_POINT.TOP_HEADLINES,
      REST_METHODS.GET,
      {
        ...action.payload,
        pageSize: API_PAGES_SIZE,
      }
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
