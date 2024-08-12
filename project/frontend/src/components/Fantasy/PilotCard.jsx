import { CircleDollarSign } from "lucide-react";
import Flag from "react-flagkit";

export function PilotCard() {
    return (
        <div className="bg-zinc-900 h-max rounded-lg p-2 flex flex-col gap-4 shadow-shape">
            <img
                draggable={false}
                src="https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/4a390151-89af-4931-9907-bcbaabb5a152.png"
                className="rounded-lg bg-zinc-800"
            />
            <div className="flex justify-between items-center">
                <span>
                    Lucas
                    <span className="font-bold text-2xl block">Di Grassi</span>
                </span>
                <span className="font-medium bg-zinc-950 px-4 py-1 rounded-lg shadow-shape">
                    312 pts
                </span>
            </div>
            <div className="flex gap-2">
                <div className="w-1/2 rounded-lg bg-zinc-800 flex justify-center items-center gap-2 py-2">
                    <Flag className="rounded" country="BR" />
                    Brazil
                </div>
                <div className="w-1/2 rounded-lg bg-zinc-800 flex justify-center items-center gap-2 py-2">
                    <img
                        src="https://static-files.formula-e.pulselive.com/badges/c57e46c4-8163-44f6-9c0d-b74579d51000.svg"
                        className="rounded-lg"
                    />
                </div>
            </div>
            <div className="w-full rounded-lg bg-zinc-950 py-4 text-center shadow-shape">
                <span className="flex justify-center gap-2"><CircleDollarSign /> 150,00</span>
            </div>
            <div className="flex flex-col gap-1">
                <div className="bg-zinc-800 flex justify-between px-4 py-2 rounded text-sm">
                    <span>Fantasy Position</span>
                    <span>2nd</span>
                </div>
                <div className="bg-zinc-800 flex justify-between px-4 py-2 rounded text-sm">
                    <span>Fantasy Points</span>
                    <span>356</span>
                </div>
                <div className="bg-zinc-800 flex justify-between px-4 py-2 rounded text-sm">
                    <span>Wins</span>
                    <span>2</span>
                </div>
            </div>
        </div>
    );
}
