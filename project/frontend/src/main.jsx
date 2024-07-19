import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ErrorPage } from "./routes/ErrorPage";
import { HomePage } from "./routes/HomePage";
import { StatisticsPage } from "./routes/StatisticsPage";
import { FantasyPage } from "./routes/FantasyPage";
import { RankingsPage } from "./routes/RankingsPage";
import { ProfilePage } from "./routes/ProfilePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
              path: "/statistics",
              element: <StatisticsPage />
            },
            {
              path: "/fantasy",
              element: <FantasyPage />
            },
            {
              path: "/rankings",
              element: <RankingsPage />
            },
            {
              path: "/profile",
              element: <ProfilePage />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
