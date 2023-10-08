// react-router imports
import { createBrowserRouter } from "react-router-dom";

// layout component imports
import RootLayout from "../components/layout/RootLayout/RootLayout";

// page component imports
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";

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
    ],
  },
]);

export default router;
