import { Link } from "react-router-dom";
import {
  CheckCircleIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  SparklesIcon,
  StarIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import SectionTitle from "./ui/SectionTitle";

export default function ProductPageTemplate({
  eyebrow,
  title,
  description,
  features,
  ctaText,
  consultTitle,
  consultDescription,
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
                Pelajari Detail
              </Link>
            </div>
          </div>
          <div className="product-visual-card product-visual-card-strong">
            <div className="product-pattern product-pattern-strong" />
            <div className="product-float-badge">
              <SparklesIcon className="inline-icon" />
              Program Terpercaya
            </div>
            <div className="product-platform-badge">
              <LockClosedIcon className="inline-icon" />
              Mitra Resmi
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
              <article className="card product-feature-card" key={feature.title}>
                <feature.icon className="card-icon" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="product-consult-shell section-gap-top">
          <div className="product-consult-copy">
            <h3>{consultTitle}</h3>
            <p>{consultDescription}</p>
            <div className="product-mini-points">
              <p>
                <ClockIcon className="inline-icon" />
                Layanan konsultasi responsif.
              </p>
              <p>
                <ShieldCheckIcon className="inline-icon" />
                Pendampingan proses pendaftaran.
              </p>
            </div>
          </div>
          <article className="card product-consult-card">
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
            <div className="product-mini-points product-mini-points-compact">
              <p>
                <DevicePhoneMobileIcon className="inline-icon" />
                Konsultasi awal tanpa biaya.
              </p>
              <p>
                <StarIcon className="inline-icon" />
                Pemilihan bank yang paling cocok.
              </p>
            </div>
            <div className="cta-row">
              <Link to="/pendaftaran" className="btn btn-primary btn-block">
                Hubungi Saya
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
