# Task-Tracker-Cli
Track your daily task throught CLI

✨ Fitur
Mode Interaktif: Jalankan aplikasi tanpa perintah untuk mendapatkan menu yang mudah digunakan.

Manajemen Tugas: Tambah, lihat, selesaikan, dan hapus tugas dengan mudah.

Penyimpanan Persisten: Semua tugas Anda disimpan dalam file db.json lokal.

Antarmuka Berwarna: Tampilan yang mudah dibaca berkat teks berwarna untuk status tugas.

⚙️ Instalasi
Pastikan Anda memiliki Node.js (disarankan versi LTS) dan npm terinstal di sistem Anda.

Untuk Linux / WSL (Direkomendasikan)
Clone Repository
Buka terminal Anda, lalu clone repository ini dan masuk ke direktorinya:

Instal Dependensi
Dari dalam direktori proyek, jalankan:

npm install

Buat Perintah Global
Untuk dapat menjalankan perintah task dari direktori mana pun, buat symbolic link. Anda mungkin memerlukan sudo untuk izin sistem.

sudo npm link

Untuk Windows (Native)
Clone Repository
Buka PowerShell atau CMD, lalu clone repository ini dan masuk ke direktorinya:

Instal Dependensi
Dari dalam direktori proyek, jalankan:

npm install

Buat Perintah Global
Untuk membuat perintah task dapat diakses dari mana saja, Anda perlu menjalankan npm link di terminal dengan hak akses Administrator.

Klik kanan pada ikon PowerShell/CMD.

Pilih "Run as administrator".

Jalankan perintah berikut:

npm link

🚀 Penggunaan
Setelah instalasi selesai, penggunaan aplikasi ini sama untuk semua platform.

Mode Interaktif
Cukup jalankan perintah task tanpa argumen apa pun untuk menampilkan menu utama. Ini adalah cara termudah untuk menggunakan aplikasi.

task

Anda akan disajikan pilihan untuk:

Melihat semua tugas

Menambah tugas baru

Menyelesaikan sebuah tugas

Menghapus sebuah tugas

Keluar

Perintah Langsung
Anda juga bisa menjalankan fungsi spesifik secara langsung dari terminal.

Melihat Daftar Tugas
Menampilkan semua tugas beserta statusnya (✔ untuk selesai, ✖ untuk belum selesai).

task list

Menambah Tugas Baru
Memulai prompt untuk memasukkan nama tugas baru Anda.

task add

Menyelesaikan Tugas
Menampilkan daftar tugas yang belum selesai dan meminta Anda memilih mana yang akan ditandai sebagai selesai.

task complete

Menghapus Tugas
Menampilkan semua tugas dan meminta Anda memilih mana yang akan dihapus.

task remove
