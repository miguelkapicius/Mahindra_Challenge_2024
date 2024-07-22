import { useState } from "react";
import { Header } from "../components/Fantasy/Header";
import { PilotCard } from "../components/Fantasy/PilotCard";
import { Lineup } from "../components/Fantasy/Lineup";

export function FantasyPage() {
    const [isLineupSelected, setIsLineupSelected] = useState(false);

    function handleLineupSelect () {
        setIsLineupSelected(true)
    }

    function handleYourPilotSelect() {
        setIsLineupSelected(false)
    }

    return (
        <div className="h-screen">
            <div className="flex flex-col lg:gap-6">
                <div className="p-2 space-y-8">
                    <Header />
                    <div className="rounded bg-zinc-900 flex items-center shadow-shape">
                        <span onClick={handleYourPilotSelect} className={`font-light w-1/2 text-center py-2 rounded-l ${isLineupSelected ? "bg-zinc-900" : "bg-zinc-800"}`}>
                            Your Pilot
                        </span>
                        <span onClick={handleLineupSelect} className={`font-light w-1/2 text-center py-2 rounded-r ${isLineupSelected ? "bg-zinc-800" : "bg-zinc-900"}`}>
                            Lineup
                        </span>
                    </div>
                    {isLineupSelected ? <Lineup /> : <PilotCard />}
                </div>
            </div>
        </div>
    );
}
