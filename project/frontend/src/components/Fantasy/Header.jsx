import { CircleDollarSign, Waypoints } from "lucide-react";


export function Header() {
    return (
        <div className="rounded-lg w-full py-2 flex gap-1 justify-between items-center">
            <span className="text-xs flex-1 truncate">@miguelkapicius</span>
            <span className="flex font-medium bg-zinc-900 px-4 rounded py-1 items-center gap-2 shadow-shape">
                <Waypoints />
                4000
            </span>
            <span className="flex font-medium bg-zinc-900 px-4 rounded py-1 items-center gap-2 shadow-shape">
                <CircleDollarSign />
                1236,00
            </span>
        </div>
    );
}