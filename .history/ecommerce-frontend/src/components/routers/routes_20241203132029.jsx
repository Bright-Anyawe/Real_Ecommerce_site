import Login from "./Login";
import SignUp from "./SignUp";
import { ProductList } from "./ProductList";
import App from "../Services/App";
import { HomePage } from "./HomePage";
import { Cart } from "./Cart";


const routes = [
  {
    path: "/",
    element: <App />,
    children: [
         {
           index: true,
           element: <HomePage />,
         },

      { path: "productList", element: <ProductList /> },
      { path: "login", element: <Login /> },
      { path: "signUp", element: <SignUp /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;