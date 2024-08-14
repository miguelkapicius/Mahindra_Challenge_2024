import { Map } from "../components/Home/Map";
import { RaceRanking } from "../components/Home/RaceRanking";
import { SelectedPilotCard } from "../components/Home/SelectedPilotCard";
import { useOutletContext } from "react-router-dom";
import { ThreeScene } from "../components/Home/ThreeScene";

export function HomePage() {
    const data = useOutletContext();

    return (
        <div
            className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-5xl"
        >
            <div className="rounded md:col-span-2 lg:order-2 lg:col-span-2">
                <Map />
            </div>
            <div className="rounded row-span-2 md:col-span-2 lg:order-3 lg:col-span-2">
                <div className="p-2 lg:p-0 rounded flex flex-col gap-2">
                    <SelectedPilotCard />
                    <SelectedPilotCard />
                </div>
            </div>
            <div className="rounded row-span-5 md:col-span-2 lg:order-1 lg:col-span-1">
                <RaceRanking data={data} />
            </div>
            <aside className="hidden md:flex rounded lg:order-4 lg:col-span-1"></aside>
        </div>
    );
}
