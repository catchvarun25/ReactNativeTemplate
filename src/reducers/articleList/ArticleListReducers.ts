import { IRequestStatus } from "../../sagas/common/Interface";
import { IArticleListState } from "../../sagas/articleList/Interface";
import { createReducer } from "@reduxjs/toolkit";
import { getArticleList,successArticleList,errorArticleList } from "../../actions/ArticleListActions";

const initialState: IArticleListState = {
  articles: [],
  status: IRequestStatus.NONE,
};

export const articleListReducer = createReducer(initialState, (builder) => {
  builder.addCase(getArticleList, (state) => {
    state.status = IRequestStatus.INPROGRESS;
  })
  .addCase(successArticleList, (state, action) => {
    state.status = IRequestStatus.SUCCESS;
    state.articles = action.payload.articles;
  })
  .addCase(errorArticleList, (state) => {
    state.status = IRequestStatus.FAILED;
  });
});
