import Login from "./Login";
import SignUp from "./SignUp";
import { ProductList } from "./ProductList";
import App from "../Services/App";
import { HomePage } from "./HomePage";


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

      { path: "productList", element: <ProductList /> },
      { path: "login", element: <Login /> },
      { path: "thisWeek", element: <SignUp /> },
      { path: "completed", element: <Completed /> },
    ],
  },
];