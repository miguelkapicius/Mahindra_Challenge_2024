import { useState } from "react";
import { Header } from "../components/Fantasy/Header";
import { PilotCard } from "../components/Fantasy/PilotCard";
import { Lineup } from "../components/Fantasy/Lineup";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

export function FantasyPage() {
    const data = useOutletContext();
    const [userData, setUserData] = useState(null);
    const [isLineupSelected, setIsLineupSelected] = useState(false);


    useEffect(() => {
        fetch('/users.json')
            .then((response) => response.json())
            .then((jsonData) => setUserData(jsonData))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

    function handleLineupSelect() {
        setIsLineupSelected(true);
    }

    function handleYourPilotSelect() {
        setIsLineupSelected(false);
    }

    return (
        <div className="p-2 *:mb-4 mx-auto max-w-5xl">
            <Header />
            <div className="md:hidden space-y-4">
                <div className="rounded bg-zinc-900 flex items-center shadow-shape">
                    <span
                        onClick={handleYourPilotSelect}
                        className={`font-light w-1/2 text-center py-2 rounded-l ${isLineupSelected ? "bg-zinc-900" : "bg-zinc-800"
                            }`}
                    >
                        Your Team
                    </span>
                    <span
                        onClick={handleLineupSelect}
                        className={`font-light w-1/2 text-center py-2 rounded-r ${isLineupSelected ? "bg-zinc-800" : "bg-zinc-900"
                            }`}
                    >
                        Lineup
                    </span>
                </div>
                {isLineupSelected ? <Lineup data={data} /> : (
                    <>
                        {
                            userData.users[0].pilots.map((pilot, index) => (
                                <PilotCard pilot={pilot} key={index} />
                            ))}
                    </>
                )}
            </div>
            <div className="hidden max-h-[80vh] md:flex items-stretch gap-2">
                <div className="max-w-xl flex gap-2">
                    {
                        userData.users[0].pilots.map((pilot, index) => (
                            <PilotCard pilot={pilot} key={index} />
                        ))}
                </div>
                <div className="mx-auto w-full">
                    <Lineup data={data} />
                </div>
            </div>
        </div>
    );
}
