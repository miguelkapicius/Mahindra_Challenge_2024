
import { LineupPilotCard } from "./LineupPilotCard";

export function Lineup({data}) {

    console.log(data)

    if (!data || !data.pilots) {
        return <div>Loading or no data available...</div>;
    }

    return (
        <div className="max-w-2xl grid grid-cols-2 lg:col-span-2 gap-2 overflow-y-auto h-full p-2 bg-zinc-900 rounded shadow-shape">
            {data.pilots.map((pilot) => (
                <LineupPilotCard
                    key={pilot.position}
                    pilot={pilot}
                />
            ))}
        </div>
    );
}