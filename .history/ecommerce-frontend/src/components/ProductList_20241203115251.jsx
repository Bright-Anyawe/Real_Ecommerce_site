import { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div>
        <h1>Products</h1>
        <ul>
          {}
          <li></li>
        </ul>
      </div>
    </>
  );
};
