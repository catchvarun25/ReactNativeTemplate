import { ERequestStatus } from "../utility/CommonInterface";
import {
  ENewsCategoryType,
  IArticleItemResponse,
  IArticleListResponse,
  IArticleListState,
} from "../sagas/articleList/Interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticleListRequest } from "../sagas/articleList/Interface";

const initialState: IArticleListState = {
  articles: {} as Record<ENewsCategoryType, Array<IArticleItemResponse>>,
  status: ERequestStatus.NONE,
  page: 0,
  shouldLoadMore: true,
};

const articleListSlice = createSlice({
  name: "ArticleListSlice",
  initialState,
  reducers: {
    requestArticleList: (state, action: PayloadAction<IArticleListRequest>) => {
      state.status = ERequestStatus.INPROGRESS;
      state.page = action.payload.page;
    },
    successArticleList: (
      state,
      action: PayloadAction<IArticleListResponse>
    ) => {
      state.status = ERequestStatus.SUCCESS;
      state.articles[action.payload.category] = [
        ...(state.articles[action.payload.category] || []),
        ...action.payload.articles,
      ];
      state.shouldLoadMore =
        [...(state.articles[action.payload.category] || [])].length <
        action.payload.totalResults;
    },
    errorArticleList: (state, action: PayloadAction<string>) => {
      state.status = ERequestStatus.FAILED;
      state.message = action.payload;
    },
  },
});

export default articleListSlice;
export const { requestArticleList, successArticleList, errorArticleList } =
  articleListSlice.actions;
