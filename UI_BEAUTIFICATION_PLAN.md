# UI Beautification Plan - Azizati.id (Revised After `.stitch` Audit)

## Tujuan

1. Menyamakan kualitas visual situs dengan referensi `.stitch`.
2. Membuat tampilan lebih “premium clean”: berisi, jelas hierarchy, tapi tetap lega.
3. Memperkuat storytelling per halaman (bukan hanya kumpulan card).
4. Menjaga konsistensi logo, warna emas, dan tone syariah-modern.

## Audit Gap vs `.stitch`

## 1) Beranda

Gap:
1. Hero belum punya focal visual kanan sekuat `.stitch`.
2. Partner trust strip belum setegas referensi.
3. Struktur narasi belum lengkap (hero -> partner -> langkah -> simulator preview -> bank cards).

Aksi:
1. Tambah hero visual panel kanan.
2. Tambah partner strip center.
3. Tambah section “Langkah Mudah Menabung” dan “Preview Simulator”.

## 2) Simulator

Gap:
1. Split layout kiri kalkulator, kanan hasil masih kurang tegas.
2. Angka estimasi belum jadi visual anchor utama.

Aksi:
1. Pertegas layout kalkulator kiri + insight kanan.
2. Tambah estimate panel besar + featured bank card.

## 3) Perbandingan Bank

Gap:
1. Referensi `.stitch` menonjolkan 4 card bank seragam untuk scan cepat.
2. Label/value per card di situs sekarang belum sejelas referensi.

Aksi:
1. Tambah bank card grid 4 kolom yang seragam.
2. Format konten card dengan meta label + value + CTA tombol.

## 4) Pendaftaran

Gap:
1. Wizard belum cukup fokus secara layout.
2. Referensi punya card center dengan top accent yang sangat jelas.

Aksi:
1. Bungkus wizard dalam panel center (max width).
2. Tambah header wizard dan perhalus stepper.

## 5) Product Pages (Haji/Umroh)

Gap:
1. Hero produk belum sekuat referensi (visual panel dominan).
2. Keunggulan produk butuh layout 3 card seperti referensi.

Aksi:
1. Tambah hero split dengan visual panel.
2. Tambah grid keunggulan 3 card.

## 6) Footer

Gap:
1. Footer harus kaya informasi, tapi harus tetap rapi dan tidak berat.

Aksi:
1. Pertahankan struktur lengkap (tentang kami, produk, statis, sosial).
2. Rapikan density, spacing, dan kontras agar terasa clean seperti `.stitch`.

## Komponen/Asset yang Dipakai

1. Heroicons untuk iconography utama.
2. Existing logo `public/images/azizati-logo.png`.
3. CSS pattern/gradient dekoratif (tanpa menambah noise visual).

## Urutan Implementasi Revisi

1. Refactor beranda agar urutannya mendekati `.stitch`.
2. Refactor simulator ke split-layout yang lebih tegas.
3. Tambah bank card matrix pada perbandingan.
4. Refactor pendaftaran jadi wizard-shell terpusat.
5. Perkuat product pages dengan hero visual + 3 keunggulan.
6. Rapikan footer dan tuning global CSS.
7. Build verification.
