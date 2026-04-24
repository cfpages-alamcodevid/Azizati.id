import ProductPageTemplate from "../components/ProductPageTemplate";
import {
  CheckBadgeIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function UmrohPage() {
  return (
    <ProductPageTemplate
      eyebrow="Tabungan Umroh"
      title="Program Menabung Umroh Fleksibel"
      description="Atur target keberangkatan umroh dengan simulasi cepat dan skema setoran yang ringan."
      features={[
        {
          title: "Paket Cicilan Fleksibel",
          description: "Pilih tenor tabungan yang sesuai kemampuan agar target keberangkatan lebih realistis.",
          icon: GlobeAltIcon,
        },
        {
          title: "Bundling Travel Terpercaya",
          description: "Arahkan perencanaan ke mitra yang lebih siap untuk kebutuhan keberangkatan Anda.",
          icon: CheckBadgeIcon,
        },
        {
          title: "Perlindungan dan Ketertiban",
          description: "Fokus pada proses menabung yang rapi, terarah, dan lebih aman secara administratif.",
          icon: ShieldCheckIcon,
        },
      ]}
      ctaText="Simulasikan Tabungan Umroh"
      consultTitle="Rencanakan Umroh Anda Sekarang"
      consultDescription="Tim kami siap membantu Anda menyusun rencana tabungan terbaik agar proses menuju ibadah terasa lebih ringan."
    />
  );
}
