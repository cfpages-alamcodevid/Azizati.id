import ProductPageTemplate from "../components/ProductPageTemplate";
import {
  CheckBadgeIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function UmrohPage() {
  const brand = {
    id: "bsi",
    name: "Bank Syariah Indonesia",
    shortName: "BSI",
    logo: "/images/banks/bsi.svg",
  };

  return (
    <ProductPageTemplate
      eyebrow="Tabungan Umroh"
      title="BSI Tabungan Umrah"
      description="Tabungan transaksional rupiah atau dolar AS untuk memisahkan dan merencanakan dana Umrah sambil tetap dapat digunakan bertransaksi."
      features={[
        {
          title: "Setoran Awal Rp100.000",
          description: "Untuk rekening rupiah, setoran awal minimum Rp100.000 dan setoran berikutnya minimum Rp10.000.",
          icon: GlobeAltIcon,
        },
        {
          title: "Bebas Admin dan Akses Digital",
          description: "Bebas biaya administrasi bulanan, memakai akad Wadiah Yad Dhamanah, serta dilengkapi BYOND dan Kartu BSI Debit Mabrur.",
          icon: CheckBadgeIcon,
        },
        {
          title: "Bisa Dimulai Sejak Dini",
          description: "Rekening dapat dibuka sejak usia 0 tahun untuk membantu keluarga menyiapkan perjalanan Umrah secara bertahap.",
          icon: ShieldCheckIcon,
        },
      ]}
      ctaText="Simulasikan Tabungan Umroh"
      consultTitle="Rencanakan Umrah Bersama BSI"
      consultDescription="Susun target biaya dan waktu, lalu pilih nominal tabungan yang realistis untuk kondisi keluarga."
      brand={brand}
      officialUrl="https://www.bankbsi.co.id/index.php/produk%26layanan/tipe/individu/parent/produk/bsi-tabungan-umrah"
    />
  );
}
