import { RankingTable } from "../components/Rankings/RankingTable";

export function RankingsPage() {
    return (
        <div>
            <h1 className="text-xl lg:text-2xl bg-zinc-800 lg:bg-transparent lg:border-b-0 border-b border-zinc-700 text-center p-2 mb-6">Leaderboard</h1>
            <RankingTable />
        </div>
    )
}