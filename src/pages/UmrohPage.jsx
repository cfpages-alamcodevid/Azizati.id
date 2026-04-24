import ProductPageTemplate from "../components/ProductPageTemplate";

export default function UmrohPage() {
  return (
    <ProductPageTemplate
      eyebrow="Tabungan Umroh"
      title="Program Menabung Umroh Fleksibel"
      description="Atur target keberangkatan umroh dengan simulasi cepat dan skema setoran yang ringan."
      features={[
        "Target keberangkatan lebih cepat sesuai kemampuan",
        "Pilihan produk bank dengan keunggulan cicilan/fleksibilitas",
        "Konsultasi gratis untuk pemilihan produk",
      ]}
      ctaText="Simulasikan Tabungan Umroh"
    />
  );
}
