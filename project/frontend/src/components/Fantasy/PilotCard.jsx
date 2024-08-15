import { CircleDollarSign } from "lucide-react";
import Flag from "react-flagkit";

export function PilotCard({pilot}) {
    return (
        <div className="bg-zinc-900 h-full rounded-lg p-2 flex flex-col gap-4 shadow-shape">
            <img
                draggable={false}
                src={pilot.image}
                className="rounded-lg bg-zinc-800"
            />
            <div className="flex justify-between items-center">
                <span>
                    {pilot.firstName}
                    <span className="font-bold text-2xl block">{pilot.lastName}</span>
                </span>
                <span className="font-medium bg-zinc-950 px-4 py-1 rounded-lg shadow-shape">
                    {pilot.points}
                </span>
            </div>
            <div className="flex gap-2">
                <div className="w-1/2 rounded-lg bg-zinc-800 flex justify-center items-center gap-2 py-2">
                    <Flag className="rounded" country={pilot.country} />
                    Brazil
                </div>
                <div className="w-1/2 rounded-lg bg-zinc-800 flex justify-center items-center gap-2 py-2">
                    <img
                        src={pilot.image}
                        className="rounded-lg"
                    />
                </div>
            </div>
            <div className="w-full rounded-lg bg-zinc-950 py-4 text-center shadow-shape">
                <span className="flex justify-center gap-2"><CircleDollarSign />{pilot.price}</span>
            </div>
            <div className="flex flex-col gap-1">
                <div className="bg-zinc-800 flex justify-between px-4 py-2 rounded text-sm">
                    <span>Fantasy Position</span>
                    <span>{pilot.position}</span>
                </div>
                <div className="bg-zinc-800 flex justify-between px-4 py-2 rounded text-sm">
                    <span>Fantasy Points</span>
                    <span>{pilot.points}</span>
                </div>
                <div className="bg-zinc-800 flex justify-between px-4 py-2 rounded text-sm">
                    <span>Wins</span>
                    <span>{pilot.wins}</span>
                </div>
            </div>
        </div>
    );
}
