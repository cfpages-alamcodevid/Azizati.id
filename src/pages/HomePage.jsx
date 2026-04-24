import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  BuildingLibraryIcon,
  CalculatorIcon,
  CheckBadgeIcon,
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

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid hero-grid-refined">
          <div className="hero-copy-wrap">
            <p className="eyebrow">Platform Agregator Syariah #1</p>
            <h1>
              Nikmatnya Ibadah,
              <br />
              <span className="text-gradient">Tenang Menabungnya.</span>
            </h1>
            <p className="hero-copy">
              Rencanakan perjalanan Haji dan Umroh dengan tabungan terstruktur, transparan,
              dan sesuai prinsip syariah.
            </p>
            <div className="cta-row">
              <Link to="/simulator" className="btn btn-primary">
                Mulai Simulasi
              </Link>
              <Link to="/perbandingan-bank" className="btn btn-secondary">
                Lihat Perbandingan Bank
              </Link>
            </div>
          </div>
          <div className="hero-visual-card">
            <div className="hero-orb hero-orb-1" />
            <div className="hero-orb hero-orb-2" />
            <div className="hero-diamond" />
            <div className="hero-badge">
              <CheckBadgeIcon className="inline-icon" />
              Nikmatnya Ibadah
            </div>
          </div>
        </div>
      </section>

      <section className="partner-band">
        <div className="container">
          <p>Dipercaya oleh bank syariah terkemuka: BSI, Muamalat, Mandiri Syariah, BNI Syariah</p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="section-title center">
            <p className="eyebrow">Cara Kerja</p>
            <h2>Langkah Mudah Menabung</h2>
            <p>Wujudkan rencana ibadah dengan alur yang sederhana dan terarah.</p>
          </div>
          <div className="grid cards-3">
            {steps.map((step) => (
              <article className="card" key={step.title}>
                <step.icon className="card-icon" />
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container simulator-preview">
          <article className="card">
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
          <article className="card simulator-mini-card">
            <h4>Kalkulator Umroh</h4>
            <div className="sim-row">
              <span>Target</span>
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
          </div>
          <div className="grid cards-4">
            {banks.map((bank) => (
              <article className="card bank-card-mini" key={bank.id}>
                <h3>{bank.shortName}</h3>
                <p className="muted">{bank.product}</p>
                <ul className="list">
                  {bank.strengths.slice(0, 2).map((item) => (
                    <li className="list-with-icon" key={item}>
                      <CheckBadgeIcon className="list-icon" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link className="text-link" to="/perbandingan-bank">
                  Lihat detail <ArrowRightIcon className="inline-icon" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
