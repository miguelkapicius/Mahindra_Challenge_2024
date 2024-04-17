import { SquaresFour, FlagCheckered, TrendUp, Trophy } from "@phosphor-icons/react";
import Sidebar, { SidebarItem } from "./components/Sidebar";

function App() {
    return (
        <main className="text-slate-200">
            <Sidebar>
                <SidebarItem icon={<SquaresFour size={32} />} text="Dashboard" active/>
                <SidebarItem icon={<FlagCheckered size={32} />} text="Races" alert/>
                <SidebarItem icon={<TrendUp size={32} />} text="Statistics" />
                <SidebarItem icon={<Trophy size={32} />} text="Rankings" />
            </Sidebar>
        </main>
    );
}

export default App;
