import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound404";
import AuthForm from "@/pages/AuthForm";

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
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
