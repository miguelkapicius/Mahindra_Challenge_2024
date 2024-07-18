const rankings = [
    {
        username: "Alice",
        points: 4000,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Bob",
        points: 3600,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Carol",
        points: 3700,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Alice",
        points: 4000,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Bob",
        points: 3600,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Carol",
        points: 3700,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Alice",
        points: 4000,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Bob",
        points: 3600,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Carol",
        points: 3700,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Alice",
        points: 4000,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Bob",
        points: 3600,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Carol",
        points: 3700,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Alice",
        points: 4000,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Bob",
        points: 3600,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Carol",
        points: 3700,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Alice",
        points: 4000,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Bob",
        points: 3600,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Carol",
        points: 3700,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Alice",
        points: 4000,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Bob",
        points: 3600,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Carol",
        points: 3700,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Alice",
        points: 4000,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Bob",
        points: 3600,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Carol",
        points: 3700,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Alice",
        points: 4000,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Bob",
        points: 3600,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Carol",
        points: 3700,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Alice",
        points: 4000,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Bob",
        points: 3600,
        avatar: "https://avatar.iran.liara.run/public",
    },
    {
        username: "Carol",
        points: 3700,
        avatar: "https://avatar.iran.liara.run/public",
    },
];

const sortedRankings = rankings.sort((a, b) => b.points - a.points);

export function RankingTable() {
    return (
        <div className="w-full bg-zinc-950/95 lg:rounded-lg p-2 lg:w-5xl shadow-shape space-y-4">
            <div className="flex p-4 justify-between items-center bg-zinc-900 rounded-lg text-xs font-light text-zinc-50 shadow-shape">
                <span className="uppercase w-1/6">Position</span>
                <span className="uppercase w-4/6">Username</span>
                <span className="uppercase w-1/6">Points</span>
            </div>
            <ul className="space-y-2">
                {sortedRankings.map((ranking, index) => (
                    <li key={index} className="hover:bg-zinc-900 duration-100 rounded-lg">
                        <div className="px-4 py-2 flex justify-between items-center text-sm">
                            <span className="w-1/6">{index + 1}</span>
                            <span className="w-4/6 flex items-center gap-4 truncate">
                                <img className="rounded-full size-8" src={ranking.avatar} />
                                {ranking.username}
                            </span>
                            <span className="w-1/6">{ranking.points}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}