// react imports
import React from "react";
import ReactDOM from "react-dom/client";

// react-router imports
import router from "./Router/Router";
import { RouterProvider } from "react-router-dom";

// style imports
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
