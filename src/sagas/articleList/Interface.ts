import { ERequestStatus } from "../../utility/CommonInterface";

export const API_PAGES_SIZE = 15;

//TODO: Update supported countries
export interface IArticleListRequest {
  page: number;
  category: ENewsCategoryType;
  country: string;
}

export enum ENewsCategoryType {
  GENERAL = "general",
  BUSINESS = "business",
  ENTERTAINMENT = "entertainment",
  SPORTS = "sports",
  HEALTH = "health",
  SCIENCE = "science",
  TECHNOLOGY = "technology",
}

export interface IArticleListState {
  articles: Record<ENewsCategoryType, Array<IArticleItemResponse>>;
  status: ERequestStatus;
  message?: string;
  page: number;
  shouldLoadMore: boolean;
}

export interface IArticleListResponse {
  articles: Array<IArticleItemResponse>;
  category: ENewsCategoryType;
  status: string;
  totalResults: number;
}

export interface IArticleItemResponse {
  source?: IArticleSourceState;
  author?: string;
  title: string;
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
