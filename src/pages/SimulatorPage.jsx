import { useEffect } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import { banks } from "../data/banks";
import { useSimulatorStore } from "../store/simulatorStore";
import {
  BanknotesIcon,
  CalendarDaysIcon,
  CalculatorIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const formatRupiah = (value) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(
    value,
  );

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

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Simulator"
          title="Kalkulator Tabungan Haji & Umroh"
          description="Input tujuan dan target waktu, lalu lihat estimasi setoran bulanan serta rekomendasi bank."
        />

        <div className="grid cards-2">
          <article className="card">
            <h3 className="card-title-with-icon">
              <CalculatorIcon className="card-icon-sm" />
              Input Simulasi
            </h3>
            <div className="form-stack">
              <label>
                Tujuan
                <select value={goalType} onChange={(e) => setGoalType(e.target.value)}>
                  <option value="umroh">Umroh</option>
                  <option value="haji">Haji</option>
                </select>
              </label>

              <label>
                Target keberangkatan (tahun)
                <input
                  type="number"
                  min={1}
                  max={15}
                  value={targetYears}
                  onChange={(e) => setTargetYears(Number(e.target.value))}
                />
              </label>

              <label>
                Estimasi biaya total
                <input
                  type="number"
                  min={1000000}
                  step={500000}
                  value={totalCost}
                  onChange={(e) => setTotalCost(Number(e.target.value))}
                />
              </label>
            </div>
          </article>

          <article className="card">
            <h3 className="card-title-with-icon">
              <BanknotesIcon className="card-icon-sm" />
              Rekomendasi
            </h3>
            <div className="sim-summary">
              <p>
                <CalendarDaysIcon className="inline-icon" />
                Tenor: <strong>{targetYears} tahun</strong>
              </p>
              <p>
                <BanknotesIcon className="inline-icon" />
                Biaya target: <strong>{formatRupiah(totalCost)}</strong>
              </p>
            </div>
            <div className="result-stack">
              {result.map((item) => {
                const bank = banks.find((entry) => entry.id === item.bankId);

                return (
                  <div className="result-item" key={item.bankId}>
                    <p className="result-priority">Prioritas #{item.priority}</p>
                    <h4>{bank?.name}</h4>
                    <p className="result-value">
                      {formatRupiah(item.monthlyContribution)} / bulan
                    </p>
                    <p className="result-reason">
                      <CheckCircleIcon className="inline-icon" />
                      {item.reason}
                    </p>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
