import { Waypoints } from "lucide-react";

export function RankingTableItem({avatar, username, team, points, position}) {
    return (
        <div
            className="flex items-center justify-between rounded bg-zinc-900 p-2 shadow-shape"
        >
            <div className="flex flex-1 w-full h-10 gap-4 items-center">
                <div className="flex h-full items-center lg:gap-6">
                    <span className="w-10 text-blue-800"># {position}</span>
                    <img
                        src={avatar}
                        className="rounded h-full bg-zinc-950 object-cover"
                    />
                </div>
                <div className="">
                    <span className="block text-sm text-zinc-200 leading-6 truncate">
                        {username}
                    </span>
                    <span className="block text-xs text-zinc-500 truncate">
                        {team}
                    </span>
                </div>
            </div>
            <div className="rounded bg-zinc-800 w-max shadow-shape p-2 flex items-center gap-2">
                <Waypoints className="size-5" />
                <span>{points}</span>
            </div>
        </div>
    );
}
