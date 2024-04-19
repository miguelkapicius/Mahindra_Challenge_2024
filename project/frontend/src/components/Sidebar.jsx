// Importação dos módulos necessários do React
import { useContext, createContext, useState } from "react"
import {CaretDoubleLeft, CaretDoubleRight} from '@phosphor-icons/react'
import { NavLink, useLocation } from "react-router-dom"

// Criação e exportação do contexto da barra lateral
const SidebarContext = createContext() 

// Definição do componente da barra lateral
export default function Sidebar({ children }) {

  // Estado para controlar a expansão da barra lateral
  const [expanded, setExpanded] = useState(true)
  
  return (
    <aside className="h-screen w-max">
      <nav className="h-full flex flex-col bg-slate-900  shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center mb-4">
          <img
            src="/mahindra-logo.png"
            className={`overflow-hidden transition-all duration-500 ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg hover:opacity-80 duration-200"
          >
            {expanded ? <CaretDoubleLeft size={20} /> : <CaretDoubleRight size={20} />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Miguel Kapicius</h4>
              <span className="text-xs text-indigo-700">miguelkapicius@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  )
}

// Definição do componente de item da barra lateral
export function SidebarItem({ icon, text, href, alert }) {
  const { expanded } = useContext(SidebarContext)
  const location = useLocation(); // Obtém o objeto de localização atual do React Router
  const isActive = location.pathname === href; // Verifica se a rota atual é igual ao href do item da barra lateral
  
  return (
    <NavLink
    to={href} // Define o destino do link com o atributo href
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          isActive
            ? "bg-indigo-700" // Define a cor de fundo como indigo-700 se o item estiver ativo
            : "hover:bg-indigo-900" // Define a cor de fundo como indigo-800 quando o item é destacado
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 size-2 rounded bg-red-500 border animate-pulse ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-900 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </NavLink>
  )
}