
import { LineupPilotCard } from "./LineupPilotCard";

export function Lineup({data}) {

    console.log(data)

    if (!data || !data.pilots) {
        return <div>Loading or no data available...</div>;
    }

    return (
        <div className="grid grid-cols-2 mx-auto lg:grid-cols-3 lg:col-span-2 gap-2 overflow-y-scroll h-max p-2 bg-zinc-900 rounded shadow-shape">
            {data.pilots.map((pilot) => (
                <LineupPilotCard
                    key={pilot.position}
                    position={pilot.position}
                    image={pilot.image}
                    firstName={pilot.firstName}
                    lastName={pilot.lastName}
                    country={pilot.country}
                    team={pilot.team}
                    price={pilot.price}
                />
            ))}
        </div>
    );
}