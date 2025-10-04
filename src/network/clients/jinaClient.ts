import axios from "axios";
import Config from "react-native-config";

export const jinaClient = axios.create({
  baseURL: Config.JINA_API_HOST_URL,
  timeout: 10000,
});

jinaClient.interceptors.request.use(
  (config) => {
    const token = Config.JINA_API_ACCESS_TOKEN;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
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
