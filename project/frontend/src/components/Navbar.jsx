import { AreaChart, Gamepad2, House, Trophy, User } from "lucide-react";

export function Navbar() {
    return (
        <div className="fixed bottom-0 w-full px-6 h-14 bg-zinc-800 border-t border-zinc-700 lg:bg-zinc-950 lg:h-full lg:w-64 lg:border-r lg:border-zinc-800 lg:border-t-0 lg:flex lg:flex-col lg:space-y-16">
            <div className="hidden lg:block">
                <span className="text-3xl flex items-center gap-2"><Trophy /> E-Pit</span>
            </div>
            <div className="flex items-center h-full justify-around gap-6 lg:h-max lg:flex-col lg:items-start">
                <a
                    href="#"
                    className="p-2 size-max flex justify-center hover:text-blue-300 gap-4 lg:w-full lg:justify-start lg:border-l-2 lg:border-blue-600 lg:bg-gradient-to-r from-blue-500/50 to-zinc-950"
                >
                    <House />
                    <span className="hidden lg:block">Home</span>
                </a>
                <a
                    href="#"
                    className="p-2 size-max flex justify-center hover:text-blue-300 gap-4 lg:w-full lg:justify-start"
                >
                    <Gamepad2 />
                    <span className="hidden lg:block">Fantasy</span>
                </a>
                <a
                    href="#"
                    className="p-2 size-max flex justify-center hover:text-blue-300 gap-4 lg:w-full lg:justify-start"
                >
                    <Trophy />
                    <span className="hidden lg:block">Rankings</span>
                </a>
                <a
                    href="#"
                    className="p-2 size-max flex justify-center hover:text-blue-300 gap-4 lg:w-full lg:justify-start"
                >
                    <AreaChart />
                    <span className="hidden lg:block">Statistics</span>
                </a>
                <a
                    href="#"
                    className="p-2 size-max flex justify-center hover:text-blue-300 gap-4 lg:w-full lg:justify-start"
                >
                    <User />
                    <span className="hidden lg:block">Profile</span>
                </a>
            </div>
        </div>
    );
}
