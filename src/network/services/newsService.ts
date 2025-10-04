import { REST_METHODS } from ".";
import { newsClient as axiosClient } from "../clients/";
import { NEWS_END_POINT } from "./";

export function newsService(
  endpoint: NEWS_END_POINT,
  method: REST_METHODS,
  payload?: any
) {
  switch (method) {
    case REST_METHODS.GET:
      return axiosClient.get(endpoint, { params: payload });
    case REST_METHODS.POST:
      return axiosClient.post(endpoint, payload);
    case REST_METHODS.PUT:
      return axiosClient.put(endpoint, payload);
  }
}
