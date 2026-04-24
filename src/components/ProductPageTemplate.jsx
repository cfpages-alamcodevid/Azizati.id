import { Link } from "react-router-dom";
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import SectionTitle from "./ui/SectionTitle";

export default function ProductPageTemplate({
  eyebrow,
  title,
  description,
  features,
  ctaText,
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="product-hero-grid">
          <div>
            <SectionTitle eyebrow={eyebrow} title={title} description={description} />
            <div className="cta-row">
              <Link to="/simulator" className="btn btn-primary">
                {ctaText}
              </Link>
              <Link to="/pendaftaran" className="btn btn-secondary">
                Daftar Sekarang
              </Link>
            </div>
          </div>
          <div className="product-visual-card">
            <div className="product-pattern" />
            <div className="product-float-badge">
              <SparklesIcon className="inline-icon" />
              Program Terpercaya
            </div>
          </div>
        </div>

        <div className="section-gap-top">
          <div className="section-title center">
            <h2>Keunggulan Program</h2>
            <p>Dirancang untuk membantu Anda menabung lebih disiplin dan lebih tenang.</p>
          </div>
          <div className="grid cards-3">
            {features.map((feature) => (
              <article className="card" key={feature}>
                <ShieldCheckIcon className="card-icon" />
                <p>{feature}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid cards-2 section-gap-top">
          <article className="card">
            <h3 className="card-title-with-icon">
              <WalletIcon className="card-icon-sm" />
              Apa yang Anda Dapatkan
            </h3>
            <ul className="list">
              <li className="list-with-icon">
                <CheckCircleIcon className="list-icon" />
                Simulasi tabungan sesuai target pribadi.
              </li>
              <li className="list-with-icon">
                <CheckCircleIcon className="list-icon" />
                Rekomendasi bank berdasarkan profil kebutuhan.
              </li>
              <li className="list-with-icon">
                <CheckCircleIcon className="list-icon" />
                Pendampingan proses pendaftaran oleh tim Azizati.
              </li>
            </ul>
          </article>
          <article className="card">
            <h3>Langkah Berikutnya</h3>
            <p>
              Lanjutkan ke simulator untuk menghitung estimasi setoran bulanan, kemudian kirim
              pendaftaran agar tim Azizati membantu proses pembukaan rekening.
            </p>
            <div className="product-mini-points">
              <p>
                <CheckCircleIcon className="inline-icon" />
                Konsultasi awal tanpa biaya.
              </p>
              <p>
                <CheckCircleIcon className="inline-icon" />
                Pendampingan pemilihan bank yang paling cocok.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
