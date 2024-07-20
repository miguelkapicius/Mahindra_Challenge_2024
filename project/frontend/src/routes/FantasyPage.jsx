import { CircleDollarSign, Waypoints } from "lucide-react";
import Flag from "react-flagkit";

export function FantasyPage() {
    return (
        <div className="h-screen">
            <div className="flex flex-col gap-6">
                <div className=" bg-zinc-950 p-6 space-y-8">
                    <div className="rounded-lg w-full p-2 flex justify-between items-center">
                        <span className="flex font-medium bg-zinc-900 px-4 py-1 rounded-lg items-center gap-2 shadow-shape">
                            <Waypoints />
                            305
                        </span>
                        <span className="flex font-medium bg-zinc-900 px-4 py-1 rounded-lg items-center gap-2 shadow-shape">
                            <CircleDollarSign />
                            305
                        </span>
                    </div>
                    <div className="rounded-full bg-zinc-900 flex items-center shadow-shape">
                        <span className="font-light w-1/2 text-center bg-zinc-800 py-2 rounded-l-full">
                            Your Pilot
                        </span>
                        <span className="font-light w-1/2 text-center py-2 rounded-r-full">
                            Lineup
                        </span>
                    </div>
                    <div className="bg-zinc-900 h-full rounded-lg p-4 flex flex-col gap-4">
                        <img
                            src="https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/4a390151-89af-4931-9907-bcbaabb5a152.png"
                            className="rounded-lg bg-zinc-800"
                        />
                        <div className="flex justify-between items-center">
                            <span>
                                Lucas
                                <span className="font-bold text-2xl block">
                                    Di Grassi
                                </span>
                            </span>
                            <span className="font-medium bg-zinc-900 px-4 py-1 rounded-lg shadow-shape">312 pts</span>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-1/2 rounded-lg bg-zinc-800 flex justify-center items-center gap-2 py-2"><Flag country="BR"/>Brazil</div>
                            <div className="w-1/2 rounded-lg bg-zinc-800 flex justify-center items-center gap-2 py-2"><img src="https://static-files.formula-e.pulselive.com/badges/c57e46c4-8163-44f6-9c0d-b74579d51000.svg" className="rounded-lg" /></div>
                        </div>
                        <div className="w-full rounded-lg bg-gradient-to-br from-blue-500 to-blue-900 py-4 text-center shadow-shape">
                            <span>$ 150,00</span>
                        </div>
                    </div>
                </div>
                <div className=" bg-zinc-800"></div>
            </div>
        </div>
    );
}
