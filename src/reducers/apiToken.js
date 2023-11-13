import axios from "axios";

const api = axios.create({
  baseURL: "https://loofer.bellazza.in/api",
});
const token = localStorage.getItem("token");
api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
api.defaults.headers.common["Accept"] = "application/json";
console.log(token, "token API");

export default api;
