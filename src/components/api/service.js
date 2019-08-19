import {Message} from 'element-ui';
import axios from "axios";

let httpApi = axios.create({
  baseURL: "/api",
  timeout: 10000
});
httpApi.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

httpApi.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  Message.error('服务器连接失败，请稍后重试...');
  return Promise.reject(error);
});
export default httpApi;

