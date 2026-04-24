import { Link } from "react-router-dom";
import SectionTitle from "../components/ui/SectionTitle";
import {
  BanknotesIcon,
  ChartBarSquareIcon,
  CheckBadgeIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  { title: "Sesuai prinsip syariah", icon: ShieldCheckIcon },
  { title: "Pilihan bank mitra terverifikasi", icon: CheckBadgeIcon },
  { title: "Simulasi tabungan cepat dan mudah", icon: ChartBarSquareIcon },
  { title: "Pendampingan pendaftaran oleh tim Azizati", icon: UserGroupIcon },
];

const stats = [
  { label: "Bank Mitra Syariah", value: "4+", icon: BanknotesIcon },
  { label: "Lead Dibantu", value: "1.200+", icon: UserGroupIcon },
  { label: "Waktu Follow-up", value: "< 24 Jam", icon: ClockIcon },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Platform Agregator Syariah</p>
            <h1>
              Nikmatnya Ibadah,
              <br />
              Tenang Menabungnya.
            </h1>
            <p className="hero-copy">
              Rencanakan tabungan Haji dan Umroh dengan terstruktur, transparan, dan
              sesuai kemampuan finansial Anda.
            </p>
            <div className="cta-row">
              <Link to="/simulator" className="btn btn-primary">
                Mulai Simulasi
              </Link>
              <Link to="/perbandingan-bank" className="btn btn-secondary">
                Bandingkan Bank
              </Link>
            </div>
          </div>
          <div className="highlight-card">
            <p className="highlight-label">Cara Kerja</p>
            <ol>
              <li>Simulasikan target tabungan</li>
              <li>Bandingkan produk bank syariah</li>
              <li>Daftar dan dapatkan pendampingan</li>
            </ol>
          </div>
        </div>
        <div className="container quick-stats">
          {stats.map((item) => (
            <article className="metric-card" key={item.label}>
              <item.icon className="metric-icon" />
              <div>
                <p className="metric-value">{item.value}</p>
                <p className="metric-label">{item.label}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Keunggulan"
            title="Kenapa Memilih Azizati.id"
            description="Dirancang untuk mempermudah keputusan finansial ibadah Anda."
          />
          <div className="grid cards-4">
            {benefits.map((item) => (
              <article key={item.title} className="card">
                <item.icon className="card-icon" />
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="partner-strip">
            <p>Mitra terpercaya: BSI, Muamalat, Mandiri Syariah, BNI Syariah</p>
          </div>
          <SectionTitle
            eyebrow="Produk"
            title="Pilihan Program Tabungan"
            description="Sesuaikan tujuan ibadah Anda dan pelajari detail tiap produk."
          />
          <div className="grid cards-2">
            <article className="card">
              <h3>Tabungan Haji</h3>
              <p>
                Fokus pada target jangka menengah sampai panjang dengan opsi setoran
                rutin.
              </p>
              <Link to="/tabungan-haji" className="text-link">
                Lihat detail tabungan haji
              </Link>
            </article>
            <article className="card">
              <h3>Tabungan Umroh</h3>
              <p>
                Skema fleksibel untuk target keberangkatan lebih cepat dan terukur.
              </p>
              <Link to="/tabungan-umroh" className="text-link">
                Lihat detail tabungan umroh
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
