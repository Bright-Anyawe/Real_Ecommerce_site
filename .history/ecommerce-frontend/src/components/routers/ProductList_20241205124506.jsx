import { useState, useEffect } from "react";
import { fetchProducts } from "../Services/Api";
import { useShopProduct } from "../Services/getProductFromFakeApi";
import { useContext } from "react";
import { GeneralContext } from "../Context/ContextProvider";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  
  const { items } = useShopProduct();
  console.log(items);

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
        <h1>This is the product page!</h1>
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
