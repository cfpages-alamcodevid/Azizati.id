import {
  BookOpenIcon,
  CalculatorIcon,
  GlobeAltIcon,
  HeartIcon,
  InformationCircleIcon,
  PhoneIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const productLinks = [
  { to: "/tabungan-haji", label: "Tabungan Haji", icon: HeartIcon },
  { to: "/tabungan-umroh", label: "Tabungan Umroh", icon: GlobeAltIcon },
  { to: "/simulator", label: "Simulator Tabungan", icon: CalculatorIcon },
];

const staticLinks = [
  { to: "/perbandingan-bank", label: "Perbandingan Bank", icon: RectangleGroupIcon },
  { to: "/edukasi", label: "Edukasi & FAQ", icon: BookOpenIcon },
  { to: "/pendaftaran", label: "Pendaftaran", icon: InformationCircleIcon },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/images/azizati-logo.png" alt="Azizati.id" className="footer-logo" />
          <p className="footer-title">Tentang Kami</p>
          <p className="footer-text">
            Azizati.id adalah platform perencanaan tabungan haji dan umroh yang membantu
            Anda memilih produk syariah dengan lebih tenang, jelas, dan terarah.
          </p>
        </div>

        <div>
          <p className="footer-title">Produk</p>
          <div className="footer-link-list">
            {productLinks.map((item) => (
              <Link key={item.to} to={item.to} className="footer-link">
                <item.icon className="footer-link-icon" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="footer-title">Halaman Penting</p>
          <div className="footer-link-list">
            {staticLinks.map((item) => (
              <Link key={item.to} to={item.to} className="footer-link">
                <item.icon className="footer-link-icon" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="footer-title">Sosial & Kontak</p>
          <div className="footer-link-list">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              <GlobeAltIcon className="footer-link-icon" />
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              <GlobeAltIcon className="footer-link-icon" />
              Facebook
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="footer-link">
              <PhoneIcon className="footer-link-icon" />
              WhatsApp Kami
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-text">© 2026 Azizati.id. Nikmatnya Ibadah.</p>
          <div className="footer-legal-links">
            <Link to="/edukasi">Kebijakan Privasi</Link>
            <Link to="/edukasi">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
