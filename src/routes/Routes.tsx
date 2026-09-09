import { useRoutes } from "react-router-dom";
import { lazy } from "react";
import Home from "../pages/Home/Home";
import Workforce from "../pages/Workforce/Workforce";
import AdministrativeHelp from "../pages/AdministrativeHelp/AdministrativeHelp";
import DigitalMarketing from "../pages/DigitalMarketing/DigitalMarketing";
import WhyNerrea from "../pages/WhyNerrea/WhyNerrea";
import Contact from "../pages/Contact/Contact";

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
        {
          path: "administrative-help",
          element: <AdministrativeHelp />,
        },
        {
          path: "workforce",
          element: <Workforce />,
        },
        {
          path: "digital-marketing",
          element: <DigitalMarketing />,
        },
        {
          path: "about",
          element: <WhyNerrea />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ];

  return useRoutes(routes);
};

export default Routes;
