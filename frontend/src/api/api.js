import axios from "axios";

const api = axios.create({
  baseURL: "https://hrms-backend-f6f5.onrender.com/",
});

export default api;
