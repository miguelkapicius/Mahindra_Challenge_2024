import { Navbar } from "./components/Navbar";
import { RankingTable } from "./components/Rankings/RankingTable";

export function App() {
    return (
        <div className="lg:flex min-h-screen">
            <Navbar />
            <main className="mb-14 lg:p-6 lg:ml-64 flex-1 overflow-y-auto">
                <RankingTable />
            </main>
        </div>
    );
}
