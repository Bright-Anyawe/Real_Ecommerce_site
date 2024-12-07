import { useEffect } from "react";
import { useShopProduct } from "./getProductFromFakeApi";
import { useContext } from "react";
import { GeneralContext } from "../Context/ContextProvider";

import axios from "axios";

export const Api = () => {
  const API_URL = "http://localhost:5000/api";
  const { storageProduct, setFetchedData, setLoginData } = useContext(GeneralContext);

  const addProduct = async () => {
    try {
      const response = await axios.post(`${API_URL}/products`, storageProduct);
      console.log("Product added successfully:", response.data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  addProduct();

  const fetchProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    console.log(response.data);
    setFetchedData(response.data);
    return;
  };
  fetchProducts();

  const loginUser = async (email, password) => {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
        setLoginData(response.data);

    return 
  };
  loginUser();

  const registerUser = async (username, password, email) => {
    const response = await axios.post(`${API_URL}/auth/register`, {
      username,
      password,
      email,
    });
    
        setrData(response.data);

        return; 
  };
  registerUser();
};
