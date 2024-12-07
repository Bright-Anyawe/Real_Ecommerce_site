import { useState, useEffect } from "react";
import { useShopProduct } from "../Services/getProductFromFakeApi";
import { useContext } from "react";
import { GeneralContext } from "../Context/ContextProvider";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { fetchedData, setStorageProduct } = useContext(GeneralContext);
  const { items } = useShopProduct();
  setStorageProduct(items)
  console.log(products);

  //  useEffect(() => {
  //    const getProducts = async () => {
  //      const productsData = await fetchedData;
  //      setProducts(productsData);
  //    };
  //    getProducts();
  //  }, []);
  return (
    <>
      <div>
        <h1>This is the product page!</h1>
        <ul>
          {fetchedData.map((product) => {
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
