import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const loginUser = async (username, password ) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    username,
    password,
  });
  return response.data;
};

export const registerUser = async (username, password) => {
  const response = await axios.post(`${API_URL}/auth/register`, {
    username,
    password,
  });
  return response.data;
};
