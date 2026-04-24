# Azizati.id

Website aggregator Tabungan Haji dan Umroh berbasis React + Vite untuk deployment di Cloudflare Pages.

## Panduan Pemula Backend

- Lihat panduan lengkap: `BACKEND_D1_STEP_BY_STEP.md`

## Keputusan Arsitektur

- Auth: Tidak wajib untuk MVP (pengunjung hanya simulasi, bandingkan bank, dan kirim lead).
- Clerk: Belum dipakai karena belum ada fitur akun pengguna.
- Database: Cloudflare D1 dipakai untuk menyimpan data lead pendaftaran.
- Zustand: Dipakai untuk state simulator dan pendaftaran multi-step.

## Halaman yang Diimplementasikan

- `/` Beranda
- `/simulator` Simulator tabungan
- `/perbandingan-bank` Perbandingan bank syariah
- `/pendaftaran` Flow pendaftaran 3 langkah
- `/edukasi` Syarat dan FAQ
- `/tabungan-haji` Landing produk tabungan haji
- `/tabungan-umroh` Landing produk tabungan umroh

## Jalankan Lokal

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy + D1

```bash
npm run d1:migrate:remote
npm run deploy:pages
```

## Deploy ke Cloudflare Pages

Build configuration:

- Build command: `npm run build`
- Build output directory: `dist`

SPA redirect sudah disiapkan di `public/_redirects`.
