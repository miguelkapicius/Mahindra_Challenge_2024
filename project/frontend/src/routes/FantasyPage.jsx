import { useState } from "react";
import { Header } from "../components/Fantasy/Header";
import { PilotCard } from "../components/Fantasy/PilotCard";
import { Lineup } from "../components/Fantasy/Lineup";
import { useOutletContext } from "react-router-dom";

export function FantasyPage() {
    const data = useOutletContext();
    const [isLineupSelected, setIsLineupSelected] = useState(false);

    function handleLineupSelect() {
        setIsLineupSelected(true);
    }

    function handleYourPilotSelect() {
        setIsLineupSelected(false);
    }

    return (
        <div className="p-2 *:mb-4">
            <Header />
            <div className="md:hidden space-y-4">
                <div className="rounded bg-zinc-900 flex items-center shadow-shape">
                    <span
                        onClick={handleYourPilotSelect}
                        className={`font-light w-1/2 text-center py-2 rounded-l ${
                            isLineupSelected ? "bg-zinc-900" : "bg-zinc-800"
                        }`}
                    >
                        Your Pilot
                    </span>
                    <span
                        onClick={handleLineupSelect}
                        className={`font-light w-1/2 text-center py-2 rounded-r ${
                            isLineupSelected ? "bg-zinc-800" : "bg-zinc-900"
                        }`}
                    >
                        Lineup
                    </span>
                </div>
                {isLineupSelected ? <Lineup data={data} /> : <PilotCard />}
            </div>
            <div className="hidden md:flex gap-2">
                <div className="max-w-xl">
                    <PilotCard />
                </div>
                <div className="mx-auto w-full">
                    <Lineup data={data} />
                </div>
            </div>
        </div>
    );
}
