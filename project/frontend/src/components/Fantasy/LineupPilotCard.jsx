import { CircleDollarSign } from "lucide-react";
import { useState } from "react";
import Flag from "react-flagkit";

export function LineupPilotCard({pilot}) {

    const [isBuyButtonText, setIsBuyButtonText] = useState(pilot.price)

    function handleBuyButtonIn() {
        setIsBuyButtonText("Buy Pilot")
    }

    function handleBuyButtonOut() {
        setIsBuyButtonText(pilot.price)
    }

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
            <div onMouseEnter={handleBuyButtonIn} onMouseLeave={handleBuyButtonOut} className="bg-blue-800 hover:bg-green-700 cursor-pointer duration-200 p-2 rounded">
                <span className="flex justify-center gap-2">
                    <CircleDollarSign /> {isBuyButtonText}
                </span>
            </div>
        </div>
    );
}
