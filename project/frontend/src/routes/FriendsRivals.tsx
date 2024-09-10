import { Search } from "@/components/Search";
import { Leaderboard } from "@/components/UsersLeaderboard/Leaderboard";

export function FriendsRivals() {
    return (
        <section className="space-y-6">
            <Search />
            <Leaderboard />
        </section>
    );
}
