import { ERequestStatus } from "../utility/CommonInterface";
import { IArticleListResponse, IArticleListState } from "../sagas/articleList/Interface";
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IArticleListRequest } from "../sagas/articleList/Interface";
import { API_PAGES_SIZE } from "../sagas/articleList/Interface";

const initialState: IArticleListState = {
  articles: [],
  status: ERequestStatus.NONE,
  page: 0,
  shouldLoadMore: true,
};

const articleListSlice = createSlice({
  name: 'ArticleListSlice',
  initialState,
  reducers: {
    requestArticleList:(state, action: PayloadAction<IArticleListRequest>) => {
      state.status = ERequestStatus.INPROGRESS;
      state.page = action.payload.page;
    },
    successArticleList:(state, action: PayloadAction<IArticleListResponse>) => {
      state.status = ERequestStatus.SUCCESS;
      state.articles = [...state.articles , ...action.payload.articles];
      state.shouldLoadMore = state.articles.length < action.payload.totalResults;
    },
    errorArticleList:(state, action: PayloadAction<IArticleListResponse>) => {
      state.status = ERequestStatus.FAILED;
    }
  }
});

export default articleListSlice;
export const {
  requestArticleList,
  successArticleList,
  errorArticleList
} = articleListSlice.actions

