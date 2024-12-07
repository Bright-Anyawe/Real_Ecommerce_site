import { useEffect } from "react";
import { useShopProduct } from "./getProductFromFakeApi";

import axios from "axios";

const API_URL = "http://localhost:5000/api";

const ProductAdder = () => {
  const storageProduct = useShopProduct();
  console.log(storageProduct)

  // Function to add product
  const addProduct = async () => {
const formattedProduct = storageProduct.map((product) =>( {
  name: product.title,
  description: product.description,
  price: product.price,
  imageUrl: product.image,
  category: product.category || "ncategorized",


}))


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

