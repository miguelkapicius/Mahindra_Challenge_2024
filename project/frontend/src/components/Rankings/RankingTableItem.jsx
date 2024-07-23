import { Waypoints } from "lucide-react";

export function RankingTableItem({avatar, username, team, points, position}) {
    return (
        <div
            className="w-full flex items-center justify-around rounded bg-zinc-900 p-2 shadow-shape"
        >
            <div className="flex w-2/3 gap-4 items-center">
                <span className="w-1/4 text-blue-800"># {position}</span>
                <img
                    src={avatar}
                    className="w-1/4 rounded bg-zinc-950"
                />
                <div className="w-2/4">
                    <span className="block text-sm text-zinc-200 leading-6 truncate">
                        {username}
                    </span>
                    <span className="block text-xs text-zinc-500 truncate">
                        {team}
                    </span>
                </div>
            </div>
            <div className="rounded bg-zinc-800 shadow-shape p-2 flex items-center gap-2">
                <Waypoints className="size-4" />
                <span>{points}</span>
            </div>
        </div>
    );
}
