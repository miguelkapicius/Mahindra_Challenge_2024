import { CircleDollarSign } from "lucide-react";
import Flag from "react-flagkit";

export function LineupPilotCard({pilot}) {
    return (
        <div
            className="bg-zinc-950/80 p-2 rounded flex justify-between flex-col gap-2 relative"
        >
            <img className="bg-zinc-800 w-full h-auto rounded object-cover" src={pilot.image} />
            <span className="absolute top-0 left-0 p-2 bg-blue-600 rounded-l text-xs">{pilot.position}</span>
            <div>
                <span className="block">
                    {pilot.firstName}
                    <span className="font-bold truncate block"> {pilot.lastName}</span>
                </span>
            </div>
            <div className="flex gap-2">
                <div className="flex items-center p-2 bg-zinc-800 rounded">
                    <Flag className="shadow-shape" country={pilot.country} />
                </div>
                <div className="rounded flex items-center flex-1 bg-zinc-800 p-2">
                    <span className="text-xs text-center flex-1">{pilot.team}</span>
                </div>
            </div>
            <div className="bg-blue-800 p-2 rounded">
                <span className="flex justify-center gap-2">
                    <CircleDollarSign /> {pilot.price}
                </span>
            </div>
        </div>
    );
}
