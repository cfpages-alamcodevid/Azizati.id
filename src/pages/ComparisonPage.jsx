import {
  BuildingLibraryIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import SectionTitle from "../components/ui/SectionTitle";
import { banks } from "../data/banks";

const formatRupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);

export default function ComparisonPage() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-[72ch] mx-auto text-center mb-8">
          <SectionTitle
            eyebrow="Perbandingan"
            title="Perbandingan Bank Syariah"
            description="Temukan mitra perbankan yang paling sesuai dengan rencana tabungan Haji dan Umroh Anda."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {banks.map((bank) => (
            <article
              key={bank.id}
              className="bg-white border-t-3 border-[#cfa93f] border rounded-xl p-4 flex flex-col gap-3 shadow-soft"
            >
              <div className="flex justify-between items-center">
                <BuildingLibraryIcon className="w-4 h-4 text-amber-800" />
                <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-[#f7e5ba] text-[#6f520a]">
                  Premium
                </span>
              </div>
              <h3 className="text-base font-bold text-text-heading">
                {bank.name}
              </h3>
              <p className="text-sm text-[#7a7263]">{bank.suitableFor}</p>

              <div className="grid gap-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8f8778]">
                  Tipe
                </p>
                <p className="text-sm">Umum</p>
              </div>
              <div className="grid gap-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8f8778]">
                  Setoran Awal
                </p>
                <p className="text-sm">{formatRupiah(bank.minSetoran)}</p>
              </div>
              <div className="grid gap-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8f8778]">
                  Produk Utama
                </p>
                <p className="text-sm">{bank.product}</p>
              </div>
              <div className="grid gap-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8f8778]">
                  Topik Dibahas
                </p>
                {bank.strengths.map((item) => (
                  <p key={item} className="inline-flex items-start gap-2 text-sm">
                    <CheckBadgeIcon className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
                    {item}
                  </p>
                ))}
              </div>

              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-lg font-bold border border-[#d7c29a] text-[#2a2213] hover:bg-[#fbf1db] transition-all"
              >
                Pilih Bank Ini
              </button>
            </article>
          ))}
        </div>

        <div className="mt-6 overflow-x-auto border border-[#e6d8bc] rounded-xl shadow-soft bg-white">
          <table className="w-full min-w-[760px] border-collapse">
            <thead className="bg-[#f8eed9]">
              <tr>
                <th className="text-left p-4 border-b border-[#eee4d1]">Bank</th>
                <th className="text-left p-4 border-b border-[#eee4d1]">Produk</th>
                <th className="text-left p-4 border-b border-[#eee4d1]">Setoran Awal</th>
                <th className="text-left p-4 border-b border-[#eee4d1]">Biaya Admin</th>
                <th className="text-left p-4 border-b border-[#eee4d1]">Keunggulan</th>
              </tr>
            </thead>
            <tbody>
              {banks.map((bank) => (
                <tr key={bank.id}>
                  <td className="p-4 border-b border-[#eee4d1] align-top">
                    {bank.shortName}
                  </td>
                  <td className="p-4 border-b border-[#eee4d1] align-top">
                    {bank.product}
                  </td>
                  <td className="p-4 border-b border-[#eee4d1] align-top">
                    {formatRupiah(bank.minSetoran)}
                  </td>
                  <td className="p-4 border-b border-[#eee4d1] align-top">
                    {bank.adminFee === 0
                      ? "Gratis"
                      : formatRupiah(bank.adminFee)}
                  </td>
                  <td className="p-4 border-b border-[#eee4d1] align-top">
                    {bank.strengths.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}