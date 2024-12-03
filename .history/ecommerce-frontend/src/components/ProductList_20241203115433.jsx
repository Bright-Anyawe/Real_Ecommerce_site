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
          {products.map((product => {
               return (
                 <li>
                   <li key={product._id}>
                     <img src={product.imageUrl} alt={product.name} />
                     <h2>{product.name}</h2>
                     <p>{product.description}</p>
                     <p>${product.price}</p>
                   </li>
                 </li>
               );
          })}
        </ul>
      </div>
    </>
  );
};
