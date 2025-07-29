import { ERequestStatus } from "../../utility/CommonInterface";

export const API_PAGES_SIZE = 15;

//TODO: Update supported countries
export interface IArticleListRequest {
  page: number;
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
  status: ERequestStatus;
  page: number;
  shouldLoadMore: boolean;
}

export interface IArticleListResponse {
  articles: Array<IArticleItemResponse>;
  status:string;
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
