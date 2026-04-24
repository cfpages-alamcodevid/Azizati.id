export const travelPackages = {
  umroh: [
    {
      id: "umroh-basic",
      name: "Paket Umroh Basic",
      tier: "basic",
      price: 28000000,
      fasilitas: [
        "Hotel bintang 3 (jarak 500m-1km Masjidil Haram)",
        "Kamar twin sharing",
        "Sarapan pagi",
        "Transport ACI",
        "Pembimbing perjalanan",
        "Grup berangkat minimal 25 orang",
      ],
      penerbangan: "Pesawat charter/ekonomi",
      included: ["Visa umroh", "Handling", "Manasik"],
    },
    {
      id: "umroh-standard",
      name: "Paket Umroh Standard",
      tier: "standard",
      price: 38000000,
      fasilitas: [
        "Hotel bintang 4 (jarak 200-500m Masjidil Haram)",
        "Kamar twin sharing",
        "Sarapan + makan siang",
        "Transport AC",
        "Pembimbing berpengalaman",
        "Grup berangkat minimal 15 orang",
      ],
      penerbangan: "Pesawat kelas ekonomi",
      included: ["Visa umroh", "Handling", "Manasik", "Ziarah", "Tour leader"],
    },
    {
      id: "umroh-executive",
      name: "Paket Umroh Executive",
      tier: "executive",
      price: 55000000,
      fasilitas: [
        "Hotel bintang 5 (jarak <200m Masjidil Haram)",
        "Kamar twin sharing/king bed",
        "Full board (3x makan)",
        "Transport private",
        "Tour leader eksklusif",
        "Private trip",
      ],
      penerbangan: "Pesawat kelas bisnis",
      included: ["Visa umroh", "Handling", "Manasik", "Ziarah", "Tour leader", "Porter", "Makanan halal 24/7"],
    },
  ],
  haji: [
    {
      id: "haji-basic",
      name: "Paket Haji Basic",
      tier: "basic",
      price: 45000000,
      fasilitas: [
        "Hotel bintang 3",
        "Kamar twin sharing",
        "Transportasi grup",
        "Pembimbing",
      ],
      penerbangan: "Pesawat kelas ekonomi",
      included: ["Visa Haji", "Handling", "Manasik"],
    },
    {
      id: "haji-standard",
      name: "Paket Haji Standard",
      tier: "standard",
      price: 56000000,
      fasilitas: [
        "Hotel bintang 4",
        "Kamar twin sharing",
        "Transport AC",
        "Tour leader",
      ],
      penerbangan: "Pesawat kelas ekonomi",
      included: ["Visa Haji", "Handling", "Manasik", "Ziarah"],
    },
    {
      id: "haji-executive",
      name: "Paket Haji Executive",
      tier: "executive",
      price: 85000000,
      fasilitas: [
        "Hotel bintang 5",
        "Suite/kamar premium",
        "Transport private",
        "Tour leader eksklusif",
      ],
      penerbangan: "Pesawat kelas bisnis",
      included: ["Visa Haji", "Handling", "Manasik", "Ziarah", "Porter", "Layanan 24/7"],
    },
  ],
};

export const tierLabels = {
  basic: "Basic",
  standard: "Standard",
  executive: "Executive",
};

export const tierColors = {
  basic: "text-blue-700",
  standard: "text-amber-700",
  executive: "text-purple-700",
};

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
      "Fitur tabungan Haji prioritas",
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
      "Paket cicilan Umroh",
      "Asuransi perjalanan (opsional)",
      "Program promo travel tertentu",
    ],
    suitableFor: "Nasabah yang fokus paket Umroh fleksibel dan cicilan.",
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
  Haji: 56000000,
  umroh: 38000000,
};

export const dpOptions = [
  { label: "Tanpa DP", value: 0 },
  { label: "Rp 1.000.000", value: 1000000 },
  { label: "Rp 2.500.000", value: 2500000 },
  { label: "Rp 5.000.000", value: 5000000 },
  { label: "Rp 7.500.000", value: 7500000 },
  { label: "Rp 10.000.000", value: 10000000 },
  { label: "Rp 15.000.000", value: 15000000 },
  { label: "Rp 20.000.000", value: 20000000 },
];