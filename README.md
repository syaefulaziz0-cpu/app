# Suap Kecil — Aplikasi MPASI

Aplikasi web mobile maksimal 480px untuk MPASI usia 6–24 bulan.

- 250 variasi resep, filter usia dan alergi dari profil anak, serta load more 10 resep.
- Akun email/password mandiri untuk browser HP dan komputer, profil anak, dan riwayat pengukuran.
- Grafik WHO BB/U dan PB/TB/U dengan garis vertikal interaktif.
- Foto ilustrasi menu yang dibuat dengan AI.

Live: https://suap-kecil-mpasi-ceria.zizazizz.chatgpt.site/

## Menjalankan dan membangun

Memerlukan Node.js 22 atau lebih baru.

```sh
npm ci
npm test
npm run build
```

Build menghasilkan Worker ESM di `dist/server/index.js`. Hosting memerlukan Cloudflare Workers/D1 atau Sites; GitHub Pages saja tidak menjalankan API akun dan database.

Login aplikasi memakai email/password dan cookie sesi HttpOnly yang aman. Tidak memerlukan identitas atau login privat ChatGPT/Sites. Setiap profil dan pengukuran dibatasi oleh ID akun dari sesi. Kolom owner lama dipertahankan untuk kompatibilitas schema; akun lama tetap dapat dipakai. Percobaan autentikasi dibatasi per email dan IP Cloudflare bila tersedia.

Binding database: `DB`. Terapkan SQL di `drizzle/` sebelum menjalankan API. Akun dan pengukuran produksi tidak disertakan di repositori ini. `.openai/hosting.json` sengaja tidak menyertakan identitas Site pribadi; hubungkan proyek hosting Anda sendiri.

## Struktur

- `public/`: antarmuka, ilustrasi, font, resep, dan data acuan WHO.
- `worker/api.js`: autentikasi aplikasi, profil, dan API pengukuran.
- `db/` dan `drizzle/`: schema dan migrasi D1.
- `scripts/`: build dan generator variasi resep.
- `tests/`: pengujian integrasi, kurva pertumbuhan, dan filter profil.
- `data-sources/`: asal dan checksum data WHO.

## Batasan

Verifikasi email dan pemulihan password lewat email belum tersedia. Grafik bukan diagnosis atau pengganti Buku KIA/tenaga kesehatan. Usia prematur belum dikoreksi otomatis. Resep adalah inspirasi rumahan, bukan resep klinis yang telah divalidasi ahli gizi.
