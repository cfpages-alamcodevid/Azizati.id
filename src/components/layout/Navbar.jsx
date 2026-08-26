import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Bars3Icon,
  SparklesIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const navItems = [
  { to: "/", label: "Beranda" },
  { to: "/simulator", label: "Simulasi" },
  { to: "/perbandingan-bank", label: "Perbandingan" },
  { to: "/pendaftaran", label: "Pendaftaran" },
  { to: "/edukasi", label: "Edukasi" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#e7dcc8]">
      <div className="container flex items-center justify-between min-h-16 md:min-h-20 gap-3">
        <NavLink
          to="/"
          className="inline-flex items-center gap-2 min-w-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
          aria-label="Azizati.id - Beranda"
        >
          <span className="h-11 w-10 overflow-hidden flex-shrink-0" aria-hidden="true">
            <img
              src="/images/azizati-logo.png"
              alt=""
              className="h-11 w-auto max-w-none"
            />
          </span>
          <span className="font-heading text-xl font-extrabold tracking-tight text-[#17130f]">
            Azizati<span className="text-[#9a741b]">.id</span>
          </span>
        </NavLink>

        <nav
          className="hidden lg:inline-flex items-center gap-1 border border-[#efe5d3] rounded-full p-1 bg-white"
          aria-label="Navigasi utama"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[#f7e4b7] text-[#6d5309]"
                    : "hover:bg-[#fbf1db] hover:text-[#6d5309]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/simulator"
          className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold bg-gradient-to-r from-[#eedc82] via-[#cfa93f] to-[#8f6c18] text-[#241d0f] hover:brightness-110 transition-all"
        >
          <SparklesIcon className="w-4 h-4" />
          Mulai Simulasi
        </NavLink>

        <button
          type="button"
          className="lg:hidden inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[#dfcfaf] bg-white text-[#4d3d18] shadow-sm transition-colors hover:bg-[#fff7e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`lg:hidden border-t border-[#eee3cf] bg-white shadow-lg ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="container grid gap-1 py-3" aria-label="Navigasi seluler">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex min-h-11 items-center rounded-xl px-4 py-2.5 font-semibold transition-colors ${
                  isActive
                    ? "bg-[#f7e4b7] text-[#6d5309]"
                    : "text-[#332b1f] hover:bg-[#fbf1db]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/simulator"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-bold bg-gradient-to-r from-[#eedc82] via-[#cfa93f] to-[#8f6c18] text-[#241d0f]"
          >
            <SparklesIcon className="h-4 w-4" aria-hidden="true" />
            Mulai Simulasi
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
