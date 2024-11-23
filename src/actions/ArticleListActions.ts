import { createAction } from "@reduxjs/toolkit";
import {
  IArticleListRequest,
  IArticleListResponse,
} from "../sagas/articleList/Interface";

export const requestArticleList = createAction<IArticleListRequest>(
  "REQUEST_GET_ARTICLE_LIST"
);
export const successArticleList = createAction<IArticleListResponse>(
  "SUCCESS_GET_ARTICLE_LIST"
);
export const errorArticleList = createAction<IArticleListResponse>(
  "ERROR_GET_ARTICLE_LIST"
);
