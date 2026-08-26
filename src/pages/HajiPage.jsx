import ProductPageTemplate from "../components/ProductPageTemplate";
import {
  BellAlertIcon,
  CalendarDaysIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function HajiPage() {
  const brand = {
    id: "bsi",
    name: "Bank Syariah Indonesia",
    shortName: "BSI",
    logo: "/images/banks/bsi.svg",
  };

  return (
    <ProductPageTemplate
      eyebrow="Tabungan Haji"
      title="BSI Tabungan Haji Indonesia"
      description="Tabungan dalam mata uang rupiah atau dolar AS untuk membantu perencanaan ibadah Haji, dengan setoran awal minimum Rp100.000 untuk rekening rupiah."
      features={[
        {
          title: "Setoran Ringan dan Fleksibel",
          description: "Setoran awal minimum Rp100.000. Setoran berikutnya minimum Rp10.000 di cabang atau Rp1 melalui e-channel untuk rekening rupiah.",
          icon: CalendarDaysIcon,
        },
        {
          title: "Bebas Biaya Admin",
          description: "Tidak ada biaya administrasi bulanan. Produk menggunakan akad Mudharabah.",
          icon: ShieldCheckIcon,
        },
        {
          title: "Pilihan untuk Anak",
          description: "Anak di bawah 17 tahun diakomodasi melalui BSI Tabungan Haji Muda Indonesia, dengan program pembukaan mulai Rp50.000 hingga 31 Desember 2026.",
          icon: BellAlertIcon,
        },
      ]}
      ctaText="Simulasikan Tabungan Haji"
      consultTitle="Pilih Produk BSI Sesuai Usia"
      consultDescription="Bandingkan pilihan untuk dewasa dan anak, lalu sesuaikan target setoran dengan kemampuan keluarga."
      brand={brand}
      officialUrl="https://www.bankbsi.co.id/produk%26layanan/produk/bsi-tabungan-haji-indonesia"
      sourceLinks={[
        {
          label: "BSI Tabungan Haji Indonesia",
          url: "https://www.bankbsi.co.id/produk%26layanan/produk/bsi-tabungan-haji-indonesia",
        },
        {
          label: "Program BSI Tabungan Haji Muda 2026",
          url: "https://www.bankbsi.co.id/promo/menabung-sejak-dini-lebih-cepat-ke-tanah-suci-dengan-bsi-tabungan-haji-muda-indonesia",
        },
      ]}
    />
  );
}
