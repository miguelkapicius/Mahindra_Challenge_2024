import { RankingTableItem } from "./RankingTableItem";

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
                <RankingTableItem
                    key={index + 1}
                    position={index + 1}
                    avatar={rankings.avatar}
                    username={rankings.username}
                    points={rankings.points}
                    team={rankings.team}
                />
            ))}
        </div>
    );
}
