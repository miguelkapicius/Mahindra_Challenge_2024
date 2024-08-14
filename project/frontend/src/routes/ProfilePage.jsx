import {
    ArrowRight,
    Bolt,
    CircleDollarSign,
    Users,
    Waypoints,
} from "lucide-react";
import { RankingTableItem } from "../components/Rankings/RankingTableItem";

export function ProfilePage() {
    const friends = [
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
    ];

    const sortedFriends = friends.sort((a, b) => b.points - a.points);

    return (
        <div className="h-screen space-y-6 max-w-5xl">
            <div className="bg-zinc-900 flex p-2 gap-4">
                <img
                    src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-16 rounded"
                />
                <div className=" w-full flex items-center justify-between">
                    <div className="rounded">
                        <span className="block leading-6 font-bold text-zinc-100">
                            miguelkapicius
                        </span>
                        <span className="block leading-6 text-sm text-zinc-100/80">
                            @miguelkapicius__
                        </span>
                    </div>
                    <button className="p-2 bg-zinc-900 rounded shadow-shape">
                        <Bolt className="" />
                    </button>
                </div>
            </div>
            <div className="bg-blue-900 px-2 py-6 space-y-6">
                <div className="flex gap-2 items-center">
                    <span className="flex w-1/2 justify-center font-medium bg-zinc-900 px-4 rounded py-1 items-center gap-2 shadow-shape">
                        <Waypoints />
                        4000
                    </span>
                    <span className="flex w-1/2 font-medium justify-center bg-zinc-900 px-4 rounded py-1 items-center gap-2 shadow-shape">
                        <CircleDollarSign />
                        1236,00
                    </span>
                </div>
                <div className="flex flex-col justify-between gap-6">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2">
                            <Users />
                            1200
                        </span>
                        <button className="bg-zinc-800 p-2 flex items-center justify-center gap-2 rounded flex-1 shadow-shape">
                            Send invite <ArrowRight />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                {sortedFriends.map((friend, index) => (
                    <RankingTableItem
                        key={index + 1}
                        position={index + 1}
                        avatar={friend.avatar}
                        points={friend.points}
                        team={friend.team}
                        username={friend.username}
                    />
                ))}
            </div>
        </div>
    );
}
