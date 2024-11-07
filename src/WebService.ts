import axios from "axios";

export enum REST_METHODS {
  GET,
  POST,
  PUT,
}

export enum END_POINT {
  TOP_HEADLINES = "https://newsapi.org/v2/top-headlines",
}

export function callRestAPI(url: string, method: REST_METHODS, payload?: any) {
  switch (method) {
    case REST_METHODS.GET:
      return axios.get(url);
    case REST_METHODS.POST:
      return axios.post(url, payload);
    case REST_METHODS.PUT:
      return axios.put(url, payload);
  }
}
