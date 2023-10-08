// react imports
import React from "react";
import ReactDOM from "react-dom/client";

// react-router imports
import router from "./Router/Router";
import { RouterProvider } from "react-router-dom";

// context provider imports
import AuthProvider from "./contexts/AuthProvider";

// style imports
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
