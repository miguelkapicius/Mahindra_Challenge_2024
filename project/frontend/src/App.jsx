import { SquaresFour, FlagCheckered, TrendUp, Trophy } from "@phosphor-icons/react";
import Sidebar, { SidebarItem } from "./components/Sidebar";

// Reaproveitando Estrutura com React Router
import {Outlet} from 'react-router-dom'

function App() {
    return (
        <div className="flex gap-10">
            <section>
                <Sidebar>
                    <SidebarItem icon={<SquaresFour size={32} />} text="Dashboard" href="/"/>
                    <SidebarItem icon={<FlagCheckered size={32} />} text="Races" href="/races" alert/>
                    <SidebarItem icon={<TrendUp size={32} />} text="Statistics" href="/statistics" />
                    <SidebarItem icon={<Trophy size={32} />} text="Rankings" href="/rankings" />
                </Sidebar>
            </section>
            <section>
                <Outlet /> {/* Rotas Dinamicas */}
            </section>
        </div>
    );
}

export default App;
