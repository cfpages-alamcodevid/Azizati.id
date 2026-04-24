# UI Beautification Plan - Azizati.id

## Tujuan

1. Membuat tampilan lebih premium, lebih berisi (tidak tipis), dan lebih hidup.
2. Menambahkan iconography agar scanning informasi lebih cepat.
3. Menyatukan gaya visual antar halaman agar konsisten.
4. Membuat footer kaya informasi (brand, produk, halaman statis, sosial).

## Prinsip Visual

1. Depth lebih kuat:
- Shadow lebih tegas, border kontras halus, panel layered.

2. Komposisi lebih padat:
- Tambah blok informasi pendukung per halaman (stat, highlights, CTA).

3. Icon-first UI:
- Heroicons dipakai untuk benefit, langkah, list, tautan penting.

4. Konsistensi:
- Sistem kelas global untuk card besar, section heading, badge, link list, dan footer columns.

## Rencana Per Halaman

## 1) Beranda (`/`)

Improvement:
1. Hero jadi dua layer: konten utama + panel highlight.
2. Tambah quick stats (bank mitra, lead dibantu, SLA follow-up).
3. Benefit cards dengan icon.
4. Partner strip lebih visual.
5. Produk card dengan CTA berikon.

## 2) Simulator (`/simulator`)

Improvement:
1. Input panel lebih “tool-like”.
2. Ringkasan parameter aktif (tujuan, tenor, biaya) di side summary.
3. Card rekomendasi bank dengan icon + hierarchy jelas.
4. Microcopy hasil simulasi lebih informatif.

## 3) Perbandingan Bank (`/perbandingan-bank`)

Improvement:
1. Table tetap dipertahankan untuk detail.
2. Tambah overview cards (fitur unggulan tiap bank) agar lebih mudah dipahami.
3. Strength list pakai icon checklist.

## 4) Pendaftaran (`/pendaftaran`)

Improvement:
1. Stepper lebih tebal dan readable.
2. Setiap langkah ada icon.
3. Form card lebih besar, spacing lebih lega.
4. Feedback sukses/error lebih kontras.

## 5) Edukasi (`/edukasi`)

Improvement:
1. Syarat pendaftaran jadi checklist berikon.
2. FAQ jadi accordion style dengan indikasi expand/collapse.
3. Tambah panel CTA untuk lanjut simulasi.

## 6) Product Pages (`/tabungan-haji`, `/tabungan-umroh`)

Improvement:
1. Hero produk dengan panel highlight.
2. Keunggulan program berikon.
3. Tambah “apa yang kamu dapatkan” di card kedua (bukan hanya CTA).

## 7) Layout Global

Improvement:
1. Navbar:
- Hover states lebih hidup, CTA lebih menonjol, spacing lebih matang.

2. Footer baru (multi-column):
- Tentang kami: logo + brief deskripsi.
- Link produk (dengan icon).
- Link halaman statis penting.
- Link sosial (dengan icon).
- Bottom bar (copyright + legal shortcut).

## Komponen/Asset yang Ditambah

1. Dependency icon:
- `@heroicons/react`

2. Footer structure:
- section brand
- section produk
- section halaman penting
- section sosial + kontak

3. CSS utilities baru:
- premium card variant
- metric cards
- icon row/list
- footer grid system

## Urutan Implementasi

1. Install Heroicons.
2. Refactor Footer (multi-column + icon links).
3. Upgrade Home, Simulator, Comparison.
4. Upgrade Registration + Education.
5. Upgrade ProductPageTemplate.
6. Refresh stylesheet global + responsive tuning.
7. Build verification.
