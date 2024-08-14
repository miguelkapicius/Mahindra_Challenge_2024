import { Map } from "../components/Home/Map";
import { RaceRanking } from "../components/Home/RaceRanking";
import { SelectedPilotCard } from "../components/Home/SelectedPilotCard";
import { useOutletContext } from "react-router-dom";
import { ThreeScene } from "../components/Home/ThreeScene";


export function HomePage() {
    const data = useOutletContext();

    return (
        <div id="container" className="p-2 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 grid-rows-12 h-screen">
            <div className="bg-zinc-900/40 rounded row-span-4 md:col-span-2 md:row-span-6 lg:order-2 lg:col-span-2 lg:row-span-6">
                <Map />
            </div>
            <div className="bg-zinc-900/40 rounded row-span-2 md:col-span-2 md:row-span-2 lg:order-3 lg:col-span-3 lg:row-span-6">
                <SelectedPilotCard />
            </div>
            <div className="bg-zinc-900/40 rounded row-span-5 md:col-span-2 md:row-span-4 lg:order-1 lg:col-span-2 lg:row-span-12">
                <RaceRanking data={data} />
            </div>
        </div>
    );
}
