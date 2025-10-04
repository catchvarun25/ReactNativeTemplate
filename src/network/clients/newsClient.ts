import axios from "axios";
import Config from "react-native-config";

export const newsClient = axios.create({
  baseURL: Config.NEWS_API_HOST_URL,
  timeout: 10000,
});

newsClient.interceptors.request.use(
  (config) => {
    const token = Config.NEWS_API_ACCESS_TOKEN;
    if (token) {
      config.headers["X-Api-Key"] = token;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);
