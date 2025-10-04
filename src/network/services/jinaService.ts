import { REST_METHODS } from ".";
import { jinaClient as axiosClient } from "../clients/";

export function jinaService(
  endpoint: string,
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
