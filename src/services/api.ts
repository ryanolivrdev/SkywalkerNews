import axios from "axios";

export const api = axios.create({
  baseURL: "dffddhttps://bing-news-search1.p.rapidapi.com/news/search",
  headers: {
    "X-BingApis-SDK": "true",
    "Accept-Language": "pt",
    "X-RapidAPI-Key": import.meta.env.VITE_API_AUTH,
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
});
