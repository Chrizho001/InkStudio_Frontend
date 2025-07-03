import axios from "axios";

// Base API instance
const api = axios.create({
  baseURL: "https://tattooapp.onrender.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Refresh token logic
const refreshToken = async () => {
  try {
    const response = await axios.post(
      "https://tattooapp.onrender.com/auth/jwt/refresh/",
      {
        refresh: localStorage.getItem("refresh_token"),
      }
    );
    const newAccessToken = response.data.access;
    localStorage.setItem("access_token", newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error("Token refresh failed:", error);

    // Clear tokens
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    // Optional toast notification (if you use react-toastify)
    import("react-toastify").then(({ toast }) => {
      toast.error("Session expired. Please log in again.");
    });

    // Redirect to login
    window.location.href = "/auth/login";

    return null;
  }
};

// Request interceptor: always attach the access token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `JWT ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: handle expired access token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Avoid infinite loop
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newAccessToken = await refreshToken();
      if (newAccessToken) {
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest); // Retry with new token
      }
    }

    return Promise.reject(error);
  }
);

export default api;
