import { NavLink } from "react-router-dom";
import { SparklesIcon } from "@heroicons/react/24/solid";

const navItems = [
  { to: "/", label: "Beranda" },
  { to: "/simulator", label: "Simulasi" },
  { to: "/perbandingan-bank", label: "Perbandingan" },
  { to: "/pendaftaran", label: "Pendaftaran" },
  { to: "/edukasi", label: "Edukasi" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#e7dcc8]">
      <div className="container flex items-center justify-between min-h-20">
        <NavLink to="/" className="inline-flex items-center">
          <img src="/images/azizati-logo.png" alt="Azizati.id" className="h-10 w-auto" />
        </NavLink>

        <nav className="inline-flex items-center gap-1 border border-[#efe5d3] rounded-full p-1 bg-white">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
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
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold bg-gradient-to-r from-[#eedc82] via-[#cfa93f] to-[#8f6c18] text-[#241d0f] hover:brightness-110 transition-all"
        >
          <SparklesIcon className="w-4 h-4" />
          Mulai Simulasi
        </NavLink>
      </div>
    </header>
  );
}