import {
  BookOpenIcon,
  CalculatorIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EnvelopeIcon,
  HeartIcon,
  InformationCircleIcon,
  PaperAirplaneIcon,
  RectangleGroupIcon,
  GlobeAltIcon,
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
          <div className="footer-social-row">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Instagram">
              <GlobeAltIcon className="footer-link-icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Facebook">
              <ChatBubbleOvalLeftEllipsisIcon className="footer-link-icon" />
            </a>
            <a href="mailto:info@azizati.id" className="footer-social-icon" aria-label="Email">
              <EnvelopeIcon className="footer-link-icon" />
            </a>
          </div>
        </div>

        <div className="footer-column">
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

        <div className="footer-column">
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

        <div className="footer-column footer-subscribe-column">
          <p className="footer-title">Langganan Info Terbaru</p>
          <p className="footer-text">
            Dapatkan update seputar tabungan haji dan umroh, tips perencanaan, dan insight produk terbaru.
          </p>
          <form className="footer-subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <label className="footer-subscribe-label" htmlFor="footer-email">
              Email
            </label>
            <input id="footer-email" type="email" placeholder="nama@email.com" className="footer-subscribe-input" />
            <button type="submit" className="btn btn-primary btn-block">
              <PaperAirplaneIcon className="btn-icon" />
              Langganan
            </button>
          </form>
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
