import axios from "axios";

const mokApi = axios.create({
  baseURL: "https://694eb7bab5bc648a93c122d8.mockapi.io/todo/v1/",
  timeout: 1000,
});

export const getNavItem = () => mokApi.get("/nav");
export const getfooterItem = () => mokApi.get("/footer");
export default mokApi;
