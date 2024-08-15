import { AreaChart, Gamepad2, House, Trophy, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
    const location = useLocation();
    const activeCSS = "rounded bg-zinc-800 shadow-shape text-zinc-100 transition-all duration-300";

    return (
        <aside className="fixed bottom-0 flex items-center shadow-shape lg:static lg:shadow-none text-zinc-400 z-50 w-full px-6 h-14 bg-zinc-800 lg:w-max lg:h-screen lg:bg-transparent">
            <div className="lg:flex lg:flex-col lg:gap-2 lg:h-full lg:shadow-shape lg:p-6 lg:rounded lg:bg-zinc-900">
                <div className="hidden lg:block">
                </div>
                <nav className="flex items-center h-full justify-around gap-6 lg:h-max lg:flex-col lg:items-start">
                    <Link
                        to={"/"}
                        draggable="false"
                        className={`p-2 size-max flex justify-center gap-4 lg:w-full lg:justify-start ${
                            location.pathname === "/" ? `${activeCSS}` : ""
                        }`}
                    >
                        <House />
                        <span className="hidden lg:block">Home</span>
                    </Link>
                    <Link
                        to={"/fantasy"}
                        draggable="false"
                        className={`p-2 size-max flex justify-center gap-4 lg:w-full lg:justify-start ${
                            location.pathname === "/fantasy"
                                ? `${activeCSS}`
                                : ""
                        }`}
                    >
                        <Gamepad2 />
                        <span className="hidden lg:block">Fantasy</span>
                    </Link>
                    <Link
                        to={"/rankings"}
                        draggable="false"
                        className={`p-2 size-max flex justify-center gap-4 lg:w-full lg:justify-start ${
                            location.pathname === "/rankings"
                                ? `${activeCSS}`
                                : ""
                        }`}
                    >
                        <Trophy />
                        <span className="hidden lg:block">Leaderboard</span>
                    </Link>
                    <Link
                        to={"/statistics"}
                        draggable="false"
                        className={`p-2 size-max flex justify-center gap-4 lg:w-full lg:justify-start ${
                            location.pathname === "/statistics"
                                ? `${activeCSS}`
                                : ""
                        }`}
                    >
                        <AreaChart />
                        <span className="hidden lg:block">Statistics</span>
                    </Link>
                    <Link
                        to={"/profile"}
                        draggable="false"
                        className={`p-2 size-max flex justify-center gap-4 lg:w-full lg:justify-start ${
                            location.pathname === "/profile"
                                ? `${activeCSS}`
                                : ""
                        }`}
                    >
                        <User />
                        <span className="hidden lg:block">Profile</span>
                    </Link>
                </nav>
            </div>
        </aside>
    );
}
