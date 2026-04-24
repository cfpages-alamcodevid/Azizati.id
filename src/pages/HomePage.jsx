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
    title: "Sesuai syariah",
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
      <section className="py-18 relative overflow-hidden bg-gradient-to-b from-[#f7f0e4] to-[#f7f1e6]">
        <div className="container relative text-center">
          <div className="absolute inset-x-[20%] top-[15%] h-60 rounded-full bg-gradient-to-br from-[rgba(238,220,130,0.8)] via-[rgba(207,169,63,0.7)] to-[rgba(147,113,25,0.45)] blur-3xl opacity-30 pointer-events-none" />
          <div className="relative max-w-[860px] mx-auto grid gap-4 place-items-center">
            <p className="inline-flex items-center gap-2 w-fit border border-[#ded0b3] bg-[rgba(255,250,240,0.9)] rounded-full px-4 py-2 text-sm font-bold text-[#5d533f]">
              <CheckBadgeIcon className="w-4 h-4" />
              Platform Agregator Syariah #1
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-text-heading leading-tight">
              Nikmatnya Ibadah,
              <br />
              <span className="bg-gradient-to-r from-[#e7cc76] to-[#b88a1d] bg-clip-text text-transparent">
                Tenang Menabungnya.
              </span>
            </h1>
            <p className="max-w-[720px] text-text-body leading-relaxed">
              Rencanakan perjalanan suci Haji dan Umroh Anda dengan kemudahan menabung
              terencana, transparan, dan sepenuhnya sesuai dengan prinsip syariah.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-4">
              <Link
                to="/simulator"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold bg-gradient-to-r from-[#eedc82] via-[#cfa93f] to-[#8f6c18] text-[#241d0f] hover:brightness-110 transition-all"
              >
                <CalculatorIcon className="w-4 h-4" />
                Mulai Simulasi Sekarang
              </Link>
              <Link
                to="/perbandingan-bank"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold border border-[#d7c29a] bg-white text-[#2a2213] hover:bg-[#fbf1db] transition-all"
              >
                <BuildingLibraryIcon className="w-4 h-4" />
                Bandingkan Bank Syariah
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#edf0f4] border-y border-[#e0e5ea]">
        <div className="container">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#7c827f] mb-2">
              Dipercaya oleh Bank Syariah Terkemuka
            </p>
            <div className="flex flex-wrap justify-center gap-6 opacity-75">
              {banks.map((bank) => (
                <span key={bank.id} className="text-sm font-bold text-[#747c88]">
                  {bank.shortName}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-[72ch] mx-auto text-center mb-8">
            <p className="text-xs font-extrabold uppercase tracking-widest text-amber-800">
              Cara Kerja
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-heading mt-1">
              Langkah Mudah Menabung
            </h2>
            <p className="text-text-body leading-relaxed mt-2">
              Wujudkan rencana ibadah dengan alur yang sederhana dan terarah.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="absolute top-12 left-[16.66%] right-[16.66%] h-px bg-[#dacfb9] hidden md:block" />
            {steps.map((step) => (
              <article
                key={step.title}
                className="relative z-10 text-center grid gap-4"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-white border-4 border-[#f3ead9] flex items-center justify-center shadow-soft">
                  <step.icon className="w-9 h-9 text-[#8c6917]" />
                </div>
                <h3 className="text-lg font-bold text-text-heading">{step.title}</h3>
                <p className="text-text-body">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#fbf6ee] to-[#f7efe2] border-y border-[#e8decf]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
            <article className="md:col-span-2">
              <h3 className="text-xl font-bold text-text-heading mb-3">
                Simulator Tabungan Cerdas
              </h3>
              <p className="text-text-body mb-4">
                Sesuaikan tujuan, biaya, dan tenor tabungan Anda. Sistem akan memberikan
                estimasi setoran bulanan dan rekomendasi bank yang relevan.
              </p>
              <ul className="grid gap-3 mb-4">
                <li className="inline-flex items-start gap-2">
                  <CheckBadgeIcon className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span>Input fleksibel sesuai kondisi finansial</span>
                </li>
                <li className="inline-flex items-start gap-2">
                  <CheckBadgeIcon className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span>Estimasi setoran per bulan otomatis</span>
                </li>
                <li className="inline-flex items-start gap-2">
                  <CheckBadgeIcon className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span>Rekomendasi bank syariah berdasarkan skenario</span>
                </li>
              </ul>
              <Link
                to="/simulator"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold bg-gradient-to-r from-[#eedc82] via-[#cfa93f] to-[#8f6c18] text-[#241d0f] hover:brightness-110 transition-all"
              >
                Coba Simulator
              </Link>
            </article>
            <article className="md:col-span-3 bg-white border border-[#ddcfb3] rounded-2xl p-6 shadow-card">
              <h4 className="text-lg font-bold text-text-heading mb-4">
                Kalkulator Umroh
              </h4>
              <div className="flex justify-between gap-4 pb-3 border-b border-dashed border-[#eadabd]">
                <span className="text-text-body">Target Keberangkatan</span>
                <strong className="text-text-heading">3 Tahun</strong>
              </div>
              <div className="flex justify-between gap-4 pb-3 border-b border-dashed border-[#eadabd] mt-3">
                <span className="text-text-body">Estimasi Biaya</span>
                <strong className="text-text-heading">Rp 38.000.000</strong>
              </div>
              <div className="mt-4 bg-[#f9f1de] border border-[#e5d6b6] rounded-xl p-3 text-center font-extrabold text-amber-800">
                Rp 1.055.556 / bulan
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-[72ch] mx-auto text-center mb-8">
            <p className="text-xs font-extrabold uppercase tracking-widest text-amber-800">
              Perbandingan
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-heading mt-1">
              Pilih Bank Syariah Terbaik
            </h2>
            <p className="text-text-body leading-relaxed mt-2">
              Bandingkan fitur, setoran awal, dan kemudahan dari berbagai mitra bank kami.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {bankHighlights.map((item) => {
              const bank = banks.find((entry) => entry.id === item.key);
              return (
                <article
                  key={item.key}
                  className="bg-white border-t-3 border-[#cfa93f] border rounded-xl p-4 flex flex-col gap-3 shadow-soft"
                >
                  <div>
                    <h3 className="text-base font-bold text-text-heading">
                      {bank?.shortName}
                    </h3>
                    <p className="text-sm font-bold text-text-heading pb-2 border-b border-[#ebe1d0] mt-1">
                      {item.title}
                    </p>
                  </div>
                  <ul className="grid gap-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="inline-flex items-start gap-2 text-sm"
                      >
                        <CheckBadgeIcon className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/perbandingan-bank"
                    className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg font-bold border border-[#d7c29a] text-[#2a2213] text-sm hover:bg-[#fbf1db] transition-all"
                  >
                    Lihat Detail
                  </Link>
                </article>
              );
            })}
          </div>
          <div className="text-center mt-4">
            <Link
              to="/perbandingan-bank"
              className="inline-flex items-center gap-1 text-amber-800 font-bold hover:underline"
            >
              Lihat Semua Perbandingan Bank{" "}
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-[72ch] mx-auto text-center mb-8">
            <p className="text-xs font-extrabold uppercase tracking-widest text-amber-800">
              Keunggulan Kami
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-heading mt-1">
              Mengapa Memilih Azizati.id?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="relative overflow-hidden bg-white rounded-xl p-5 border border-[#e6d7ba] shadow-soft"
              >
                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[rgba(244,233,206,0.9)]" />
                <div className="relative z-10 w-14 h-14 rounded-full bg-[#f6ecdb] flex items-center justify-center mb-3">
                  <item.icon className="w-6 h-6 text-amber-800" />
                </div>
                <h3 className="text-base font-bold text-text-heading relative z-10">
                  {item.title}
                </h3>
                <p className="text-text-body text-sm mt-1 relative z-10">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}