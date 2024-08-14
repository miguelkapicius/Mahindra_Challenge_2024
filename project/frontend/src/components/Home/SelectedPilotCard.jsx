import { BatteryFull, Flag, Gauge } from "lucide-react";

export function SelectedPilotCard() {
    return (
        <div className="flex p-4 bg-zinc-900 h-max rounded flex-col gap-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img
                        className="rounded-full size-12 bg-zinc-500 pt-1"
                        src="https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/4a390151-89af-4931-9907-bcbaabb5a152.png"
                    />
                    <div className="">
                        <span className="block">Lucas Di Grassi</span>
                        <span className="block text-xs text-zinc-400">
                            ABT CUPRA
                        </span>
                    </div>
                </div>
                <div className="rounded p-2 w-10 text-center bg-zinc-900 shadow-shape">
                    <span className="">10</span>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-4 justify-around items-center py-1">
                    <div className="flex items-center gap-2 shadow-shape p-2 rounded text-green-500">
                        <BatteryFull size={24} />
                        <span className="text-xs">98%</span>
                    </div>
                    <div className="flex items-center gap-2 shadow-shape p-2 rounded">
                        <Gauge size={24} />
                        <span className="text-xs">245 km/h</span>
                    </div>
                    <div className="flex items-center gap-2 shadow-shape p-2 rounded">
                        <Flag size={24} />
                        <span className="text-xs">80%</span>
                    </div>
                </div>
                <div>
                    <span className="font-medium bg-zinc-900 p-2 rounded shadow-shape">
                        312 pts
                    </span>
                </div>
            </div>
        </div>
    );
}
