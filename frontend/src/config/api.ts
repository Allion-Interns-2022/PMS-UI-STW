import axios, { AxiosHeaders } from "axios";

const instance = axios.create({
  baseURL: "https://localhost:7197/api/",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("user");
    (config.headers as AxiosHeaders).set("Authorization",`Bearer ${token}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  function (error) {
    throw error;
  }
);

export default instance;

// export {}
