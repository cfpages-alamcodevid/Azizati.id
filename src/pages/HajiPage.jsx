import ProductPageTemplate from "../components/ProductPageTemplate";
import {
  BellAlertIcon,
  CalendarDaysIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function HajiPage() {
  return (
    <ProductPageTemplate
      eyebrow="Tabungan Haji"
      title="Program Menabung Haji Lebih Terarah"
      description="Rancang tabungan jangka menengah-panjang untuk mempersiapkan biaya haji dengan disiplin."
      features={[
        {
          title: "Fasilitas Auto-Debet",
          description: "Bangun disiplin menabung jangka panjang dengan pola setoran yang lebih konsisten.",
          icon: CalendarDaysIcon,
        },
        {
          title: "Bebas Biaya Admin",
          description: "Jaga fokus pada akumulasi dana ibadah tanpa distraksi biaya yang tidak perlu.",
          icon: ShieldCheckIcon,
        },
        {
          title: "Notifikasi Porsi",
          description: "Lebih mudah memonitor kesiapan tabungan dan progres menuju target pendaftaran.",
          icon: BellAlertIcon,
        },
      ]}
      ctaText="Simulasikan Tabungan Haji"
      consultTitle="Rencanakan Haji Anda Sejak Dini"
      consultDescription="Masa tunggu yang panjang menuntut persiapan matang. Mulai langkah pertama Anda dengan tabungan yang lebih terarah."
    />
  );
}
