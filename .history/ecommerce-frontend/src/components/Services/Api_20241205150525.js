import { useEffect } from "react";
import { useShopProduct } from "./getProductFromFakeApi";

import axios from "axios";

const API_URL = "http://localhost:5000/api";

// console.log(items);
import React, { useEffect } from "react";
import { useShopProduct } from "./getProductFromFakeApi";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Component to handle adding product
const ProductAdder = () => {
  // Use the custom hook to get the product data
  const storageProduct = useShopProduct();

  // Function to add product
  const addProduct = async () => {
    try {
      const response = await axios.post(`${API_URL}/products`, storageProduct);
      console.log("Product added successfully:", response.data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  useEffect(() => {
    if (storageProduct.length > 0) {
      addProduct();
    }
  }, [storageProduct]); // Re-run the function when storageProduct changes

  return <div>Adding product...</div>;
};

export default ProductAdder;


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
