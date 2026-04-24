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
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="brand">
          <img src="/images/azizati-logo.png" alt="Azizati.id" className="brand-logo" />
        </NavLink>

        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/simulator" className="btn btn-primary">
          <SparklesIcon className="btn-icon" />
          Mulai Simulasi
        </NavLink>
      </div>
    </header>
  );
}
