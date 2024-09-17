import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { Pilots } from "./routes/Pilots.tsx";
import { RecoilRoot } from "recoil";
import { Fallback } from "./components/Fallback/index.tsx";

// Dynamic Imports
const Home = lazy(() => import("./routes/Home.tsx"));
const Fantasy = lazy(() => import("./routes/Fantasy.tsx"));
const Community = lazy(() => import("./routes/Community.tsx"));
const Teams = lazy(() => import("./routes/Teams.tsx"));
const UsersLeaderboard = lazy(() => import("./routes/UsersLeaderboard.tsx"));
const RaceHistory = lazy(() => import("./routes/RaceHistory.tsx"));
const FriendsRivals = lazy(() => import("./routes/FriendsRivals.tsx"));
const TeamStats = lazy(() => import("./routes/TeamStats.tsx"));
const SustainabilityInMotion = lazy(
    () => import("./routes/SustainabilityInMotion.tsx")
);
const Login = lazy(() => import("./routes/Login.tsx"));

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
    {
        path: "/login",
        element: <Login />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RecoilRoot>
            <ThemeProvider>
                <Suspense fallback={<Fallback />}>
                    <RouterProvider router={router} />
                </Suspense>
            </ThemeProvider>
        </RecoilRoot>
    </StrictMode>
);
