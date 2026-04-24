import { useEffect, useState } from "react";
import {
  ArrowRightIcon,
  BanknotesIcon,
  CalculatorIcon,
  CheckBadgeIcon,
  CubeIcon,
  GlobeAltIcon,
  LockClosedIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import SectionTitle from "../components/ui/SectionTitle";
import { banks, travelPackages, tierLabels, tierColors } from "../data/banks";
import { useSimulatorStore } from "../store/simulatorStore";

const formatRupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

const formatCurrencyInput = (value) => {
  if (!value || value === 0) return "";
  return value.toLocaleString("id-ID");
};

const parseCurrencyInput = (value) => {
  const digits = value.replace(/[^\d]/g, "");
  return digits ? Number(digits) : 0;
};

const DetailTabs = ({ pkg }) => {
  const [activeTab, setActiveTab] = useState("fasilitas");

  const tabs = [
    { id: "fasilitas", label: "Fasilitas" },
    { id: "penerbangan", label: "Penerbangan" },
    { id: "included", label: "Termasuk" },
  ];

  return (
    <div className="bg-white border border-[#e6d7ba] rounded-xl overflow-hidden shadow-soft">
      <div className="flex border-b border-[#e6d7ba]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-4 py-2.5 text-sm font-bold transition-all ${
              activeTab === tab.id
                ? "bg-amber-50 text-amber-800 border-b-2 border-amber-600"
                : "text-text-body hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {activeTab === "fasilitas" && (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {pkg.fasilitas.map((item, i) => (
              <li key={i} className="inline-flex items-start gap-2 text-sm">
                <CheckBadgeIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
        {activeTab === "penerbangan" && (
          <div className="flex items-center gap-3">
            <GlobeAltIcon className="w-8 h-8 text-amber-700" />
            <div>
              <p className="font-bold text-text-heading">{pkg.penerbangan}</p>
            </div>
          </div>
        )}
        {activeTab === "included" && (
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {pkg.included.map((item, i) => (
              <li key={i} className="inline-flex items-start gap-2 text-sm">
                <CheckBadgeIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default function SimulatorPage() {
  const {
    goalType,
    targetYears,
    totalCost,
    packageId,
    dpAmount,
    result,
    setGoalType,
    setTargetYears,
    setPackageId,
    setDpAmount,
    runSimulation,
  } = useSimulatorStore();

  useEffect(() => {
    runSimulation();
  }, [goalType, targetYears, totalCost, packageId, dpAmount, runSimulation]);

  const packages = travelPackages[goalType] || [];
  const selectedPackage = packages.find((p) => p.id === packageId);

  const topRecommendation = result[0];
  const topBank = banks.find((entry) => entry.id === topRecommendation?.bankId);
  const rangeProgress = ((targetYears - 1) / 9) * 100;
  const effectiveCost = Math.max(totalCost - dpAmount, 0);

  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-[72ch] mx-auto text-center mb-8">
          <SectionTitle
            eyebrow="Simulator"
            title="Rencanakan Perjalanan Suci"
            description="Ketahui estimasi setoran bulanan Anda untuk mencapai target Haji atau Umroh dengan presisi."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-3 space-y-4">
            <article className="bg-white border-t-3 border-[#cfa93f] border rounded-xl p-5 shadow-soft">
              <h3 className="text-base font-bold text-text-heading inline-flex items-center gap-1 mb-4">
                <CalculatorIcon className="w-4 h-4 text-amber-800" />
                Kalkulator Tabungan
              </h3>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-body mb-2">
                    Tujuan Ibadah
                  </label>
                  <div className="grid grid-cols-2 gap-1 p-1 border border-[#e8dcc6] rounded-xl bg-[#f7f4ee]">
                    <button
                      type="button"
                      className={`px-3 py-2.5 rounded-lg font-bold border transition-all ${
                        goalType === "haji"
                          ? "bg-white border-[#e3d2ab] text-amber-800 shadow-soft"
                          : "border-transparent text-[#706759]"
                      }`}
                      onClick={() => setGoalType("haji")}
                    >
                      Haji
                    </button>
                    <button
                      type="button"
                      className={`px-3 py-2.5 rounded-lg font-bold border transition-all ${
                        goalType === "umroh"
                          ? "bg-white border-[#e3d2ab] text-amber-800 shadow-soft"
                          : "border-transparent text-[#706759]"
                      }`}
                      onClick={() => setGoalType("umroh")}
                    >
                      Umroh
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-body mb-2">
                    Pilih Paket Travel
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {packages.map((pkg) => (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setPackageId(pkg.id)}
                        className={`p-4 rounded-lg border text-left transition-all ${
                          packageId === pkg.id
                            ? "bg-amber-50 border-amber-600 ring-2 ring-amber-500/30"
                            : "bg-white border-[#e8dcc6] hover:border-amber-400"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-bold uppercase tracking-wider ${tierColors[pkg.tier]}`}>
                            {tierLabels[pkg.tier]}
                          </span>
                        </div>
                        <p className="text-lg font-bold text-text-heading">
                          {formatRupiah(pkg.price)}
                        </p>
                        <p className="text-xs text-text-body mt-1">
                          {pkg.name}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {selectedPackage && (
              <article>
                <h4 className="text-sm font-bold text-text-heading mb-2">
                  Detail Paket: {selectedPackage.name}
                </h4>
                <DetailTabs pkg={selectedPackage} />
              </article>
            )}

            <div>
              <label className="block text-sm font-medium text-text-body mb-2">
                DP (Uang Muka) Awal
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-body font-medium">
                  Rp
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={formatCurrencyInput(dpAmount)}
                  onChange={(e) => setDpAmount(parseCurrencyInput(e.target.value))}
                  className="w-full border border-[#e8dcc6] rounded-lg pl-10 pr-3 py-2.5 bg-[#fbfaf8] focus:outline-none focus:ring-2 focus:ring-amber-500/30 text-lg font-medium"
                  placeholder="0"
                />
              </div>
              <p className="text-xs text-text-body mt-1">
                Masukkan jumlah uang muka yang ingin Anda bayarkan di awal.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-body mb-2">
                Target Waktu Keberangkatan
              </label>
              <div className="relative pt-8">
                <div
                  className="absolute top-0 left-0 rounded-full px-2 py-1 text-xs font-extrabold bg-gradient-to-r from-[#eedc82] to-[#cfa93f] text-[#2b220e] whitespace-nowrap"
                  style={{ left: `${rangeProgress}%`, transform: "translateX(-50%)" }}
                >
                  {targetYears} Tahun
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={targetYears}
                  onChange={(e) => setTargetYears(Number(e.target.value))}
                  className="w-full accent-[#cfa93f]"
                />
                <div className="flex justify-between text-sm text-[#8d8372] mt-1">
                  <span>1 Tahun</span>
                  <span>10 Tahun</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid gap-3">
            <article className="bg-white border border-[#e6d7ba] rounded-xl p-4 shadow-soft">
              <p className="text-xs font-extrabold uppercase tracking-widest text-amber-800">
                Estimasi Setoran Bulanan
              </p>
              <p className="text-2xl font-heading font-extrabold text-amber-900 mt-1">
                {topRecommendation
                  ? formatRupiah(topRecommendation.monthlyContribution)
                  : "Rp 0"}
              </p>
              <div className="mt-3 pt-3 border-t border-dashed border-[#e5d6b6] grid gap-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-body">Harga Paket</span>
                  <span className="font-medium">{formatRupiah(totalCost)}</span>
                </div>
                {dpAmount > 0 && (
                  <div className="flex justify-between text-green-700">
                    <span>DP (dibayar di awal)</span>
                    <span className="font-medium">-{formatRupiah(dpAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-text-heading">
                  <span>Total Ditabung</span>
                  <span>{formatRupiah(effectiveCost)}</span>
                </div>
              </div>
            </article>

            <article className="bg-gradient-to-b from-[#133048] to-[#11263a] rounded-xl p-4">
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/95 text-xs font-bold text-[#5d533f] mb-3">
                <SparklesIcon className="w-3 h-3" />
                Mitra Rekomendasi
              </div>
              <div className="min-h-[140px] border border-[#eedc82]/45 rounded-xl relative overflow-hidden bg-[radial-gradient(circle_at_50%_20%,rgba(238,220,130,0.3),transparent_40%)]">
                <LockClosedIcon className="w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#f2d782]" />
              </div>
              <h3 className="text-base font-bold text-[#172431] mt-2">
                {topBank?.name ?? "Bank Mitra"}
              </h3>
              <p className="text-sm text-[#34485b]">
                {topRecommendation?.reason ??
                  "Jalankan simulasi untuk melihat rekomendasi."}
              </p>
              <button
                type="button"
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg font-bold border border-[#d7c29a] text-[#2a2213] hover:bg-[#fbf1db] transition-all mt-2"
              >
                <BanknotesIcon className="w-4 h-4" />
                Buka Rekening Sekarang
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </article>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {result.slice(0, 3).map((item) => {
            const bank = banks.find((entry) => entry.id === item.bankId);
            return (
              <article
                key={item.bankId}
                className="bg-white border-t-3 border-[#cfa93f] border rounded-xl p-4 shadow-soft"
              >
                <h3 className="text-base font-bold text-text-heading">
                  {bank?.shortName}
                </h3>
                <p className="text-sm font-medium text-amber-900">
                  {formatRupiah(item.monthlyContribution)} / bulan
                </p>
                <p className="inline-flex items-start gap-2 text-sm mt-2">
                  <CheckBadgeIcon className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
                  {item.reason}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}