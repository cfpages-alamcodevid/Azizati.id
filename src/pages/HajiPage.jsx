import ProductPageTemplate from "../components/ProductPageTemplate";

export default function HajiPage() {
  return (
    <ProductPageTemplate
      eyebrow="Tabungan Haji"
      title="Program Menabung Haji Lebih Terarah"
      description="Rancang tabungan jangka menengah-panjang untuk mempersiapkan biaya haji dengan disiplin."
      features={[
        "Estimasi kebutuhan dana haji yang dapat disesuaikan",
        "Rekomendasi bank sesuai profil kebutuhan",
        "Pendampingan proses pembukaan rekening haji",
      ]}
      ctaText="Simulasikan Tabungan Haji"
    />
  );
}
