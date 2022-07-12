import axios from "axios";

export const api = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    "Authorization": import.meta.env.VITE_API_AUTH,
  },
});