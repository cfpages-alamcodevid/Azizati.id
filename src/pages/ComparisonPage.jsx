import SectionTitle from "../components/ui/SectionTitle";
import { banks } from "../data/banks";

const formatRupiah = (value) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(
    value,
  );

export default function ComparisonPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Perbandingan"
          title="Bandingkan Bank Syariah"
          description="Ringkasan produk agar Anda bisa memilih bank yang paling sesuai kebutuhan."
        />

        <div className="table-wrap">
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

        <div className="grid cards-2">
          {banks.map((bank) => (
            <article key={bank.id} className="card">
              <h3>{bank.name}</h3>
              <p>{bank.suitableFor}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
