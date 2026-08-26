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
    id: "bsi-haji",
    brandId: "bsi",
    name: "Bank Syariah Indonesia",
    shortName: "BSI",
    logo: "/images/banks/bsi.svg",
    product: "BSI Tabungan Haji Indonesia",
    goals: ["haji"],
    segment: "Perorangan; usia di bawah 17 tahun memakai pilihan Haji Muda",
    akad: "Mudharabah",
    minSetoran: 100000,
    adminFee: 0,
    strengths: [
      "Setoran awal minimum Rp100.000",
      "Bebas biaya administrasi bulanan",
      "Akses melalui BYOND by BSI dan layanan digital BSI",
    ],
    suitableFor: "Perorangan yang menyiapkan dana dan pendaftaran porsi Haji.",
    officialUrl:
      "https://www.bankbsi.co.id/produk%26layanan/produk/bsi-tabungan-haji-indonesia",
  },
  {
    id: "bsi-haji-muda",
    brandId: "bsi",
    name: "Bank Syariah Indonesia",
    shortName: "BSI",
    logo: "/images/banks/bsi.svg",
    product: "BSI Tabungan Haji Muda Indonesia",
    goals: ["haji"],
    segment: "Anak di bawah 17 tahun",
    akad: "Mudharabah atau Wadiah",
    minSetoran: 50000,
    adminFee: 0,
    strengths: [
      "Pembukaan mulai Rp50.000 selama program hingga 31 Desember 2026",
      "Gratis biaya administrasi bulanan",
      "Terhubung SISKOHAT dan bebas biaya standing instruction",
    ],
    suitableFor: "Orang tua yang ingin menyiapkan tabungan Haji anak sejak dini.",
    officialUrl:
      "https://www.bankbsi.co.id/promo/menabung-sejak-dini-lebih-cepat-ke-tanah-suci-dengan-bsi-tabungan-haji-muda-indonesia",
  },
  {
    id: "bsi-umrah",
    brandId: "bsi",
    name: "Bank Syariah Indonesia",
    shortName: "BSI",
    logo: "/images/banks/bsi.svg",
    product: "BSI Tabungan Umrah",
    goals: ["umroh"],
    segment: "Perorangan, dapat dibuka sejak usia 0 tahun",
    akad: "Wadiah Yad Dhamanah",
    minSetoran: 100000,
    adminFee: 0,
    strengths: [
      "Setoran awal minimum Rp100.000",
      "Bebas biaya administrasi bulanan",
      "Fasilitas BYOND dan Kartu BSI Debit Mabrur",
    ],
    suitableFor: "Keluarga yang ingin memisahkan dana persiapan Umrah.",
    officialUrl:
      "https://www.bankbsi.co.id/index.php/produk%26layanan/tipe/individu/parent/produk/bsi-tabungan-umrah",
  },
  {
    id: "muamalat-haji",
    brandId: "muamalat",
    name: "Bank Muamalat",
    shortName: "Muamalat",
    logo: "/images/banks/muamalat.png",
    product: "Tabungan iB Hijrah Haji",
    goals: ["haji", "umroh"],
    segment: "Dewasa dan anak",
    akad: "Wadiah Yad Dhamanah",
    minSetoran: 50000,
    adminFee: 0,
    strengths: [
      "Terhubung dengan SISKOHAT",
      "Setoran melalui teller, e-banking, atau transfer terjadwal",
      "Bebas biaya layanan dan fasilitas autodebet",
    ],
    suitableFor: "Dewasa atau anak yang menginginkan setoran rutin maupun fleksibel.",
    officialUrl:
      "https://www.bankmuamalat.co.id/index.php/tabungan/tabungan-ib-hijrah-haji",
  },
];

export const bankBrands = [
  {
    id: "bsi",
    name: "Bank Syariah Indonesia",
    logo: "/images/banks/bsi.svg",
  },
  {
    id: "muamalat",
    name: "Bank Muamalat",
    logo: "/images/banks/muamalat.png",
  },
];

export const costReference = {
  haji: 56000000,
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
