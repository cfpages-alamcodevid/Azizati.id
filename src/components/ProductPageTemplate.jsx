import { Link } from "react-router-dom";
import SectionTitle from "./ui/SectionTitle";
import { CheckCircleIcon, ShieldCheckIcon, SparklesIcon } from "@heroicons/react/24/outline";

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
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        <div className="product-hero-band">
          <div>
            <p className="eyebrow">Program Terarah</p>
            <h3>Dirancang untuk membantu Anda menabung lebih disiplin dan tenang.</h3>
          </div>
          <SparklesIcon className="product-hero-icon" />
        </div>
        <div className="grid cards-2">
          <article className="card">
            <h3 className="card-title-with-icon">
              <ShieldCheckIcon className="card-icon-sm" />
              Keunggulan Program
            </h3>
            <ul className="list">
              {features.map((feature) => (
                <li key={feature} className="list-with-icon">
                  <CheckCircleIcon className="list-icon" />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h3>Langkah Berikutnya</h3>
            <p>
              Lanjutkan ke simulator untuk menghitung estimasi setoran bulanan, kemudian
              kirim pendaftaran agar tim Azizati membantu proses pembukaan rekening.
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
            <div className="cta-row">
              <Link to="/simulator" className="btn btn-primary">
                {ctaText}
              </Link>
              <Link to="/pendaftaran" className="btn btn-secondary">
                Daftar Sekarang
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
