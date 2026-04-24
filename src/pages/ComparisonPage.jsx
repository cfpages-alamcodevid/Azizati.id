import { BuildingLibraryIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import SectionTitle from "../components/ui/SectionTitle";
import { banks } from "../data/banks";

const formatRupiah = (value) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value);

export default function ComparisonPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Perbandingan"
          title="Perbandingan Bank Syariah"
          description="Temukan mitra perbankan yang paling sesuai dengan rencana tabungan Haji dan Umroh Anda."
        />

        <div className="grid cards-4">
          {banks.map((bank) => (
            <article key={bank.id} className="card compare-bank-card">
              <div className="compare-top">
                <BuildingLibraryIcon className="card-icon-sm" />
                <span className="compare-chip">Premium</span>
              </div>
              <h3>{bank.name}</h3>
              <p className="muted">{bank.suitableFor}</p>

              <div className="compare-meta">
                <p className="meta-label">Tipe</p>
                <p>Umum</p>
              </div>
              <div className="compare-meta">
                <p className="meta-label">Setoran Awal</p>
                <p>{formatRupiah(bank.minSetoran)}</p>
              </div>
              <div className="compare-meta">
                <p className="meta-label">Produk Utama</p>
                <p>{bank.product}</p>
              </div>
              <div className="compare-meta">
                <p className="meta-label">Topik Dibahas</p>
                {bank.strengths.map((item) => (
                  <p className="list-with-icon" key={item}>
                    <CheckBadgeIcon className="list-icon" />
                    {item}
                  </p>
                ))}
              </div>

              <button type="button" className="btn btn-secondary btn-block">
                Pilih Bank Ini
              </button>
            </article>
          ))}
        </div>

        <div className="table-wrap section-gap-top">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Bank</th>
                <th>Produk</th>
                <th>Setoran Awal</th>
                <th>Biaya Admin</th>
                <th>Keunggulan</th>
              </tr>
            </thead>
            <tbody>
              {banks.map((bank) => (
                <tr key={bank.id}>
                  <td>{bank.shortName}</td>
                  <td>{bank.product}</td>
                  <td>{formatRupiah(bank.minSetoran)}</td>
                  <td>{bank.adminFee === 0 ? "Gratis" : formatRupiah(bank.adminFee)}</td>
                  <td>{bank.strengths.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
