# UI Beautification Plan - Azizati.id (Based On `homepage_azizati.id_updated`)

## Tujuan

1. Menyamakan kualitas visual situs dengan referensi `.stitch`, dengan homepage utama mengacu ke `homepage_azizati.id_updated`.
2. Membuat tampilan lebih “premium clean”: berisi, jelas hierarchy, tapi tetap lega.
3. Memperkuat storytelling per halaman (bukan hanya kumpulan card).
4. Menjaga konsistensi logo, warna emas, dan tone syariah-modern.

## Audit Gap vs `.stitch`

## 1) Beranda

Gap:
1. Hero saat ini masih split kiri-kanan, padahal referensi final memakai hero text-centric yang terpusat dengan glow emas besar di belakang.
2. Partner strip belum divisualisasikan sebagai trust logo rail.
3. Struktur homepage final harus mengikuti referensi: Hero centered -> Partner strip -> 3 langkah -> simulator highlight two-column -> bank cards -> benefits.
4. Section "Mengapa Memilih Azizati.id?" belum ada di homepage saat ini.

Aksi:
1. Ganti hero jadi centered composition dengan badge, headline gradient, dan CTA ganda.
2. Tambah gold glow background di hero.
3. Tambah trust strip dengan bank rails yang ringan.
4. Tambah langkah 3 tahap dengan milestone line.
5. Tambah section simulator highlight mengikuti struktur referensi.
6. Tambah bank cards homepage dengan CTA.
7. Tambah section benefit 3 card seperti referensi final.

## 2) Simulator

Gap:
1. Split layout kiri kalkulator, kanan hasil masih kurang tegas.
2. Angka estimasi belum jadi visual anchor utama.
3. Tone panel dan hierarchy harus selaras dengan visual homepage final.

Aksi:
1. Pertegas layout kalkulator kiri + insight kanan.
2. Tambah estimate panel besar + featured bank card.

## 3) Perbandingan Bank

Gap:
1. Referensi `.stitch` menonjolkan 4 card bank seragam untuk scan cepat.
2. Label/value per card di situs sekarang belum sejelas referensi.
3. Gaya card harus lebih ringan, elegan, dan tidak terlalu “enterprise dashboard”.

Aksi:
1. Tambah bank card grid 4 kolom yang seragam.
2. Format konten card dengan meta label + value + CTA tombol.

## 4) Pendaftaran

Gap:
1. Wizard belum cukup fokus secara layout.
2. Referensi punya card center dengan top accent yang sangat jelas.
3. Nuansa visual wizard masih perlu mendekati panel bersih ala `.stitch`.

Aksi:
1. Bungkus wizard dalam panel center (max width).
2. Tambah header wizard dan perhalus stepper.

## 5) Product Pages (Haji/Umroh)

Gap:
1. Hero produk belum sekuat referensi (visual panel dominan).
2. Keunggulan produk butuh layout 3 card seperti referensi.
3. Typography dan spacing perlu mendekati tone homepage final.

Aksi:
1. Tambah hero split dengan visual panel.
2. Tambah grid keunggulan 3 card.

## 6) Footer

Gap:
1. Footer harus kaya informasi, tapi harus tetap rapi dan tidak berat.
2. Footer tidak boleh mendominasi visual seperti dashboard; harus terasa ringan dan editorial.

Aksi:
1. Pertahankan struktur lengkap (tentang kami, produk, statis, sosial).
2. Rapikan density, spacing, dan kontras agar terasa clean seperti `.stitch`.

## Komponen/Asset yang Dipakai

1. Heroicons untuk iconography utama.
2. Existing logo `public/images/azizati-logo.png`.
3. CSS pattern/gradient dekoratif (tanpa menambah noise visual).

## Urutan Implementasi Revisi

1. Refactor homepage agar mengikuti `homepage_azizati.id_updated` dengan akurasi struktur tinggi.
2. Selaraskan simulator/perbandingan/product pages ke tone visual homepage final.
3. Rapikan pendaftaran dan footer agar konsisten dengan bahasa desain final.
4. Tuning global CSS untuk hierarchy, spacing, glow, rail, dan card treatment.
5. Build verification.
