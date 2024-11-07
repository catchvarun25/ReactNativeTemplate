import { action } from "typesafe-actions";
import {
  IArticleListRequest,
  IArticleListResponse,
} from "../sagas/articleList/Interface";

export enum ArticleListActionTypes {
  REQUEST_GET_ARTICLE_LIST = "REQUEST_GET_ARTICLE_LIST",
  SUCCESS_GET_ARTICLE_LIST = "SUCCESS_GET_ARTICLE_LIST",
  ERROR_GET_ARTICLE_LIST = "ERROR_GET_ARTICLE_LIST",
}

export const requestArticleList = (request: IArticleListRequest) =>
  action(ArticleListActionTypes.REQUEST_GET_ARTICLE_LIST, request);
export const successArticleList = (response: IArticleListResponse) =>
  action(ArticleListActionTypes.SUCCESS_GET_ARTICLE_LIST, response);
export const errorArticleList = () =>
  action(ArticleListActionTypes.ERROR_GET_ARTICLE_LIST);
