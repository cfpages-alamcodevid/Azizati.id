import {
  BookOpenIcon,
  CalculatorIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  PaperAirplaneIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const productLinks = [
  { to: "/tabungan-haji", label: "Tabungan Haji", icon: GlobeAltIcon },
  { to: "/tabungan-umroh", label: "Tabungan Umroh", icon: GlobeAltIcon },
  { to: "/simulator", label: "Simulator Tabungan", icon: CalculatorIcon },
];

const staticLinks = [
  { to: "/perbandingan-bank", label: "Perbandingan Bank", icon: RectangleGroupIcon },
  { to: "/edukasi", label: "Edukasi & FAQ", icon: BookOpenIcon },
  { to: "/pendaftaran", label: "Pendaftaran", icon: BookOpenIcon },
];

export default function Footer() {
  return (
    <footer className="mt-6 border-t border-[#ddd0b4] bg-gradient-to-b from-[#fbf7ef] to-[#f1e7d5] text-[#2b2418]">
      <div className="container py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <img
            src="/images/azizati-logo.png"
            alt="Azizati.id"
            className="h-12 w-auto mb-4"
          />
          <p className="text-base font-bold text-text-heading mb-2">Tentang Kami</p>
          <p className="text-sm text-[#665f53] leading-relaxed">
            Azizati.id adalah platform perencanaan tabungan Haji dan Umroh
            yang membantu Anda memilih produk syariah dengan lebih tenang,
            jelas, dan terarah.
          </p>
          <div className="flex gap-2 mt-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full inline-flex items-center justify-center border border-[#dfcfaf] bg-white/70 text-[#6a5316] hover:bg-[#fff7e8] transition-all"
              aria-label="Instagram"
            >
              <GlobeAltIcon className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full inline-flex items-center justify-center border border-[#dfcfaf] bg-white/70 text-[#6a5316] hover:bg-[#fff7e8] transition-all"
              aria-label="Facebook"
            >
              <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:info@azizati.id"
              className="w-9 h-9 rounded-full inline-flex items-center justify-center border border-[#dfcfaf] bg-white/70 text-[#6a5316] hover:bg-[#fff7e8] transition-all"
              aria-label="Email"
            >
              <EnvelopeIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-base font-bold text-text-heading mb-3">Produk</p>
          <div className="grid gap-3">
            {productLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="inline-flex items-center gap-2 text-sm text-text-body hover:text-amber-800 transition-all"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-base font-bold text-text-heading mb-3">Halaman Penting</p>
          <div className="grid gap-3">
            {staticLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="inline-flex items-center gap-2 text-sm text-text-body hover:text-amber-800 transition-all"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-base font-bold text-text-heading mb-2">
            Langganan Info Terbaru
          </p>
          <p className="text-sm text-[#665f53] mb-3">
            Dapatkan update seputar tabungan Haji dan Umroh, tips perencanaan, dan
            insight produk terbaru.
          </p>
          <form
            className="grid gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="text-sm font-bold text-text-heading" htmlFor="footer-email">
              Email
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="nama@email.com"
              className="border border-[#e8dcc6] rounded-lg px-3 py-2 bg-white/90 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-lg font-bold bg-gradient-to-r from-[#eedc82] via-[#cfa93f] to-[#8f6c18] text-[#241d0f] hover:brightness-110 transition-all"
            >
              <PaperAirplaneIcon className="w-4 h-4" />
              Langganan
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-[#ddd1b7]">
        <div className="container min-h-14 flex items-center justify-between py-3">
          <p className="text-sm text-[#665f53]">
            © 2026 Azizati.id. Nikmatnya Ibadah.
          </p>
          <div className="inline-flex gap-4">
            <Link to="/edukasi" className="text-sm text-[#665f53] hover:text-amber-800">
              Kebijakan Privasi
            </Link>
            <Link to="/edukasi" className="text-sm text-[#665f53] hover:text-amber-800">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}