import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound404";
import AuthForm from "@/pages/AuthForm";
import ProductDetails from "@/pages/ProductDetails";
import Products from "@/pages/Products";
import Account from "@/pages/Account";
import WishList from "@/pages/WishList";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <AuthForm />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  { path: "/wishlist", element: <WishList /> },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
