import { urls } from "@/lib/constants/urls";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: urls.api,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["Content-Type"] = `application/json`;
    }
    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      //TODO axiosInstance.get("/refresh_token");
    }
    return error;
  }
);

export default axiosInstance;
