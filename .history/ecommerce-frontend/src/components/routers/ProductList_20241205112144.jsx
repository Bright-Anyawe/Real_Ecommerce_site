import { useState, useEffect } from "react";
import { fetchProducts } from "../Services/Api";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

   useEffect(() => {
     const getProducts = async () => {
       const productsData = await fetchProducts();
       setProducts(productsData);
     };
     getProducts();
   }, []);
  return (
    <>
      <div>
        <h1>The is </h1>
        <ul>
          {products.map((product) => {
            return (
              <li key={product._id}>
                <img src={product.imageUrl} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
