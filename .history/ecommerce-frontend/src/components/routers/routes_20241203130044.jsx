import Login from "./Login";
import SignUp from "./SignUp";
import { ProductList } from "./ProductList";
import App from "../Services/App";



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