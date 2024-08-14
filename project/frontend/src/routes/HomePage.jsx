import { Map } from "../components/Home/Map";
import { RaceRanking } from "../components/Home/RaceRanking";
import { SelectedPilotCard } from "../components/Home/SelectedPilotCard";
import { useOutletContext } from "react-router-dom";
import { ThreeScene } from "../components/Home/ThreeScene";

export function HomePage() {
    const data = useOutletContext();

    return (
        <div
            id="container"
            className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-12 h-screen"
        >
            <div className="rounded row-span-4 md:col-span-2 md:row-span-6 lg:order-2 lg:col-span-2 lg:row-span-6">
                <Map />
            </div>
            <div className="rounded row-span-2 md:col-span-2 md:row-span-2 lg:order-3 lg:col-span-2 lg:row-span-6">
                <div className="p-2 lg:p-0 rounded size-full flex flex-col gap-2">
                    <SelectedPilotCard />
                </div>
            </div>
            <div className="rounded row-span-5 md:col-span-2 md:row-span-4 lg:order-1 lg:col-span-1 lg:row-span-12">
                <RaceRanking data={data} />
            </div>
            <aside className="rounded row-span-5 md:col-span-2 md:row-span-4 lg:order-4 lg:col-span-1 lg:row-span-12"></aside>
        </div>
    );
}
