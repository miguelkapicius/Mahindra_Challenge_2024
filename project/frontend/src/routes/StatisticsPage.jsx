import { StatisticsTeam } from "../components/Statistics/StatisticsTeam";
import { useOutletContext } from "react-router-dom";

export function StatisticsPage() {
    const data = useOutletContext();
    return (
        <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-2 p-2 lg:p-0">
                {data.teams.map((team) => (
                    <StatisticsTeam key={team.name}
                        team={team}
                    />
                ))}
            </div>
        </div>
    );
}
