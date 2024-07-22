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
            points: 4000,
            team: "Bonde do RS",
            avatar: "https://placehold.co/400/png",
        },
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
            points: 4000,
            team: "Bonde do RS",
            avatar: "https://placehold.co/400/png",
        },
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
            points: 4000,
            team: "Bonde do RS",
            avatar: "https://placehold.co/400/png",
        },
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
            points: 4000,
            team: "Bonde do RS",
            avatar: "https://placehold.co/400/png",
        },
        {
            username: "gauchola",
            points: 4000,
            team: "Bonde do RS",
            avatar: "https://placehold.co/400/png",
        },
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
            points: 4000,
            team: "Bonde do RS",
            avatar: "https://placehold.co/400/png",
        },
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
            points: 4000,
            team: "Bonde do RS",
            avatar: "https://placehold.co/400/png",
        },
        {
            username: "gauchola",
            points: 4000,
            team: "Bonde do RS",
            avatar: "https://placehold.co/400/png",
        },
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
            points: 4000,
            team: "Bonde do RS",
            avatar: "https://placehold.co/400/png",
        },
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
            points: 4000,
            team: "Bonde do RS",
            avatar: "https://placehold.co/400/png",
        },
    ];

    const sortedRanking = ranking.sort((a, b) => b.points - a.points);

    return (
        <div className="w-full space-y-2 p-2 lg:p-0">
            {sortedRanking.map((rankings, index) => (
                <div
                    key={index + 1}
                    className="w-full flex items-center justify-around rounded bg-zinc-900 p-2 shadow-shape"
                >
                    <div className="flex w-2/3 gap-4 items-center">
                        <span className="w-1/4 text-blue-800"># {index + 1}</span>
                        <img
                            src={rankings.avatar}
                            className="w-1/4 rounded bg-zinc-950"
                        />
                        <div className="w-2/4">
                            <span className="block text-sm text-zinc-200 leading-6 truncate">
                                {rankings.username}
                            </span>
                            <span className="block text-xs text-zinc-500 truncate">
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
