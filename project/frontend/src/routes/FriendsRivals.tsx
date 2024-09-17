import { AddFriend} from "@/components/AddFriend";
import { Leaderboard } from "@/components/UsersLeaderboard/Leaderboard";

export default function FriendsRivals() {
    return (
        <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-display">Friends & Rivals</h2>
            <AddFriend />
            <Leaderboard />
        </section>
    );
}
