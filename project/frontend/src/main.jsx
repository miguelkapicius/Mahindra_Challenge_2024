import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/",
            element: <
        }
      ]
    },
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
