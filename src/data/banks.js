export const banks = [
  {
    id: "bsi",
    name: "Bank Syariah Indonesia",
    shortName: "BSI",
    product: "Tabungan Haji / Umroh",
    minSetoran: 100000,
    adminFee: 0,
    strengths: [
      "Jaringan luas nasional",
      "Fitur tabungan haji prioritas",
      "Integrasi ekosistem syariah",
    ],
    suitableFor: "Nasabah yang ingin layanan komprehensif dan skala nasional.",
  },
  {
    id: "muamalat",
    name: "Bank Muamalat",
    shortName: "Muamalat",
    product: "Tabungan iB Hijrah Haji / Umroh",
    minSetoran: 100000,
    adminFee: 0,
    strengths: [
      "Paket cicilan umroh",
      "Asuransi perjalanan opsi tambahan",
      "Program promo travel tertentu",
    ],
    suitableFor: "Nasabah yang fokus paket umroh fleksibel dan cicilan.",
  },
  {
    id: "mandiri-syariah",
    name: "Mandiri Syariah",
    shortName: "Mandiri Syariah",
    product: "Tabungan Mabrur",
    minSetoran: 100000,
    adminFee: 0,
    strengths: ["Autodebet bulanan", "Panduan menabung terstruktur", "Brand trust tinggi"],
    suitableFor: "Nasabah yang menginginkan auto-debet dan perencanaan disiplin.",
  },
  {
    id: "bni-syariah",
    name: "BNI Syariah",
    shortName: "BNI Syariah",
    product: "Tabungan Baitullah iB Hasanah",
    minSetoran: 100000,
    adminFee: 0,
    strengths: [
      "Promo berkala mitra travel",
      "Fitur tabungan tematik ibadah",
      "Proses onboarding sederhana",
    ],
    suitableFor: "Nasabah yang mengutamakan kemudahan pembukaan tabungan.",
  },
];

export const costReference = {
  haji: 56000000,
  umroh: 38000000,
};
