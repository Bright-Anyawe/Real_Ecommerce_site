import Login from "./Login";
import SignUp from "./SignUp";
import { ProductList } from "./ProductList";
import App from "../Services/App";
import { Children } from "react";



const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "homepage",
        element: <HomePage />,
      },
    ],
  },
];