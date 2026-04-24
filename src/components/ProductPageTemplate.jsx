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
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
          <div className="lg:col-span-2">
            <div className="max-w-[72ch] mx-auto lg:mx-0 text-center lg:text-left mb-4">
              <SectionTitle
                eyebrow={eyebrow}
                title={title}
                description={description}
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/simulator"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold bg-gradient-to-r from-[#eedc82] via-[#cfa93f] to-[#8f6c18] text-[#241d0f] hover:brightness-110 transition-all"
              >
                {ctaText}
              </Link>
              <Link
                to="/pendaftaran"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold border border-[#d7c29a] text-[#2a2213] hover:bg-[#fbf1db] transition-all"
              >
                Pelajari Detail
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3 relative min-h-[360px] rounded-2xl border border-[#e6d9be] overflow-hidden shadow-card bg-[radial-gradient(circle_at_50%_5%,rgba(238,220,130,0.55),transparent_35%),linear-gradient(180deg,#ffffff,#f7f0e1)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(238,220,130,0.45),transparent_26%),linear-gradient(145deg,#26211b_0%,#17130f_65%,#4e4233_100%)]" />
            <div className="absolute left-1/2 top-[16%] -translate-x-1/2 w-52 h-52 rounded-lg bg-gradient-to-r from-[#2b251d] via-[#c8a43d] to-[#2b251d] shadow-xl" style={{ background: "linear-gradient(90deg,#2b251d 0%,#2b251d 28%,#c8a43d 28%,#c8a43d 33%,#2b251d 33%,#2b251d 67%,#c8a43d 67%,#c8a43d 72%,#2b251d 72%,#2b251d 100%)" }} />
            <div className="absolute left-1/2 top-[52%] -translate-x-1/2 w-64 h-20 bg-white rounded-b-[120px] shadow[-8px_0_0_0_#2b251d_inset]" />
            <div className="absolute left-4 bottom-4 inline-flex items-center gap-1 px-3 py-2 rounded-full border border-[#e6d8bb] bg-white text-sm font-bold">
              <SparklesIcon className="w-4 h-4" />
              Program Terpercaya
            </div>
            <div className="absolute left-4 right-4 bottom-4 inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-[#e6d8bb] bg-white/95 text-sm font-bold">
              <LockClosedIcon className="w-4 h-4" />
              Mitra Resmi
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="max-w-[72ch] mx-auto text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-heading">
              Keunggulan Program
            </h2>
            <p className="text-text-body mt-2">
              Dirancang untuk membantu Anda menabung lebih disiplin dan lebih tenang.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="bg-white border-t-3 border-[#cfa93f] border rounded-xl p-4 shadow-soft"
              >
                <feature.icon className="w-6 h-6 text-amber-800 mb-2" />
                <h3 className="text-base font-bold text-text-heading">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-body mt-1">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
          <div className="lg:col-span-2 rounded-2xl border border-[#d7b24c] p-5 text-white bg-gradient-to-br from-[#d8b245] to-[#b58612]">
            <h3 className="text-lg font-bold text-white">{consultTitle}</h3>
            <p className="text-white/90 mt-2">{consultDescription}</p>
            <div className="grid gap-2 mt-4">
              <p className="inline-flex items-center gap-2 text-sm">
                <ClockIcon className="w-4 h-4" />
                Layanan konsultasi responsif.
              </p>
              <p className="inline-flex items-center gap-2 text-sm">
                <ShieldCheckIcon className="w-4 h-4" />
                Pendampingan proses pendaftaran.
              </p>
            </div>
          </div>
          <article className="lg:col-span-3 bg-white border-t-3 border-[#cfa93f] border rounded-xl p-4 shadow-soft">
            <h3 className="text-base font-bold text-text-heading inline-flex items-center gap-1 mb-3">
              <WalletIcon className="w-4 h-4 text-amber-800" />
              Apa yang Anda Dapatkan
            </h3>
            <ul className="grid gap-2 mb-3">
              <li className="inline-flex items-start gap-2 text-sm">
                <CheckCircleIcon className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
                Simulasi tabungan sesuai target pribadi.
              </li>
              <li className="inline-flex items-start gap-2 text-sm">
                <CheckCircleIcon className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
                Rekomendasi bank berdasarkan profil kebutuhan.
              </li>
              <li className="inline-flex items-start gap-2 text-sm">
                <CheckCircleIcon className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
                Pendampingan proses pendaftaran oleh tim Azizati.
              </li>
            </ul>
            <div className="grid gap-2 mt-3">
              <p className="inline-flex items-center gap-2 text-sm">
                <DevicePhoneMobileIcon className="w-4 h-4" />
                Konsultasi awal tanpa biaya.
              </p>
              <p className="inline-flex items-center gap-2 text-sm">
                <StarIcon className="w-4 h-4" />
                Pemilihan bank yang paling cocok.
              </p>
            </div>
            <Link
              to="/pendaftaran"
              className="inline-flex items-center justify-center gap-2 w-full mt-3 px-4 py-2.5 rounded-xl font-bold bg-gradient-to-r from-[#eedc82] via-[#cfa93f] to-[#8f6c18] text-[#241d0f] hover:brightness-110 transition-all"
            >
              Hubungi Saya
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}