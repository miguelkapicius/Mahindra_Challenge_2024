// Importando icones e componentes
import {
    SquaresFour,
    FlagCheckered,
    TrendUp,
    Trophy,
    ShieldSlash,
} from "@phosphor-icons/react";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import { useLocation } from "react-router-dom"
import { useEffect } from 'react';

// Reaproveitando Estrutura com React Router
import { Outlet } from "react-router-dom";

function App() {

    const location = useLocation();

    // Define o título da página com base na rota atual
    useEffect(() => {
      // Exemplo de mapeamento entre a rota e o título da página
      const routeTitles = {
        '/': 'Dashboard',
        '/league': 'League',
        '/races': 'Races',
        '/rankings': 'Rankings',
        '/statistics': 'Statistics',
        // Adicione mais rotas e títulos conforme necessário
      };
  
      // Obtém o título correspondente à rota atual
      const pageTitle = routeTitles[location.pathname];
  
      // Define o título da página usando document.title
      document.title = "E-Pit | " + pageTitle || 'E-Pit';
      const h1Element = document.getElementById('h1')
      if(h1Element) {
        h1Element.innerText = pageTitle
      }
    }, [location.pathname]); // Atualiza o efeito sempre que a rota atual mudar
  
    return (
        <div className="flex">
            <section>
                <Sidebar>
                    <SidebarItem
                        icon={<SquaresFour size={32} />}
                        text="Dashboard"
                        href="/"
                    />
                    <SidebarItem
                        icon={<FlagCheckered size={32} />}
                        text="Races"
                        href="/races"
                        alert
                    />
                    <SidebarItem
                        icon={<TrendUp size={32} />}
                        text="Statistics"
                        href="/statistics"
                    />
                    <SidebarItem
                        icon={<Trophy size={32} />}
                        text="Rankings"
                        href="/rankings"
                    />
                    <SidebarItem
                        icon={<ShieldSlash size={32} />}
                        text="League"
                        href="/league"
                    />
                </Sidebar>
            </section>
            <section className="p-10 w-[100%] h-[90vh]">
                {/* Titulo altera conforme a pagina que foi acessada */}
                <h1 id="h1" className="text-3xl font-semibold mb-10" /> 
                {/* Renderiza as paginas dinamicas */}
                <Outlet /> 
            </section>
        </div>
    );
}

export default App;
