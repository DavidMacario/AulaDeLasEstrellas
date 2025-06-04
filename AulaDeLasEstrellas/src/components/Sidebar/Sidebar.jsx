import { NavLink } from "react-router-dom";
import {
  ArrowRightEndOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/LogoSidebar.png";
import { useState } from "react";
import "./sidebar.css"; // ✅ Importar CSS personalizado

const navItems = [
  { name: "Aula", path: "/aula" },
  { name: "Horario", path: "/horario" },
  { name: "Familias", path: "/familias" },
  { name: "Recursos", path: "/recursos" },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  return (
    <aside
      className={`relative flex flex-col h-screen font-fredoka shadow-md border-r-4 border-textGreen bg-backgroundGreen text-textGreen transition-all duration-300 ${
        isCollapsed ? "w-0" : "w-64 sidebar-ipad sidebar-mobile"
      }`}
    >
      {/* Botón SIEMPRE visible */}
      <button
        onClick={toggleSidebar}
        className="absolute bottom-12 -right-16 z-50 bg-pastelGreen hover:bg-hoverDarkGreen text-textGreen rounded-full p-2 shadow-lg transition-transform duration-200 toggle-button-ipad toggle-button-mobile"
        title={isCollapsed ? "Mostrar menú" : "Ocultar menú"}
      >
        {isCollapsed ? (
          <ArrowRightStartOnRectangleIcon className="h-8 w-8 icon-ipad icon-mobile" />
        ) : (
          <ArrowRightEndOnRectangleIcon className="h-8 w-8 -scale-x-100 icon-ipad icon-mobile" />
        )}
      </button>

      {/* Logo */}
      <NavLink
        to="/"
        title="Ir a Inicio"
        className={({ isActive }) =>
          `flex items-center justify-center border-b border-textGreen py-2 transition-colors duration-500 ${
            isActive ? "bg-pastelGreen" : "hover:bg-hoverDarkGreen"
          }`
        }
      >
        <img
          src={logo}
          alt="Logo Aula de las Estrellas"
          className="h-auto w-auto object-contain transition-transform duration-300 hover:scale-105 hover:rotate-6"
        />
      </NavLink>

      {/* Navegación */}
      <nav className="flex flex-col mt-0">
        {navItems.map((item, index) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center py-8 text-3xl navlink-ipad navlink-mobile transition-colors duration-200 ${
                isActive ? "bg-pastelGreen font-semibold" : "hover:bg-hoverDarkGreen"
              }`
            }
          >
            <span className="w-6" />
            <span
              className={`pl-4 transition-opacity duration-300 ease-in-out ${
                isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Pie de info */}
      <div
        className={`mt-auto text-sm text-textGreen pb-4 px-4 transition-all overflow-hidden ${
          isCollapsed ? "opacity-0 max-h-0" : "opacity-70 max-h-20"
        }`}
        style={{ transitionDelay: `${navItems.length * 80}ms` }}
      >
        Aula de las Estrellas V1.0
      </div>
    </aside>
  );
}
