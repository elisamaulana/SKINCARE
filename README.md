# 💄 Proyek Aplikasi Skincare React Vite

Aplikasi web interaktif berbasis React dan Vite yang menampilkan daftar profil mahasiswa serta katalog produk/kartu skincare dengan komponen modular.

---

## 📸 Tangkapan Layar Aplikasi
*(Opsional: Anda bisa melampirkan screenshot tampilan aplikasi web Anda di sini)*
![Tampilan Aplikasi](./src/assets/screenshot.png)

---

## 🧩 Daftar Komponen Beserta Props

Aplikasi ini dibangun menggunakan beberapa komponen utama:
1. **`App.jsx`** (Komponen Utama / Parent)
   - Mengelola state utama dan data array `daftarMahasiswa`.
2. **`KartuProfil.jsx`** (Komponen Anak / Child)
   - Berfungsi untuk merender kartu informasi mahasiswa.
   - **Props yang diterima:**
     - `nama` (string): Nama lengkap mahasiswa.
     - `peran` (string): Jurusan atau peran mahasiswa.
     - `tahun` (number): Tahun angkatan masuk.
     - `aktif` (boolean): Status keaktifan mahasiswa.

---

## 🚀 Cara Menjalankan Proyek

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek secara lokal di komputer Anda:

1. **Clone repositori ini:**
   ```bash
   git clone [https://github.com/elisamaulana/SKINCARE.git](https://github.com/elisamaulana/SKINCARE.git)
