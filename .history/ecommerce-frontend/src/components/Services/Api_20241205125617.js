import { useEffect } from "react";
import { useShopProduct } from "./getProductFromFakeApi";
import { useContext } from "react";
import { GeneralContext } from "../Context/ContextProvider";

import axios from "axios";
const { items } = useShopProduct();

export const Api = () => {
  const [fetchedData, setFetchedData] = useState();
  

  const API_URL = "http://localhost:5000/api";
  const { storageProduct } = useContext(GeneralContext);

  const addProduct = async () => {
    try {
      const response = await axios.post(`${API_URL}/products`, items);
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
  fetchProducts()

   const loginUser = async (email, password) => {
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
};
