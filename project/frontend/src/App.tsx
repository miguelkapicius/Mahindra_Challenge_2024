import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import { Coins } from "./components/Coins";
import { ModeToggle } from "./components/mode-toggle";
import { Navbar } from "./components/Navbar";
import { Notification } from "./components/Notifications";
import { Button } from "./components/ui/button";
import { Users } from "lucide-react";
import { Footer } from "./components/Footer";
import { Suspense, useContext } from "react";
import { Fallback } from "./components/Fallback";
import { AuthContext } from "./context/auth";

export function App() {
    const { signed } = useContext(AuthContext);

    return (
        <>
            {signed ? (
                <div className="max-w-6xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
                    <header className="py-4 sm:py-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
                        <div className="flex flex-1 items-center gap-2 w-full sm:w-auto">
                            <Link to={"/"}>
                                <img
                                    src="/favicon.ico"
                                    alt="e-pit Logo"
                                    className="mr-6 size-10 hidden md:block"
                                />
                            </Link>
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
                <Navigate to={"login"} />
            )}
        </>
    );
}
