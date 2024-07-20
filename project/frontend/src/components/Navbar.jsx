import { AreaChart, Gamepad2, House, Trophy, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
    const location = useLocation();
    const activeCSS = "lg:border-l-2 lg:border-blue-600 lg:bg-gradient-to-r from-blue-500/50 to-zinc-950"

    return (
        <div className="fixed bottom-0 shadow-shape w-full px-6 h-14 bg-zinc-800 border-t border-zinc-700 lg:bg-zinc-950 lg:h-full lg:w-64 lg:border-r lg:border-zinc-800 lg:border-t-0 lg:flex lg:flex-col lg:space-y-16">
            <div className="hidden lg:block">
                <span className="text-3xl flex items-center gap-2">
                    <Trophy /> E-Pit
                </span>
            </div>
            <div className="flex items-center h-full justify-around gap-6 lg:h-max lg:flex-col lg:items-start">
                <Link
                    to={"/"}
                    className={`p-2 size-max flex justify-center gap-4 lg:w-full lg:justify-start ${
                        location.pathname === "/"
                            ? `${activeCSS}`
                            : ""
                    }`}
                >
                    <House />
                    <span className="hidden lg:block">Home</span>
                </Link>
                <Link
                    to={"/fantasy"}
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
                    className={`p-2 size-max flex justify-center gap-4 lg:w-full lg:justify-start ${
                        location.pathname === "/rankings"
                            ? `${activeCSS}`
                            : ""
                    }`}
                >
                    <Trophy />
                    <span className="hidden lg:block">Rankings</span>
                </Link>
                <Link
                    to={"/statistics"}
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
                    className={`p-2 size-max flex justify-center gap-4 lg:w-full lg:justify-start ${
                        location.pathname === "/profile"
                            ? `${activeCSS}`
                            : ""
                    }`}
                >
                    <User />
                    <span className="hidden lg:block">Profile</span>
                </Link>
            </div>
        </div>
    );
}
