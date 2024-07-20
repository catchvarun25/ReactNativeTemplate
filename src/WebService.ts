import axios from 'axios';

export enum REST_METHODS {
  GET,
  POST,
  PUT,
}

export enum END_POINT {
  AUTH_LOGIN = 'http://localhost:3002/Login',
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
