// react-router imports
import { createBrowserRouter } from "react-router-dom";

// layout component imports
import RootLayout from "../components/layout/RootLayout/RootLayout";

// page component imports
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import Registration from "../components/pages/Registration/Registration";
import ServiceDetail from "../components/pages/ServiceDetail/ServiceDetail";

// route component import
import PrivateRoute from "../components/pages/Route/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
    ],
  },
]);

export default router;
