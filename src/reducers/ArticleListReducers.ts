import { IRequestStatus } from "../sagas/common/Interface";
import { IArticleListState } from "../sagas/articleList/Interface";
import { createReducer } from "@reduxjs/toolkit";
import {
  requestArticleList,
  successArticleList,
  errorArticleList,
} from "../actions/ArticleListActions";

const initialState: IArticleListState = {
  articles: [],
  status: IRequestStatus.NONE,
};

export const articleListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requestArticleList, (state, action) => {
      state.status = IRequestStatus.INPROGRESS;
      state.articles = [];
    })
    .addCase(successArticleList, (state, action) => {
      state.status = IRequestStatus.SUCCESS;
      state.articles = action.payload.articles;
    })
    .addCase(errorArticleList, (state, action) => {
      state.status = IRequestStatus.FAILED;
    });
});
