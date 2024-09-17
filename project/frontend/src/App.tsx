import { Navigate, NavLink, Outlet } from "react-router-dom";
import { Coins } from "./components/Coins";
import { ModeToggle } from "./components/mode-toggle";
import { Navbar } from "./components/Navbar";
import { Notification } from "./components/Notifications";
import { Button } from "./components/ui/button";
import { Users } from "lucide-react";
import { Footer } from "./components/Footer";
import { useAuth } from "./hooks/useAuth";
import { Suspense } from "react";
import { Fallback } from "./components/Fallback";

export function App() {
    const { auth } = useAuth();

    return (
        <>
            {auth.isAuthenticated ? (
                <div className="max-w-6xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
                    <header className="py-4 sm:py-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
                        <div className="flex flex-1 items-center gap-2 w-full sm:w-auto">
                            <ModeToggle />
                            <Notification />
                            <NavLink to="/friends-rivals">
                                <Button
                                    size="icon"
                                    variant="outline"
                                    className="p-2"
                                >
                                    <Users size={20} />
                                </Button>
                            </NavLink>
                            <Coins />
                        </div>
                        <div className="flex items-center gap-2 w-full sm:w-auto">
                            <Navbar />
                        </div>
                    </header>
                    <main className="mb-6 min-h-screen">
                        <Suspense fallback={<Fallback />}>
                            <Outlet />
                        </Suspense>
                    </main>
                    <Footer />
                </div>
            ) : (
                <Navigate to="/login" />
            )}
        </>
    );
}
