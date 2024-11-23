import { all } from "redux-saga/effects";
import loginSaga from "./login/LoginSaga";
import articleListSaga from "./articleList/ArticleListSaga";

export default function* rootSaga() {
  yield all([...loginSaga, ...articleListSaga]);
}
