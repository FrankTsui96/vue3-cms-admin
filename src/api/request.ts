//request.ts
import axios from "axios";

const baseURL = "http://localhost:3001";
const request = axios.create({
  baseURL,
  timeout: 5000 // request timeout
});

// 发起请求之前的拦截器
request.interceptors.request.use(
  (config) => {
    // 如果有token 就携带 如果有token
    const token = window.sessionStorage.getItem("token");
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const res = response.data;

    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return response;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;