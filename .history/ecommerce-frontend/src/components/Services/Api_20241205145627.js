import { useEffect } from "react";
import { shopProduct } from "./getProductFromFakeApi";

import axios from "axios";

const API_URL = "http://localhost:5000/api";

// console.log(items);
const storageProduct = shopProduct();

const addProduct = async () => {
  try {
      const response = await axios.post(`${API_URL}/products`, storageProduct);
      console.log("Product added successfully:", response.data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  addProduct();

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  console.log(response.data);

  return response.data;
};

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
    email,
  });
  return response.data;
};