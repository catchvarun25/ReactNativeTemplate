import { createAction } from "@reduxjs/toolkit";
import {
  IArticleListRequest,
  IArticleListResponse,
} from "../sagas/articleList/Interface";

export const getArticleList = createAction<IArticleListRequest>("REQUEST_GET_ARTICLE_LIST")
export const successArticleList = createAction<IArticleListResponse>("SUCCESS_GET_ARTICLE_LIST")
export const errorArticleList = createAction("ERROR_GET_ARTICLE_LIST")

