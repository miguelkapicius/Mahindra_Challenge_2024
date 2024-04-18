import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Configurando o React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Rankings from "./routes/Rankings.jsx";
import Races from "./routes/Races.jsx";
import Statistics from "./routes/Statistics.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/races",
                element: <Races />,
            },
            {
                path: "/statistics",
                element: <Statistics />,
            },
            {
                path: "/rankings",
                element: <Rankings />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
