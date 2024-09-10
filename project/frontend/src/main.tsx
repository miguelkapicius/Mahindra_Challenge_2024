import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { Home } from "./routes/Home.tsx";
import { Fantasy } from "./routes/Fantasy.tsx";
import { Community } from "./routes/Community.tsx";
import { Teams } from "./routes/Teams.tsx";
import { Pilots } from "./routes/Pilots.tsx";
import { UsersLeaderboard } from "./routes/UsersLeaderboard.tsx";
import { RaceHistory } from "./routes/RaceHistory.tsx";
import { SustainabilityInMotion } from "./routes/SustainabilityInMotion.tsx";
import { FriendsRivals } from "./routes/FriendsRivals.tsx";
import { TeamStats } from "./routes/TeamStats.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/fantasy",
                element: <Fantasy />,
            },
            {
                path: "/community",
                element: <Community />,
            },
            {
                path: "/teams",
                element: <Teams />,
            },
            {
                path: "/teams/:team",
                element: <TeamStats />,
            },
            {
                path: "/pilots",
                element: <Pilots />,
            },
            {
                path: "/users-leaderboard",
                element: <UsersLeaderboard />,
            },
            {
                path: "/race-history",
                element: <RaceHistory />,
            },
            {
                path: "/sustainability-in-motion",
                element: <SustainabilityInMotion />,
            },
            {
                path: "/friends-rivals",
                element: <FriendsRivals />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>
);
