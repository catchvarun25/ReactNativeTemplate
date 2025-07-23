import { IRequestStatus } from "../sagas/common/Interface";
import { IArticleListResponse, IArticleListState } from "../sagas/articleList/Interface";
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IArticleListRequest } from "../sagas/articleList/Interface";

const initialState: IArticleListState = {
  articles: [],
  status: IRequestStatus.NONE,
};

const articleListSlice = createSlice({
  name: 'ArticleListSlice',
  initialState,
  reducers: {
    requestArticleList:(state, action: PayloadAction<IArticleListRequest>) => {
      state.status = IRequestStatus.INPROGRESS;
      state.articles = [];
    },
    successArticleList:(state, action: PayloadAction<IArticleListResponse>) => {
      state.status = IRequestStatus.SUCCESS;
      state.articles = action.payload.articles;
    },
    errorArticleList:(state, action: PayloadAction<IArticleListResponse>) => {
      state.status = IRequestStatus.FAILED;
    }
  }
});

export default articleListSlice;
export const {
  requestArticleList,
  successArticleList,
  errorArticleList
} = articleListSlice.actions

