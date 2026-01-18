# Laporan Proyek: Smart Pantry (Manajemen Makanan)

## 1. Deskripsi Proyek
**Smart Pantry** adalah aplikasi berbasis web sederhana untuk mengelola stok makanan. Aplikasi ini dirancang untuk membantu pengguna memantau tanggal kedaluwarsa makanan dan mengelola konsumsi stok dengan prinsip yang fleksibel (pengguna dapat memilih item mana yang ingin dikonsumsi).

## 2. Fitur Utama
1.  **Tambah Data (Add Item)**: Pengguna dapat memasukkan nama makanan, kategori, dan tanggal kedaluwarsa.
2.  **Manajemen List (View)**: Menampilkan daftar makanan beserta sisa hari menuju kedaluwarsa dengan indikator warna (Hijau: Aman, Kuning: Waspada, Merah: Kedaluwarsa).
3.  **Konsumsi Manual (Consume)**: Pengguna dapat memilih item spesifik untuk dihapus dari daftar (dikonsumsi) dengan konfirmasi terlebih dahulu.
4.  **Pencarian (Search)**: Fitur untuk mencari makanan berdasarkan nama menggunakan algoritma *Linear Search*.
5.  **Pengurutan (Sort)**: Fitur untuk mengurutkan daftar berdasarkan tanggal kedaluwarsa menggunakan algoritma *Bubble Sort*.
6.  **Penyimpanan Data (Persistence)**: Data tersimpan di *Local Storage* browser sehingga tidak hilang saat halaman di-refresh.

## 3. Implementasi Konsep Pemrograman
Proyek ini menerapkan berbagai konsep dasar hingga menengah dalam pemrograman:

| Konsep | Implementasi dalam Proyek |
| :--- | :--- |
| **Variabel & Tipe Data** | Penggunaan `const`, `let` untuk menyimpan data makanan, input pengguna, dan hasil perhitungan tanggal. |
| **Percabangan (Branching)** | Validasi input kosong (`if/else`), penentuan status warna kedaluwarsa, dan konfirmasi penghapusan (`confirm`). |
| **Perulangan (Loops)** | `forEach` untuk merender tabel, `for` loop pada algoritma *Linear Search*, dan `do-while` pada *Bubble Sort*. |
| **Fungsi (Functions)** | Pemisahan logika ke dalam fungsi terpisah seperti `displayFoods`, `addFoodToList`, `saveFoods`. |
| **Class & Object** | Penggunaan `class Food` untuk memodelkan data makanan dan `class UI` / `class Store` untuk manajemen tampilan dan data. |
| **Algoritma Pencarian** | Implementasi manual *Linear Search* untuk memfilter daftar makanan. |
| **Algoritma Pengurutan** | Implementasi manual *Bubble Sort* untuk mengurutkan tanggal. |
| **Pemrograman Modular** | Kode dipecah menjadi beberapa file (`app.js`, `Food.js`, `UI.js`, `Algorithms.js`, `Store.js`) menggunakan ES6 Modules (`import`/`export`). |

## 4. Struktur File
```
Project/
├── index.html          # Halaman utama antarmuka pengguna
├── style.css           # Styling CSS modern
└── js/
    ├── app.js          # Logika utama (Controller)
    ├── models/
    │   └── Food.js     # Definisi Class Food
    ├── utils/
    │   ├── Algorithms.js # Algoritma Search & Sort
    │   └── Store.js      # Manajemen Local Storage
    └── view/
        └── UI.js       # Manipulasi DOM (Tampilan)
```

## 5. Cara Menjalankan
Karena proyek ini menggunakan **ES6 Modules**, file `index.html` tidak dapat dibuka langsung dengan cara *double-click*. Harus dijalankan melalui server lokal.

1.  **Metode VS Code (Disarankan)**:
    -   Instal ekstensi **Live Server**.
    -   Klik kanan pada `index.html` -> Pilih **"Open with Live Server"**.
2.  **Metode Python**:
    -   Buka terminal di folder proyek.
    -   Jalankan perintah: `python -m http.server`
    -   Buka browser ke `http://localhost:8000`.
