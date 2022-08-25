import axios from "axios";

const instance = axios.create({
  baseURL: "https://ecommerce-server-express.herokuapp.com/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

instance.interceptors.request.use(
  function (config) {
    // handle config

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

const GET = (url, params) => {
  return instance({
    method: "get",
    url,
    params,
  });
};

const POST = (url, params, data) => {
  return instance({
    method: "post",
    url,
    params,
    data,
  });
};

const PUT = (url, params, data) => {
  return instance({
    method: "put",
    url,
    params,
    data,
  });
};

const PATCH = (url, params, data) => {
  return instance({
    method: "patch",
    url,
    params,
    data,
  });
};

const DELETE = (url, params, data) => {
  return instance({
    method: "delete",
    url,
    params,
    data,
  });
};

const https = {
  instance,
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
};

export default https;
