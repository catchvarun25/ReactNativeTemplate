import { combineReducers } from "redux";
import loginSlice from "./LoginReducers";
import articleListSlice from "./ArticleListReducers";
import { ILoginState } from "../sagas/login/interface";
import { IArticleListState } from "../sagas/articleList/Interface";

export interface IAppRootState {
  loginState: ILoginState;
  articleListState: IArticleListState;
}

const rootReducer = combineReducers({
  loginState: loginSlice.reducer,
  articleListState: articleListSlice.reducer,
});

export default rootReducer;
