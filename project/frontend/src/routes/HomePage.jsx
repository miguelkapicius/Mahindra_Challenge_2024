import { Map } from "../components/Home/Map";
import { RaceRanking } from "../components/Home/RaceRanking";
import { SelectedPilotCard } from "../components/Home/SelectedPilotCard";
import { useOutletContext } from "react-router-dom";
import { ThreeScene } from "../components/Home/ThreeScene";

export function HomePage() {
    const data = useOutletContext();


    return (
        <div
            className="flex flex-col lg:flex-row-reverse"
        >
            <div className="rounded flex flex-col gap-2">
                <Map />
                <div className="p-2 lg:p-0 rounded flex flex-col gap-2">
                    <SelectedPilotCard />
                    <SelectedPilotCard />
                </div>
            </div>
            <div className="rounded overflow-hidden h-full">
                <RaceRanking data={data} />
            </div>
        </div>
    );
}
