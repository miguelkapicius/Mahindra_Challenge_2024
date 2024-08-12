import { Map } from "../components/Home/Map";
import { SelectedPilotCard } from "../components/Home/SelectedPilotCard";

export function HomePage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-4">
            <Map />
            <SelectedPilotCard />
            <div className="p-2 bg-blue-900 space-y-1">
                <div className="flex items-center justify-between bg-zinc-900 p-2 rounded">
                    <div className="flex items-center gap-2">
                        <img
                            className="rounded-full size-12 bg-zinc-950 pt-1"
                            src="https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/4a390151-89af-4931-9907-bcbaabb5a152.png"
                        />
                        <div className="">
                            <span className="block">Lucas Di Grassi</span>
                            <span className="block text-xs text-zinc-400">
                                ABT CUPRA
                            </span>
                        </div>
                    </div>
                    <div className="rounded p-2 bg-zinc-900 shadow-shape">
                        <span className=""># 10</span>
                    </div>
                </div>

                <div className="flex items-center justify-between bg-zinc-900 p-2 rounded">
                    <div className="flex items-center gap-2">
                        <img
                            className="rounded-full size-12 bg-zinc-950 pt-1"
                            src="https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/4a390151-89af-4931-9907-bcbaabb5a152.png"
                        />
                        <div className="">
                            <span className="block">Lucas Di Grassi</span>
                            <span className="block text-xs text-zinc-400">
                                ABT CUPRA
                            </span>
                        </div>
                    </div>
                    <div className="rounded p-2 bg-zinc-900 shadow-shape">
                        <span className=""># 10</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
