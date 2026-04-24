# Panduan Pemula: Backend Submit Lead ke Cloudflare Pages + D1

Panduan ini dibuat untuk kondisi kamu benar-benar mulai dari awal.
Target akhir: form di halaman `/pendaftaran` bisa kirim data lead ke database D1.

## Gambaran Singkat Alur

1. Frontend kirim `POST /api/leads`.
2. Cloudflare Pages Function menerima request itu.
3. Function menyimpan data ke D1 melalui binding `AZIZATI_DB`.
4. Data bisa kamu cek lewat query SQL.

## 0. Yang Sudah Disiapkan di Repo Ini

File penting yang sudah ada:

1. Endpoint backend: `functions/api/leads.js`
2. Schema D1: `db/schema.sql`
3. Config Wrangler: `wrangler.toml` (masih perlu isi `database_id`)
4. Frontend submit form: `src/pages/RegistrationPage.jsx`

## 1. Prasyarat

Pastikan sudah ada:

1. Akun Cloudflare.
2. Node.js 18+ (kamu sekarang pakai Node 20, sudah aman).
3. Project ini sudah bisa jalan lokal (`npm install` sudah dilakukan).

## 2. Install Dependency Project

Di root project, jalankan:

```powershell
npm install
```

Kenapa: menginstall `wrangler` dan package lain yang dibutuhkan.

## 3. Login ke Cloudflare dari Terminal

Jalankan:

```powershell
npx wrangler login
```

Browser akan terbuka. Klik authorize.

## 4. Buat Database D1 (kalau belum punya)

Jalankan:

```powershell
npx wrangler d1 create azizati-db
```

Output akan menampilkan:

1. `database_name`
2. `database_id`

Salin `database_id` itu.

## 5. Isi `database_id` di `wrangler.toml`

Buka file `wrangler.toml`, lalu ganti:

```toml
database_id = "PASTE_YOUR_D1_DATABASE_ID_HERE"
```

menjadi:

```toml
database_id = "isi-dengan-id-asli-dari-output-wrangler"
```

Jangan ubah `binding = "AZIZATI_DB"` karena kode backend pakai nama itu.

## 6. Jalankan Migrasi Schema ke D1 (Remote)

Setelah `database_id` benar, jalankan:

```powershell
npm run d1:migrate:remote
```

Perintah ini akan membuat table `leads`.

Kalau ingin test lokal (opsional):

```powershell
npm run d1:migrate:local
```

## 7. Tambah Binding D1 di Cloudflare Pages Dashboard

Walaupun sudah ada di `wrangler.toml`, untuk Pages project kamu tetap pastikan binding ada di dashboard.

Langkah:

1. Buka Cloudflare Dashboard.
2. Masuk ke `Workers & Pages` -> pilih project Pages kamu.
3. Masuk menu `Settings` -> `Bindings`.
4. Tambah `D1 database binding`:
- Variable name: `AZIZATI_DB`
- D1 database: pilih `azizati-db` (atau nama database kamu).
5. Save.

Kalau kamu sudah pernah bikin variable `AZIZATI_DB`, tetap cek lagi apakah arahnya ke database yang benar.

## 8. Deploy ke Cloudflare Pages

Di root project jalankan:

```powershell
npm run deploy:pages
```

Kalau diminta pilih project:

1. Pilih project pages yang benar.
2. Konfirmasi upload folder `dist`.

## 9. Test Endpoint API

Setelah deploy, test endpoint:

```text
GET https://<domain-kamu>/api/leads
```

Harusnya respon:

```json
{
  "ok": true,
  "service": "azizati-lead-api",
  "dbBindingFound": true
}
```

Kalau `dbBindingFound` = `false`, binding belum benar.

## 10. Test Submit Lead Manual

Di PowerShell:

```powershell
$payload = @{
  product = "umroh"
  bankId = "bsi"
  fullName = "Ahmad Test"
  whatsapp = "081234567890"
  email = "ahmad@example.com"
  city = "Jakarta"
} | ConvertTo-Json

Invoke-RestMethod `
  -Uri "https://<domain-kamu>/api/leads" `
  -Method POST `
  -ContentType "application/json" `
  -Body $payload
```

Jika sukses, ada response `ok: true` dan `id` lead.

## 11. Cek Data Masuk ke D1

Query list 20 data terbaru:

```powershell
npx wrangler d1 execute AZIZATI_DB --remote --command "SELECT id, full_name, product, bank_id, created_at FROM leads ORDER BY created_at DESC LIMIT 20;"
```

Kalau query ini mengembalikan row, berarti backend submit sudah berhasil end-to-end.

## 12. Menjalankan Lokal dengan Pages Functions

Karena endpoint backend ada di `functions/`, untuk test full stack lokal gunakan:

```powershell
npm run pages:dev
```

Lalu buka URL lokal yang diberikan wrangler.

## 13. Troubleshooting Paling Umum

1. Error `Binding D1 AZIZATI_DB belum tersedia`
- Penyebab: binding belum dibuat di Pages dashboard, atau nama variablenya beda.
- Solusi: pastikan namanya persis `AZIZATI_DB`.

2. Error SQL `no such table: leads`
- Penyebab: migrasi belum dijalankan ke remote.
- Solusi: jalankan `npm run d1:migrate:remote`.

3. Error `database_id` invalid
- Penyebab: `wrangler.toml` belum diisi ID yang benar.
- Solusi: ulang `npx wrangler d1 create ...` atau copy ulang ID dari dashboard D1.

4. Form sukses di lokal tapi gagal di production
- Penyebab paling sering: binding hanya diset di environment tertentu.
- Solusi: cek binding untuk environment production di project Pages.

## 14. Struktur Data Lead yang Disimpan

Kolom utama:

1. `product` (`haji` / `umroh`)
2. `bank_id`
3. `full_name`
4. `whatsapp`
5. `email`
6. `city`
7. `created_at`
8. tambahan metadata: `source`, `user_agent`, `ip_address`

## 15. Next Step Setelah Ini (Opsional)

1. Tambah halaman admin internal untuk lihat list lead.
2. Tambah filter tanggal/kota/produk.
3. Tambah proteksi admin (baru saat ini masuk tahap yang cocok untuk Clerk).
