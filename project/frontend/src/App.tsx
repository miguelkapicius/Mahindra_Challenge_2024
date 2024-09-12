import { NavLink, Outlet } from "react-router-dom";
import { Coins } from "./components/Coins";
import { ModeToggle } from "./components/mode-toggle";
import { Navbar } from "./components/Navbar";
import { Notification } from "./components/Notifications";
import { Button } from "./components/ui/button";
import { Users } from "lucide-react";

export function App() {
    return (
        <>
            <div className="max-w-6xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
                <header className="py-4 sm:py-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
                    <div className="flex flex-1 items-center gap-2 w-full sm:w-auto">
                        <ModeToggle />
                        <Notification />
                        <Button size="icon" variant="outline" className="p-2">
                            <NavLink to="/friends-rivals">
                                <Users size={20} />
                            </NavLink>
                        </Button>
                        <Coins />
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <Navbar />
                    </div>
                </header>
                <main className="mb-6">
                    <Outlet />
                </main>
            </div>
        </>
    );
}
