# Implementation Plan - Azizati.id

## 1) Scope Halaman

1. Beranda (`/`)
2. Simulator Tabungan (`/simulator`)
3. Perbandingan Bank (`/perbandingan-bank`)
4. Pendaftaran Multi-step (`/pendaftaran`)
5. Edukasi (Syarat + FAQ) (`/edukasi`)
6. Landing Tabungan Haji (`/tabungan-haji`)
7. Landing Tabungan Umroh (`/tabungan-umroh`)

## 2) Komponen Utama

1. Layout
- `Navbar`
- `Footer`
- `MainLayout`

2. Reusable UI
- `SectionTitle`
- `ProductPageTemplate`

3. State Management (Zustand)
- `simulatorStore` untuk kalkulasi simulasi
- `registrationStore` untuk wizard pendaftaran

## 3) Keputusan Auth / DB / State

1. Auth
- Tidak dibutuhkan untuk MVP saat ini.
- Clerk tidak diaktifkan dulu.

2. Database
- Tidak dibutuhkan untuk MVP frontend saat ini.
- Cloudflare D1 direkomendasikan untuk fase selanjutnya saat lead submission perlu disimpan permanen.

3. State Management
- Zustand digunakan karena ada flow multi-step dan data simulasi lintas komponen.

## 4) Deployment Target

1. Framework: React + Vite (SPA)
2. Target: Cloudflare Pages
3. Redirect SPA: `public/_redirects` dengan `/* /index.html 200`
