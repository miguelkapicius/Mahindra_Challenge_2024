const rankings = [
    {
        username: "Alice",
        points: 4000,
        avatar: "https://avatar.iran.liara.run/public",
        team: "Electra",
        patent: "Diamond",
    },
    {
        username: "Bob",
        points: 3600,
        avatar: "https://avatar.iran.liara.run/public",
        team: "Electra",
        patent: "Diamond",
    },
    {
        username: "Carol",
        points: 3700,
        avatar: "https://avatar.iran.liara.run/public",
        team: "Electra",
        patent: "Diamond",
    },
    {
        username: "Bob",
        points: 3600,
        avatar: "https://avatar.iran.liara.run/public",
        team: "Electra",
        patent: "Diamond",
    },
    {
        username: "Carol",
        points: 3700,
        avatar: "https://avatar.iran.liara.run/public",
        team: "Electra",
        patent: "Diamond",
    },
    {
        username: "Bob",
        points: 3600,
        avatar: "https://avatar.iran.liara.run/public",
        team: "Electra",
        patent: "Diamond",
    },
    {
        username: "Carol",
        points: 3700,
        avatar: "https://avatar.iran.liara.run/public",
        team: "Electra",
        patent: "Diamond",
    },
];

const sortedRankings = rankings.sort((a, b) => b.points - a.points);

export function RankingTable() {
    return (
        <div className="w-full bg-zinc-950/95 lg:rounded-lg p-2 lg:w-5xl shadow-shape space-y-4">
            <div className="flex p-4 justify-between items-center bg-zinc-900 rounded-lg text-xs font-light text-zinc-50 shadow-shape">
                <span className="uppercase w-1/6">Position</span>
                <span className="uppercase w-3/6">Username</span>
                <span className="uppercase w-2/6">Team</span>
                <span className="uppercase w-1/6">Patent</span>
                <span className="uppercase w-1/6">Points</span>
            </div>
            <ul className="space-y-2">
                {sortedRankings.map((ranking, index) => (
                    <li
                        key={index}
                        className="hover:bg-zinc-900 duration-100 rounded-lg"
                    >
                        <div className="px-4 py-2 flex justify-between items-center text-sm">
                            <div className="w-1/6 p-2">
                                <span
                                    className={`w-20 p-2  text-center rounded ${
                                        index + 1 < 4
                                            ? "bg-green-800"
                                            : "bg-blue-800"
                                    }`}
                                >
                                    {index + 1}
                                </span>
                            </div>
                            <span className="w-3/6 flex items-center gap-4 truncate">
                                <img
                                    className="rounded-full size-8"
                                    src={ranking.avatar}
                                />
                                {ranking.username}
                            </span>
                            <span className="w-2/6">{ranking.team}</span>
                            <span className="w-1/6">{ranking.patent}</span>
                            <span className="w-1/6">{ranking.points}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
