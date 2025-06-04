import axios from "axios";

const instance = axios.create();
instance.defaults.timeout = 60000;

// instance.defaults.baseURL = "http://localhost:8080/api/v1";
instance.defaults.baseURL = "https://9amsolution-task-backend.vercel.app/api/v1";

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
    config.headers.Authorization = `Bearer ${token}`;

    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    const responseObject = {
      data: response?.data,
    };
    return responseObject;
  },
  function (error) {
    const responseObject = {
      error: {
        statusCode: error?.response?.data?.statusCode || 500,
        message: error?.response?.data?.message || "Something went wrong",
        errorMessages: error?.response?.data?.message,
      },
    };
    return responseObject;
  }
);

export { instance };
