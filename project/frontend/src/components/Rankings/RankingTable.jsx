import { Waypoints } from "lucide-react";

export function RankingTable() {
    const ranking = [
        {
            username: "miguelkapicius",
            points: 3500,
            team: "Electra",
            avatar: "https://placehold.co/400/png",
        },
        {
            username: "thiagostoso",
            points: 3200,
            team: "Delicios",
            avatar: "https://placehold.co/400/png",
        },
        {
            username: "gauchola",
            points: 3000,
            team: "Bonde do RS",
            avatar: "https://placehold.co/400/png",
        },
    ];
    return (
        <div className="w-full space-y-2 p-2 lg:p-0">
            {ranking.map((rankings, index) => (
                <div
                    key={index + 1}
                    className="w-full flex items-center justify-between rounded bg-zinc-900 p-2"
                >
                    <div className="flex gap-4 items-center">
                        <span># {index + 1}</span>
                        <img
                            src={rankings.src}
                            className="size-10 rounded-full bg-zinc-950"
                        />
                        <div>
                            <span className="block text-sm text-zinc-200 leading-6">
                                {rankings.username}
                            </span>
                            <span className="block text-xs text-zinc-500">
                                {rankings.team}
                            </span>
                        </div>
                    </div>
                    <div className="rounded bg-zinc-800 shadow-shape p-2 flex items-center gap-2">
                        <Waypoints className="size-4" />
                        <span>{rankings.points}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
