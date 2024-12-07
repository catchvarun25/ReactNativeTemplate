import axios from "axios";
import Config from "react-native-config";

export enum REST_METHODS {
  GET,
  POST,
  PUT,
}

export enum END_POINT {
  TOP_HEADLINES = "/v2/top-headlines",
}

const articleAxios = axios.create({
  baseURL: END_POINT.TOP_HEADLINES,
  timeout: 10000,
});

articleAxios.interceptors.request.use(
  (config) => {
    const token = Config.ACCESS_TOKEN;
    if (token) {
      config.headers["X-Api-Key"] = token;
    }
    console.log("Request Config:", config);
    return config;
  },
  (error) => {
    // Handle request errors
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

export function callRestAPI(
  endpoint: string,
  method: REST_METHODS,
  payload?: any
) {
  const url = Config.API_HOST_URL + endpoint;
  switch (method) {
    case REST_METHODS.GET:
      return articleAxios.get(url, { params: payload });
    case REST_METHODS.POST:
      return articleAxios.post(url, payload);
    case REST_METHODS.PUT:
      return articleAxios.put(url, payload);
  }
}
