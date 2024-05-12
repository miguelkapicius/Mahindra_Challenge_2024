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
    <aside className="xl:h-screen xl:w-max mobile:max-xl:fixed mobile:max-xl:bottom-0 mobile:max-xl:w-full mobile:max-xl:mt-8 z-50">
      <nav className="h-full flex flex-col mobile:max-xl:flex-row mobile:max-xl:justify-center bg-secoundary  shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center mb-4 mobile:max-xl:mb-0 mobile:max-xl:p-0 ">
          <img
            src="/logo-white-blue.png"
            className={`overflow-hidden transition-all duration-500 mobile:max-xl:hidden ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg hover:opacity-80 duration-500 mobile:max-xl:hidden"
          >
            {expanded ? <CaretDoubleLeft size={20} /> : <CaretDoubleRight size={20} />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="xl:flex-1 xl:px-3 mobile:max-xl:flex mobile:max-xl:justify-center gap-4">{children}</ul>
        </SidebarContext.Provider>
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
            ? "bg-white text-primary"// Define a cor de fundo se o item estiver ativo
            : "text-white hover:text-primary duration-0" // Define a cor de fundo quando nao esta ativo
        }
    `}
    >
      {icon}
      <span
        className={`mobile:max-xl:hidden xl:overflow-hidden transition-all w-0 ${
          expanded ? "w-32 xl:ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 size-2 rounded bg-red-500 border animate-pulse mobile:max-xl:top-2 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-white text-sm text-secoundary
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          mobile:max-xl:hidden
      `}
        >
          {text}
        </div>
      )}
    </NavLink>
  )
}