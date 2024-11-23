import { IRequestStatus } from "../common/Interface";

//TODO: Update supported countries
export interface IArticleListRequest {
  page: number;
  pageSize: number;
  category: ICategoryType;
  country: string;
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
  id?: string;
  name?: string;
}
