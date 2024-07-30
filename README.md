
# BISINDO Website

BISINDO Website adalah aplikasi web untuk belajar bahasa isyarat Indonesia menggunakan YOLO v8 untuk deteksi gerakan tangan secara real-time dan React JS untuk membangun antarmuka pengguna.

## Fitur

- [x] Halaman about us yang menampilkan informasi tentang BISINDO dan layanan yang ditawarkan
- [x] Deteksi gerakan tangan secara real-time menggunakan YOLO v8
- [x] Antarmuka pengguna interaktif menggunakan React JS
- [x] Sistem navigasi untuk beralih antara berbagai halaman informasi

## Instalasi

Ikuti langkah-langkah di bawah ini untuk menginstal dan menjalankan aplikasi di lingkungan lokal Anda.

### Prasyarat

- Node.js
- npm atau yarn

### Langkah-langkah

1. **Clone repository ini:**

   ```bash
   git clone <URL-repository-Anda>
   cd bisindo-website
   ```

2. **Instal dependensi:**

   ```bash
   npm install
   ```

3. **Jalankan aplikasi:**

   Untuk menjalankan aplikasi di lingkungan pengembangan:

   ```bash
   npm start
   ```

## Penggunaan

### Halaman Utama

Halaman utama menampilkan informasi tentang BISINDO, tujuan pembelajaran, dan cara menggunakan aplikasi ini.

### Deteksi Gerakan Tangan

Pengguna dapat belajar bahasa isyarat dengan melihat deteksi gerakan tangan secara real-time menggunakan YOLO v8.

## Struktur Proyek

```bash
.
├── src
│   ├── assets
│   ├── components
│   │   ├── Navbar.jsx
│   ├── screens
│   │   ├── AboutScreen.jsx
│   │   ├── BisindoScreen.jsx
│   │   ├── HomeScreen.jsx
│   │   ├── ReferenceScreen.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── setupProxy.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vercel.json
├── vite.config.js
```

## Kontak

Jika Anda memiliki pertanyaan atau saran, silakan hubungi saya di mr.volumee@gmail.com
