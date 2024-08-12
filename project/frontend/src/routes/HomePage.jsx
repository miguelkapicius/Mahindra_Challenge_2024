import { Map } from "../components/Home/Map";
import { SelectedPilotCard } from "../components/Home/SelectedPilotCard";

export function HomePage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-4">
            <Map />
            <div className="">
                <SelectedPilotCard />
            </div>
        </div>
    );
}
