import { newsService } from "./newsService";
import { jinaService } from "./jinaService";

export { newsService, jinaService };

export enum REST_METHODS {
  GET,
  POST,
  PUT,
}

export enum NEWS_END_POINT {
  TOP_HEADLINES = "/v2/top-headlines",
}
