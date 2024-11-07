import { IRequestStatus } from "../common/Interface";

export interface IArticleListRequest {
  page: string;
  pageSize: Number;
  category: ICategoryType;
}

export enum ICategoryType {
  BUSINESS = "business",
  ENTERTAINMENT = "entertainment",
  GENERAL = "general",
  HEALTH = "health",
  SCIENCE = "science",
  SPORTS = "sports",
  TECHNOLOGY = "technology",
}

export interface IArticleListState {
  articles: Array<IArticleItemResponse>;
  status: IRequestStatus;
}

export interface IArticleListResponse {
  articles: Array<IArticleItemResponse>;
}

export interface IArticleItemResponse {
  source?: IArticleSourceState;
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
}

export interface IArticleSourceState {
  id: string;
  name?: string;
}
