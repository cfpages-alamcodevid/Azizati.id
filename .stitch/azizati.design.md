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