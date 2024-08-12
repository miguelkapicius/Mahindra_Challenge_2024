import { CircleDollarSign } from "lucide-react";
import Flag from "react-flagkit";

export function LineupPilotCard({image, firstName, lastName, country, team, price}) {
    return (
        <div
            className="bg-zinc-950/80 p-2 rounded flex flex-col gap-2 h-max"
        >
            <img className="bg-zinc-800 rounded" src={image} />
            <div>
                <span className="block">
                    {firstName}
                    <span className="font-bold truncate block"> {lastName}</span>
                </span>
            </div>
            <div className="flex gap-2">
                <div className="flex items-center p-2 bg-zinc-800 rounded">
                    <Flag className="shadow-shape" country={country} />
                </div>
                <div className="rounded flex items-center flex-1 bg-zinc-800 p-2">
                    <span className="text-xs text-center flex-1">{team}</span>
                </div>
            </div>
            <div className="bg-blue-800 p-2 rounded">
                <span className="flex justify-center gap-2">
                    <CircleDollarSign /> {price}
                </span>
            </div>
        </div>
    );
}
