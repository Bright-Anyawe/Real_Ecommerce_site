import { useEffect } from "react";
import { useShopProduct } from "./getProductFromFakeApi";

import axios from "axios";

const API_URL = "http://localhost:5000/api";

const ProductAdder = () => {
  const storageProduct = useShopProduct();
  con

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
  }, [storageProduct]); 

  return <div>Adding product...</div>;
};

export default ProductAdder;

