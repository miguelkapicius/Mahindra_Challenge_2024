export function RaceRanking({ data }) {
    return (
        <div
            className="pr-2 space-y-2 bg-zinc-950 rounded h-screen pb-10 overflow-y-auto"
        >
            {data.pilots.sort((a, b) => a.position - b.position).map((pilot) => (
                <div
                    key={pilot.position}
                    className="flex items-center justify-between shadow-shape bg-zinc-900 h-16 p-2 rounded"
                >
                    <div className="flex items-center gap-2">
                        <img
                            className="rounded-full size-12 bg-zinc-950 pt-1"
                            src={pilot.image}
                        />
                        <div className="">
                            <span className="block truncate pr-2">
                                {pilot.firstName} {pilot.lastName}
                            </span>
                            <span className="block text-xs text-zinc-400">
                                {pilot.team}
                            </span>
                        </div>
                    </div>
                    <div className="rounded p-2 w-10 text-center bg-zinc-800 shadow-shape">
                        <span className="">{pilot.position}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
