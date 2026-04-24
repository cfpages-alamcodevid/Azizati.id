---
name: Azizati.id Design System
colors:
  surface: '#fff8f1'
  surface-dim: '#e1d9cd'
  surface-bright: '#fff8f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2e6'
  surface-container: '#f5ede0'
  surface-container-high: '#efe7db'
  surface-container-highest: '#eae1d5'
  on-surface: '#1f1b14'
  on-surface-variant: '#4d4636'
  inverse-surface: '#343028'
  inverse-on-surface: '#f8f0e3'
  outline: '#7f7664'
  outline-variant: '#d0c5b0'
  surface-tint: '#755b00'
  primary: '#755b00'
  on-primary: '#ffffff'
  primary-container: '#cfa93f'
  on-primary-container: '#523f00'
  inverse-primary: '#eac255'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#445ba0'
  on-tertiary: '#ffffff'
  tertiary-container: '#94abf6'
  on-tertiary-container: '#243d81'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdf92'
  primary-fixed-dim: '#eac255'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#594400'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#2a4387'
  background: '#fff8f1'
  on-background: '#1f1b14'
  surface-variant: '#eae1d5'
  surface-primary: '#FFFFFF'
  surface-alt: '#F9FAFB'
  text-heading: '#111111'
  text-body: '#374151'
  gold-light: '#EEDC82'
  gold-dark: '#937119'
  gold-gradient: 'linear-gradient(135deg, #EEDC82 0%, #CFA93F 50%, #937119 100%)'
  border-subtle: '#E5E7EB'
typography:
  h1:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-gap: 6rem
  container-max: 1280px
  gutter: 1.5rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
---

# Design System & UI Guidelines - Azizati.id

## 1. Design Philosophy
Desain harus mencerminkan logo Azizati: **Premium, Elegan, Spiritual, Bersih, dan Modern**. 
Mengingat ini adalah produk finansial dan keagamaan, tampilan harus menumbuhkan rasa percaya (*trust*) dan ketenangan (*peace of mind*).
- **Dominasi:** Ruang putih (*whitespace*) yang luas agar terlihat bersih.
- **Aksen:** Gradasi emas (*gold*) untuk elemen interaktif (tombol, ikon, garis pemisah).
- **Teks:** Hitam tegas untuk kontras dan kemudahan membaca.

## 2. Color Palette (Tailwind CSS Configuration)
Warna diambil dari logo yang diberikan (Emblem gradasi emas, teks hitam, background putih).

```javascript
// tailwind.config.js reference
theme: {
  extend: {
    colors: {
      azizati: {
        white: '#FFFFFF',       // Latar belakang utama
        offwhite: '#F9FAFB',    // Latar belakang section alternatif (gray-50)
        black: '#111111',       // Teks judul ("AZIZATI")
        dark: '#374151',        // Teks paragraf (gray-700)
        gold: {
          light: '#EEDC82',     // Highlight gradasi
          DEFAULT: '#CFA93F',   // Warna emas utama (base)
          dark: '#937119',      // Shadow gradasi emas
        }
      }
    },
    backgroundImage: {
      'gold-gradient': 'linear-gradient(135deg, #EEDC82 0%, #CFA93F 50%, #937119 100%)',
    }
  }
}
```

## 3. Typography
- **Headings (H1, H2, H3):** Font yang *bold*, *geometric*, dan modern. 
  - *Rekomendasi:* `Montserrat` atau `Syne`. (Mendekati karakter font tulisan "AZIZATI").
- **Body Text (P, Span):** Font sans-serif yang bersih dan sangat mudah dibaca.
  - *Rekomendasi:* `Inter` atau `Plus Jakarta Sans`.

## 4. UI Components

### 4.1. Buttons
- **Primary Button:** Background menggunakan `bg-gold-gradient`, text warna putih (`text-white`), rounded corners (`rounded-lg` atau `rounded-full`), efek hover agak terang atau sedikit terangkat (`hover:-translate-y-1 shadow-md`).
- **Secondary Button:** Background putih/transparan, border warna emas (`border border-azizati-gold`), text warna hitam/emas.

### 4.2. Cards (Untuk Daftar Bank & Fitur)
- Background: `bg-white`.
- Border/Shadow: Tidak ada border tebal, gunakan shadow lembut (`shadow-sm` atau `shadow-md`).
- Aksen: Garis tipis warna emas di bagian atas card (`border-t-4 border-azizati-gold`) untuk memberi kesan premium.

### 4.3. Inputs & Forms (Simulasi & Pendaftaran)
- Background input: Putih atau abu-abu sangat muda (`bg-gray-50`).
- Border: Abu-abu terang (`border-gray-200`).
- Focus State: Saat diklik, border berubah menjadi emas (`focus:ring-2 focus:ring-azizati-gold focus:border-azizati-gold`).

## 5. Layouting & Spacing
- Gunakan *container* di tengah layar dengan max-width (misal `max-w-7xl mx-auto`).
- Beri jarak yang sangat lega antar *section* (misal `py-16` atau `py-24` di Tailwind).
- Header/Navbar harus statis atau *sticky* di atas, putih bersih, logo di kiri, navigasi di kanan, dan tombol CTA "Simulasi" di paling kanan.

## 6. Logo Usage
- Navbar: Gunakan versi logo horizontal (logo kiri, teks kanan) jika ada. Jika tidak, gunakan ukuran kecil dari logo stacked.
- Footer: Gunakan logo versi lengkap (stacked: emblem di atas, teks di bawah) dengan latar belakang hitam pekat atau putih bersih.