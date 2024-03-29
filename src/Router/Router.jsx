// react-router imports
import { createBrowserRouter } from "react-router-dom";

// layout component imports
import RootLayout from "../components/layout/RootLayout/RootLayout";

// page component imports
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import Registration from "../components/pages/Registration/Registration";
import ServiceDetail from "../components/pages/ServiceDetail/ServiceDetail";
import AboutUs from "../components/pages/AboutUs/AboutUs";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";

// route component import
import PrivateRoute from "../components/pages/Route/PrivateRoute/PrivateRoute";
import LiveSupport from "../components/pages/LiveSupport/LiveSupport";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/services/:serviceid",
        element: (
          <PrivateRoute>
            <ServiceDetail />
          </PrivateRoute>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/about-us",
        element: (
          <PrivateRoute>
            <AboutUs />
          </PrivateRoute>
        ),
      },
      {
        path: "/support",
        element: (
          <PrivateRoute>
            <LiveSupport />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
