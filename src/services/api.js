import axios from "axios";
const API = axios.create({
  baseURL: "https://fakestoreapi.com/",
  timeout: 10000,
});
export const fetchProduct = () => API.get("/products");
export const fetchProductById = (id) => API.get(`/products/${id}`);
export const fetchCategories = () => API.get("/products/categories");

export default API;
