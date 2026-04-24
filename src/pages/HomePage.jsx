import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  ArrowTrendingUpIcon,
  BuildingLibraryIcon,
  CalculatorIcon,
  CheckBadgeIcon,
  ShieldCheckIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { banks } from "../data/banks";

const steps = [
  {
    title: "Simulasi Target",
    desc: "Hitung setoran bulanan berdasarkan target keberangkatan Anda.",
    icon: CalculatorIcon,
  },
  {
    title: "Bandingkan Bank",
    desc: "Lihat perbedaan fitur, biaya, dan keunggulan bank mitra syariah.",
    icon: BuildingLibraryIcon,
  },
  {
    title: "Daftar Praktis",
    desc: "Kirim data diri dan tim Azizati akan bantu tindak lanjut pembukaan.",
    icon: UserPlusIcon,
  },
];

const benefits = [
  {
    title: "Sesuai Syariah",
    desc: "Seluruh proses, mitra bank, dan pilihan produk disusun untuk memberi rasa tenang dan jelas.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Auto-Debet Praktis",
    desc: "Rencana menabung lebih konsisten dengan pendekatan setoran rutin dan target yang terukur.",
    icon: ArrowTrendingUpIcon,
  },
  {
    title: "Bebas Biaya Tersembunyi",
    desc: "Fokus pada transparansi setoran, manfaat produk, dan kecocokan bank untuk kebutuhan Anda.",
    icon: CheckBadgeIcon,
  },
];

const bankHighlights = [
  {
    key: "bsi",
    title: "BSI Tabungan Mabrur",
    bullets: ["Setoran awal ringan", "Bebas biaya admin", "Fasilitas auto-debet"],
  },
  {
    key: "muamalat",
    title: "Tabungan iB Hijrah Haji",
    bullets: ["Setoran awal fleksibel", "Notifikasi target", "Program cicilan tertentu"],
  },
  {
    key: "mandiri-syariah",
    title: "Tabungan Haji Muda",
    bullets: ["Panduan menabung", "Program reward", "Kemudahan setor digital"],
  },
  {
    key: "bni-syariah",
    title: "Tabungan Baitullah",
    bullets: ["Integrasi layanan", "Produk tematik ibadah", "Jaringan cabang luas"],
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-centered">
          <div className="hero-glow" />
          <div className="hero-copy-wrap hero-copy-center">
            <p className="hero-pill">
              <CheckBadgeIcon className="inline-icon" />
              Platform Agregator Syariah #1
            </p>
            <h1 className="hero-title-center">
              Nikmatnya Ibadah,
              <br />
              <span className="text-gradient">Tenang Menabungnya.</span>
            </h1>
            <p className="hero-copy hero-copy-center-text">
              Rencanakan perjalanan suci Haji dan Umroh Anda dengan kemudahan menabung
              terencana, transparan, dan sepenuhnya sesuai dengan prinsip syariah.
            </p>
            <div className="cta-row cta-row-center">
              <Link to="/simulator" className="btn btn-primary">
                <CalculatorIcon className="btn-icon" />
                Mulai Simulasi Sekarang
              </Link>
              <Link to="/perbandingan-bank" className="btn btn-secondary">
                <BuildingLibraryIcon className="btn-icon" />
                Bandingkan Bank Syariah
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-band">
        <div className="container">
          <div className="partner-band-inner">
            <p className="partner-band-title">Dipercaya oleh Bank Syariah Terkemuka</p>
            <div className="partner-rail">
              {banks.map((bank) => (
                <span className="partner-chip" key={bank.id}>
                  {bank.shortName}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="section-title center">
            <p className="eyebrow">Cara Kerja</p>
            <h2>Langkah Mudah Menabung</h2>
            <p>Wujudkan rencana ibadah dengan alur yang sederhana dan terarah.</p>
          </div>
          <div className="steps-grid-home">
            <div className="steps-connector" />
            {steps.map((step) => (
              <article className="step-card-home" key={step.title}>
                <div className="step-badge-home">
                  <step.icon className="step-badge-icon" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container home-simulator-highlight">
          <article className="card home-feature-copy">
            <h3>Simulator Tabungan Cerdas</h3>
            <p>
              Sesuaikan tujuan, biaya, dan tenor tabungan Anda. Sistem akan memberikan estimasi
              setoran bulanan dan rekomendasi bank yang relevan.
            </p>
            <ul className="list">
              <li className="list-with-icon">
                <CheckBadgeIcon className="list-icon" />
                Input fleksibel sesuai kondisi finansial
              </li>
              <li className="list-with-icon">
                <CheckBadgeIcon className="list-icon" />
                Estimasi setoran per bulan otomatis
              </li>
              <li className="list-with-icon">
                <CheckBadgeIcon className="list-icon" />
                Rekomendasi bank syariah berdasarkan skenario
              </li>
            </ul>
            <Link to="/simulator" className="btn btn-primary">
              Coba Simulator
            </Link>
          </article>
          <article className="card simulator-mini-card simulator-preview-large">
            <h4>Kalkulator Umroh</h4>
            <div className="sim-row">
              <span>Target Keberangkatan</span>
              <strong>3 Tahun</strong>
            </div>
            <div className="sim-row">
              <span>Estimasi Biaya</span>
              <strong>Rp 38.000.000</strong>
            </div>
            <div className="sim-estimate">Rp 1.055.556 / bulan</div>
          </article>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="section-title center">
            <p className="eyebrow">Perbandingan</p>
            <h2>Pilih Bank Syariah Terbaik</h2>
            <p>Bandingkan fitur, setoran awal, dan kemudahan dari berbagai mitra bank kami.</p>
          </div>
          <div className="grid cards-4">
            {bankHighlights.map((item) => {
              const bank = banks.find((entry) => entry.id === item.key);
              return (
                <article className="card bank-card-mini bank-card-home" key={item.key}>
                  <div className="bank-card-home-top">
                    <h3>{bank?.shortName}</h3>
                  </div>
                  <p className="bank-card-title">{item.title}</p>
                  <ul className="list">
                    {item.bullets.map((bullet) => (
                      <li className="list-with-icon" key={bullet}>
                        <CheckBadgeIcon className="list-icon" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link className="btn btn-secondary btn-block" to="/perbandingan-bank">
                    Lihat Detail
                  </Link>
                </article>
              );
            })}
          </div>
          <div className="home-link-center">
            <Link className="text-link" to="/perbandingan-bank">
              Lihat Semua Perbandingan Bank <ArrowRightIcon className="inline-icon" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="section-title center">
            <p className="eyebrow">Keunggulan Kami</p>
            <h2>Mengapa Memilih Azizati.id?</h2>
          </div>
          <div className="grid cards-3">
            {benefits.map((item) => (
              <article className="card benefit-card-home" key={item.title}>
                <div className="benefit-card-orb" />
                <div className="benefit-card-icon-wrap">
                  <item.icon className="card-icon" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
