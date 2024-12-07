import { useShopProduct } from "./getProductFromFakeApi";

import axios from "axios";

const API_URL = "http://localhost:5000/api";


export const AddProduct = () => {
  use
  const { items, error, loading } = useShopProduct();
  console.log(items);


  const addProduct = async () => {

    try {
      const response = await axios.post(`${API_URL}/products`, items);
      console.log("Product added successfully:", response.data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
}
addProduct()
}


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
    email
  });
  return response.data;
};