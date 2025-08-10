import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound404";
import AuthForm from "@/pages/AuthForm";
import ProductDetails from "@/pages/ProductDetails";
import Products from "@/pages/Products";

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
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
