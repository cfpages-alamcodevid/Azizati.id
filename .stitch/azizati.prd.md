# Product Requirements Document (PRD) - Azizati.id

## 1. Product Overview
**Azizati.id** adalah platform aggregator dan fasilitator pembukaan rekening Tabungan Haji dan Tabungan Umroh. Situs ini bekerja sama/mereferensikan bank-bank syariah terkemuka di Indonesia (BSI, Bank Muamalat, Bank Mandiri Syariah, BNI Syariah). Tujuannya adalah memudahkan umat muslim Indonesia merencanakan ibadah mereka melalui simulasi tabungan dan pendaftaran yang mudah. Tagline: "Nikmatnya Ibadah".

## 2. Target Audience
- Umat Muslim Indonesia usia 25 - 55 tahun.
- Memiliki niat untuk Haji/Umroh namun membutuhkan perencanaan keuangan (tabungan).
- Mencari kemudahan membandingkan fitur bank syariah sebelum membuka rekening.

## 3. Core Features (MVP - Minimum Viable Product)

### 3.1. Homepage (Beranda)
- **Hero Section:** Headline yang menginspirasi, sub-headline tentang kemudahan menabung, dan tombol CTA "Mulai Simulasi Tabungan" atau "Buka Rekening".
- **Partner Banks Section:** Menampilkan logo bank mitra (BSI, Muamalat, Mandiri Syariah, BNI Syariah) untuk membangun *trust*.
- **Features/Benefits:** Mengapa memilih Azizati? (Sesuai syariah, bebas biaya admin terselubung, auto-debet, dll).

### 3.2. Fitur Utama: Simulator Tabungan (Savings Calculator)
- Input: 
  - Tujuan: Haji atau Umroh.
  - Target Keberangkatan (misal: 1 tahun, 3 tahun, 5 tahun).
  - Estimasi Biaya (default disesuaikan standar Kemenag, bisa di-edit user).
- Output: 
  - Perhitungan setoran per bulan.
  - Rekomendasi produk bank yang cocok berdasarkan data kompetitor (misal: Bank Muamalat jika ingin cicilan, BSI jika ingin fitur prioritas).

### 3.3. Halaman Bandingkan Bank (Bank Comparison)
Menampilkan tabel interaktif atau *cards* berdasarkan data kompetitor:
- **BSI:** Fokus pada fitur "Tabungan Haji/Umroh, Kartu Debit Haji, Layanan Pembatalan, Concierge".
- **Bank Muamalat:** Fokus pada "Paket cicilan umroh, asuransi perjalanan, bebas biaya admin".
- **Mandiri Syariah / BNI Syariah (Unit/Eks-entitas):** Fokus pada "Fitur autodebet, panduan menabung, promo travel".

### 3.4. Flow Pendaftaran (Lead Generation Form)
- Formulir multi-step sederhana untuk pengguna yang ingin dibantu pembukaan rekening:
  1. Pilih Produk (Haji/Umroh).
  2. Pilih Bank Mitra.
  3. Data Diri (Nama, WhatsApp, Email, Kota).
- *Action:* Data dikirim ke admin Azizati via Email/WhatsApp (atau disimpan di database) untuk difollow-up.

### 3.5. Halaman Edukasi/Informasi
- Syarat pendaftaran (KTP, NPWP, setoran awal).
- FAQ (Pertanyaan yang sering diajukan seputar porsi haji, bagi hasil/nisbah, dll).

## 4. Technical Stack Recommendation (For AI Prompting)
- **Frontend:** Next.js (React) atau Nuxt.js (Vue).
- **Styling:** Tailwind CSS (sangat disarankan untuk mengelola aksen *gold gradient* dan *white space*).
- **Icons:** Lucide-react atau Heroicons.