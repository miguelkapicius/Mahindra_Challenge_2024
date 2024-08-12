import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export function App() {
    return (
        <div className="lg:flex min-h-screen">
            <Navbar />
            <main className="mb-14 lg:mb-0 lg:p-6 lg:ml-64 flex-1">
                <Outlet />
            </main>
        </div>
    );
}
