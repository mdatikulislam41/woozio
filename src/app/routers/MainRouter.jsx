import { createBrowserRouter } from "react-router";
import Home from "../../pages/Home";
import Layout from "../layouts/Layout";
import Notfound from "../../pages/Notfound";
import Cart from "../../pages/Cart";
import Favorite from "../../pages/Favorite";
import SingleProduct from "../../pages/SingleProduct";
import { CartContext } from "../../context/CartContext";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartContext>
        <Layout />
      </CartContext>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "cart", element: <Cart /> },
      { path: "favorite", element: <Favorite /> },
      { path: "/product/:id", element: <SingleProduct /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

export default MainRouter;
