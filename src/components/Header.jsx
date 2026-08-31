import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { SITE, PAGES } from "../data/site";

export default function Header() {
  const { c, isDark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `transition-colors ${isActive ? c.accent : `${c.muted} ${c.hoverText}`}`;

  return (
    <header className={`sticky top-0 z-20 ${c.headerBg} backdrop-blur border-b ${c.border}`}>
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-5">
        <NavLink to="/" className="font-serif text-2xl text-[#1ED760] tracking-tight">
          {SITE.name}
        </NavLink>

        <nav className="hidden sm:flex items-center gap-8 text-sm">
          {PAGES.map((p) => (
            <NavLink key={p.key} to={p.path} end={p.path === "/"} className={linkClass}>
              {p.label}
            </NavLink>
          ))}
          {/* <button onClick={toggle} aria-label="Toggle theme" className={`p-2 rounded-full ${c.pill}`}>
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button> */}
        </nav>

        <div className="flex items-center gap-3 sm:hidden">
          {/* <button onClick={toggle} aria-label="Toggle theme" className={`p-2  rounded-full ${c.pill}`}>
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button> */}
          <button onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="sm:hidden flex flex-col px-6 pb-4 gap-3 text-sm">
          {PAGES.map((p) => (
            <NavLink
              key={p.key}
              to={p.path}
              end={p.path === "/"}
              onClick={() => setMenuOpen(false)}
              className={linkClass}
            >
              {p.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
