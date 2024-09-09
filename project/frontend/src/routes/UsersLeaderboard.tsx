import { Leaderboard } from "@/components/UsersLeaderboard/Leaderboard";

export function UsersLeaderboard() {
    return (
        <section className="space-y-6">
            <h2 className="text-2xl md:text-5xl font-display">Users Leaderboard</h2>
            <Leaderboard />
        </section>
    );
}