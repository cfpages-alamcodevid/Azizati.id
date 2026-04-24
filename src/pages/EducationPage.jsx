import { useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";

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
        <SectionTitle
          eyebrow="Edukasi"
          title="Syarat & FAQ Tabungan Ibadah"
          description="Informasi dasar sebelum Anda memulai pendaftaran."
        />

        <div className="grid cards-2">
          <article className="card">
            <h3>Syarat Pendaftaran</h3>
            <ul className="list">
              {requirements.map((item) => (
                <li key={item}>{item}</li>
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
                  {openIndex === index ? <span>{faq.answer}</span> : null}
                </button>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
