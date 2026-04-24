import { useEffect } from "react";
import {
  ArrowRightIcon,
  BanknotesIcon,
  CalculatorIcon,
  CheckBadgeIcon,
  LockClosedIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import SectionTitle from "../components/ui/SectionTitle";
import { banks } from "../data/banks";
import { useSimulatorStore } from "../store/simulatorStore";

const formatRupiah = (value) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value);

export default function SimulatorPage() {
  const {
    goalType,
    targetYears,
    totalCost,
    result,
    setGoalType,
    setTargetYears,
    setTotalCost,
    runSimulation,
  } = useSimulatorStore();

  useEffect(() => {
    runSimulation();
  }, [goalType, targetYears, totalCost, runSimulation]);

  const topRecommendation = result[0];
  const topBank = banks.find((entry) => entry.id === topRecommendation?.bankId);

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Simulator"
          title="Rencanakan Perjalanan Suci"
          description="Ketahui estimasi setoran bulanan Anda untuk mencapai target ibadah Haji atau Umroh dengan presisi."
        />

        <div className="simulator-layout">
          <article className="card simulator-main-card">
            <h3 className="card-title-with-icon">
              <CalculatorIcon className="card-icon-sm" />
              Kalkulator Tabungan
            </h3>
            <div className="form-stack">
              <div>
                <label>Tujuan Ibadah</label>
                <div className="segmented-control">
                  <button
                    type="button"
                    className={goalType === "haji" ? "segment active" : "segment"}
                    onClick={() => setGoalType("haji")}
                  >
                    Haji
                  </button>
                  <button
                    type="button"
                    className={goalType === "umroh" ? "segment active" : "segment"}
                    onClick={() => setGoalType("umroh")}
                  >
                    Umroh
                  </button>
                </div>
              </div>

              <label>
                Estimasi Biaya Saat Ini
                <input
                  type="number"
                  min={1000000}
                  step={500000}
                  value={totalCost}
                  onChange={(e) => setTotalCost(Number(e.target.value))}
                />
              </label>

              <div>
                <label>Target Waktu Keberangkatan</label>
                <div className="range-head">
                  <span>1 Tahun</span>
                  <strong>{targetYears} Tahun</strong>
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={targetYears}
                  onChange={(e) => setTargetYears(Number(e.target.value))}
                  className="range-input"
                />
                <div className="range-foot">
                  <span>1 Tahun</span>
                  <span>10 Tahun</span>
                </div>
              </div>
            </div>
          </article>

          <div className="simulator-side-stack">
            <article className="card simulator-estimate-card">
              <p className="eyebrow">Estimasi Setoran Bulanan</p>
              <p className="estimate-big">
                {topRecommendation
                  ? formatRupiah(topRecommendation.monthlyContribution)
                  : "Rp 0"}
              </p>
              <p>Perhitungan ini bersifat estimasi sesuai parameter input Anda saat ini.</p>
            </article>

            <article className="card simulator-featured-bank">
              <p className="badge-inline">
                <SparklesIcon className="inline-icon" />
                Mitra Rekomendasi
              </p>
              <div className="featured-bank-visual">
                <LockClosedIcon className="featured-bank-lock" />
              </div>
              <h3>{topBank?.name ?? "Bank Mitra"}</h3>
              <p>{topRecommendation?.reason ?? "Jalankan simulasi untuk melihat rekomendasi."}</p>
              <button type="button" className="btn btn-secondary">
                <BanknotesIcon className="btn-icon" />
                Buka Rekening Sekarang
                <ArrowRightIcon className="btn-icon" />
              </button>
            </article>
          </div>
        </div>

        <div className="grid cards-3 section-gap-top">
          {result.slice(0, 3).map((item) => {
            const bank = banks.find((entry) => entry.id === item.bankId);
            return (
              <article className="card" key={item.bankId}>
                <h3>{bank?.shortName}</h3>
                <p className="result-value">{formatRupiah(item.monthlyContribution)} / bulan</p>
                <p className="list-with-icon">
                  <CheckBadgeIcon className="list-icon" />
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
