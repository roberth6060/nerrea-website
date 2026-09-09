import { useRoutes } from "react-router-dom";
import { lazy } from "react";
import Home from "../pages/Home/Home";

const Layout = lazy(() => import("../components/Layout/Layout"));

const Routes = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ];

  return useRoutes(routes);
};

export default Routes;
