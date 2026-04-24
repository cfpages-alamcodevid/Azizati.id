import { useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import { ChevronDownIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const requirements = [
  "KTP aktif",
  "NPWP (jika disyaratkan bank)",
  "Setoran awal sesuai produk bank",
  "Nomor telepon dan email aktif",
];

const faqs = [
  {
    question: "Apakah pendaftaran melalui Azizati berbayar?",
    answer: "Tidak. Layanan konsultasi dan pendampingan dasar di Azizati tidak dipungut biaya.",
  },
  {
    question: "Berapa minimal setoran bulanan?",
    answer: "Tergantung produk bank, namun umumnya mulai dari Rp100.000 per bulan.",
  },
  {
    question: "Apakah data saya aman?",
    answer: "Data hanya digunakan untuk proses follow-up pendaftaran dan tidak dibagikan tanpa persetujuan.",
  },
];

export default function EducationPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section">
      <div className="container">
        <div className="section-title center">
          <SectionTitle
            eyebrow="Edukasi"
            title="Syarat & FAQ Tabungan Ibadah"
            description="Informasi dasar sebelum Anda memulai pendaftaran."
          />
        </div>

        <div className="grid cards-2">
          <article className="card">
            <h3>Syarat Pendaftaran</h3>
            <ul className="list">
              {requirements.map((item) => (
                <li key={item} className="list-with-icon">
                  <CheckBadgeIcon className="list-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h3>Pertanyaan Umum</h3>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <button
                  className="faq-item"
                  key={faq.question}
                  onClick={() => setOpenIndex(index)}
                  type="button"
                >
                  <p>{faq.question}</p>
                  <ChevronDownIcon className={`faq-chevron ${openIndex === index ? "open" : ""}`} />
                  {openIndex === index ? <span>{faq.answer}</span> : null}
                </button>
              ))}
            </div>
          </article>
        </div>

        <article className="card cta-card">
          <h3>Sudah siap mulai?</h3>
          <p>
            Lanjut ke simulator untuk menghitung estimasi tabungan, lalu kirim pendaftaran
            agar tim kami bantu proses berikutnya.
          </p>
          <div className="cta-row">
            <Link to="/simulator" className="btn btn-primary">
              Buka Simulator
            </Link>
            <Link to="/pendaftaran" className="btn btn-secondary">
              Lanjut Pendaftaran
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
