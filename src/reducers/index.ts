import { combineReducers } from "redux";
import { loginReducer } from "./LoginReducers";
import { articleListReducer } from "./ArticleListReducers";
import { ILoginState } from "../sagas/login/interface";
import { IArticleListState } from "../sagas/articleList/Interface";

export interface IAppRootState {
  loginState: ILoginState;
  articleListState: IArticleListState;
}

const rootReducer = combineReducers({
  loginState: loginReducer,
  articleListState: articleListReducer,
});

export default rootReducer;
