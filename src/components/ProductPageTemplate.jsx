import { Link } from "react-router-dom";
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
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        <div className="grid cards-2">
          <article className="card">
            <h3>Keunggulan Program</h3>
            <ul className="list">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h3>Langkah Berikutnya</h3>
            <p>
              Lanjutkan ke simulator untuk menghitung estimasi setoran bulanan, kemudian
              kirim pendaftaran agar tim Azizati membantu proses pembukaan rekening.
            </p>
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
