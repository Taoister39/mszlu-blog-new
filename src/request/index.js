import axios from "axios";

const request = new axios.create({
  baseURL: "http://localhost:8800",
  timeout: 1000,
});

request.interceptors.request.use();

request.interceptors.response.use();

export default request;
