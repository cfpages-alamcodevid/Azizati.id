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
    <section className="py-20">
      <div className="container">
        <div className="max-w-[72ch] mx-auto text-center mb-8">
          <SectionTitle
            eyebrow="Edukasi"
            title="Syarat & FAQ Tabungan Ibadah"
            description="Informasi dasar sebelum Anda memulai pendaftaran."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="bg-white border-t-3 border-[#cfa93f] border rounded-xl p-4 shadow-soft">
            <h3 className="text-lg font-bold text-text-heading mb-4">
              Syarat Pendaftaran
            </h3>
            <ul className="grid gap-3">
              {requirements.map((item) => (
                <li key={item} className="inline-flex items-start gap-2">
                  <CheckBadgeIcon className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-white border-t-3 border-[#cfa93f] border rounded-xl p-4 shadow-soft">
            <h3 className="text-lg font-bold text-text-heading mb-4">
              Pertanyaan Umum
            </h3>
            <div className="grid gap-3">
              {faqs.map((faq, index) => (
                <button
                  key={faq.question}
                  className="text-left border border-[#e7dbc3] rounded-lg p-4 bg-white grid gap-2 hover:bg-[#fbf9f5] transition-all"
                  onClick={() => setOpenIndex(index)}
                  type="button"
                >
                  <p className="font-heading font-bold text-text-heading">
                    {faq.question}
                  </p>
                  {openIndex === index ? (
                    <span className="text-text-body text-sm leading-relaxed">
                      {faq.answer}
                    </span>
                  ) : null}
                  <ChevronDownIcon
                    className={`w-4 h-4 text-amber-800 justify-self-end ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ))}
            </div>
          </article>
        </div>

        <article className="mt-4 bg-white border-t-3 border-[#cfa93f] border rounded-xl p-5 shadow-soft">
          <h3 className="text-lg font-bold text-text-heading mb-2">
            Sudah siap mulai?
          </h3>
          <p className="text-text-body mb-4">
            Lanjut ke simulator untuk menghitung estimasi tabungan, lalu kirim
            pendaftaran agar tim kami bantu proses berikutnya.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/simulator"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold bg-gradient-to-r from-[#eedc82] via-[#cfa93f] to-[#8f6c18] text-[#241d0f] hover:brightness-110 transition-all"
            >
              Buka Simulator
            </Link>
            <Link
              to="/pendaftaran"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold border border-[#d7c29a] text-[#2a2213] hover:bg-[#fbf1db] transition-all"
            >
              Lanjut Pendaftaran
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}