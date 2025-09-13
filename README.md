<div align="center">
<h1>Task Tracker CLI</h1>
<p>Sebuah aplikasi baris perintah (CLI) sederhana untuk melacak tugas harian Anda langsung dari terminal.</p>
<p>
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Node.js-18.x-green.svg" alt="Node.js Version">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/platform-Linux%2520%257C%2520Windows%2520%257C%2520WSL-blue.svg" alt="Platform">
<img src="https://www.google.com/search?q=https://img.shields.io/github/license/VoyageDev/Task-Tracker-Cli%3Fstyle%3Dflat" alt="License">
</p>
</div>

✨ Fitur
🚀 Mode Interaktif: Jalankan aplikasi tanpa perintah untuk mendapatkan menu yang mudah digunakan.

📋 Manajemen Tugas: Tambah, lihat, selesaikan, dan hapus tugas dengan mudah.

💾 Penyimpanan Persisten: Semua tugas Anda disimpan dalam file db.json lokal.

🎨 Antarmuka Berwarna: Tampilan yang mudah dibaca berkat teks berwarna untuk status tugas.

⚙️ Instalasi
Pastikan Anda memiliki Node.js (disarankan versi LTS) dan npm terinstal di sistem Anda.

<details>
<summary><strong>🐧 Untuk Linux / WSL (Direkomendasikan)</strong></summary>
<br>

Clone Repository
Buka terminal Anda, lalu clone repository ini dan masuk ke direktorinya:

git clone [https://github.com/VoyageDev/Task-Tracker-Cli.git](https://github.com/VoyageDev/Task-Tracker-Cli.git)
cd Task-Tracker-Cli

Instal Dependensi
Dari dalam direktori proyek, jalankan:

npm install

Buat Perintah Global
Untuk dapat menjalankan perintah task dari direktori mana pun, buat symbolic link.

sudo npm link

</details>

<details>
<summary><strong>💻 Untuk Windows (Native)</strong></summary>
<br>

Clone Repository
Buka PowerShell atau CMD, lalu clone repository ini dan masuk ke direktorinya:

git clone [https://github.com/VoyageDev/Task-Tracker-Cli.git](https://github.com/VoyageDev/Task-Tracker-Cli.git)
cd Task-Tracker-Cli

Instal Dependensi
Dari dalam direktori proyek, jalankan:

npm install

Buat Perintah Global
Untuk membuat perintah task dapat diakses dari mana saja, Anda perlu menjalankan npm link di terminal dengan hak akses Administrator.

Klik kanan pada ikon PowerShell/CMD.

Pilih "Run as administrator".

Jalankan perintah berikut:

npm link

</details>

🚀 Penggunaan
Setelah instalasi selesai, penggunaan aplikasi ini sama untuk semua platform.

Mode Interaktif
Cukup jalankan perintah task tanpa argumen apa pun untuk menampilkan menu utama. Ini adalah cara termudah untuk menggunakan aplikasi.

task

Aplikasi akan menampilkan menu pilihan seperti di bawah ini:

? What do you want to do? (Use arrow keys)
❯ List all tasks
  Add a new task
  Complete a task
  Remove a task
  ──────────────
  Exit

Perintah Langsung
Anda juga bisa menjalankan fungsi spesifik secara langsung dari terminal.

Perintah

Deskripsi

task list

Menampilkan semua tugas beserta statusnya.

task add

Memulai prompt untuk memasukkan nama tugas baru.

task complete

Meminta Anda memilih tugas mana yang akan ditandai selesai.

task remove

Meminta Anda memilih tugas mana yang akan dihapus.

🛠️ Teknologi yang Digunakan
Node.js

Commander.js - Kerangka kerja untuk aplikasi CLI.

Inquirer.js - Untuk prompt interaktif.

Chalk - Untuk memberi warna pada teks terminal.

Lowdb - Database JSON sederhana berbasis file.

📜 Lisensi
Proyek ini dilisensikan di bawah Lisensi MIT.