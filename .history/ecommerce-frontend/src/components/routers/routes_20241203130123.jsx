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

      { path: "product", element: <Today /> },
      { path: "tomorrow", element: <Tomorrow /> },
      { path: "thisWeek", element: <ThisWeek /> },
      { path: "completed", element: <Completed /> },
    ],
  },
];