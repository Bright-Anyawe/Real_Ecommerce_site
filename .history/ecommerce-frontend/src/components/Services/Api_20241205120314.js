

import axios from "axios";

const API_URL = "http://localhost:5000/api";
const { items, error, loading } = useShopProduct();
console.log(items);

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  console.log(response.data); 

  return response.data;
};

const addProduct = async () => {

}

export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });
  return response.data;
};

export const registerUser = async (username, password, email) => {
  const response = await axios.post(`${API_URL}/auth/register`, {
    username,
    password,
    email
  });
  return response.data;
};
