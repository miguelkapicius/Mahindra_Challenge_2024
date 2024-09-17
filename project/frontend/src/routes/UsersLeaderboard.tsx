import { Leaderboard } from "@/components/UsersLeaderboard/Leaderboard";

export default function UsersLeaderboard() {
    return (
        <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-display">Users Leaderboard</h2>
            <Leaderboard />
        </section>
    );
}