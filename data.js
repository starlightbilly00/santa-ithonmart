/* =========================================================
   DATA WEB "BERTEMU SANTA" — I-Thon Mart
   ---------------------------------------------------------
   Ini SATU-SATUNYA file yang perlu diedit.
   Habis edit: simpan → upload ulang semua file ke
   Cloudflare (project yang sama, URL tetap).

   Format tanggal : "YYYY-MM-DD"
   Format jam     : "HH:MM" (WITA)
   Token otomatis di teks (dua bahasa):
     {periode} → 20 November – 20 Desember 2026
     {cabang}  → Mumbul, Kampial, dan Ungasan
     {jam}     → 17.00 WITA  (versi EN: 5:00 PM WITA)

   Teks ada dua versi: blok "id" (Indonesia) dan "en" (Inggris).
   Kalau ngubah satu, ubah juga pasangannya.
   ========================================================= */
window.EVENT = {

  // Periode pendaftaran = periode diskon 15% hadiah mainan + bungkus kado gratis
  daftarMulai:   "2026-11-20",
  daftarSelesai: "2026-12-20",

  // Acara. Jam selesai ga ditampilkan (tertulis "sampai selesai").
  jamMulai: "17:00",
  durasiJam: 2, // target lapangan ±19.00. Cuma dipakai buat status
                // "sedang berlangsung" & durasi di tombol kalender.

  // Urutan tampil = urutan di sini
  cabang: [
    {
      nama: "Mumbul",
      tanggal: "2026-12-21",
      alamat: "Jl. Bypass Ngurah Rai No.9, Br. Mumbul, Nusa Dua",
      maps: "https://www.google.com/maps/search/?api=1&query=Ithon+Mart+Mumbul&query_place_id=ChIJneiKuXxE0i0RSFOhiYDRVCA"
    },
    {
      nama: "Kampial",
      tanggal: "2026-12-22",
      alamat: "Jl. Kuruksetra No.88, Br. Bualu, Kampial, Nusa Dua",
      maps: "https://www.google.com/maps/search/?api=1&query=Ithon+Mart+Kuruksetra&query_place_id=ChIJs1T9AzhD0i0RJWSShCzJE1A"
    },
    {
      nama: "Ungasan",
      tanggal: "2026-12-23",
      alamat: "Jl. Pura Batu Pageh No.48 (Bali Cliff), Br. Kauh, Ungasan",
      maps: "https://www.google.com/maps/search/?api=1&query=Ithon+Mart+Ungasan&query_place_id=ChIJKTkrEABb0i0RDo5Rkk0jWWI"
    }
  ],

  // WhatsApp marketing. Format: 62 tanpa 0 depan, tanpa spasi/strip.
  whatsapp: "6281339384199",

  // Media sosial. Kosongin ("") kalau ga mau ditampilkan.
  instagram: "https://www.instagram.com/ithon.mart/",
  facebook:  "https://www.facebook.com/ithonmartkampial",
  tiktok:    "",

  // Logo resmi medsos (opsional). Download versi ikon dari halaman brand
  // resmi masing-masing, taruh di folder img/ pakai nama persis di bawah.
  // Selama file-nya belum ada, web otomatis pakai ikon bawaan.
  // Mau pakai SVG/WebP? Boleh, ekstensi di sini disesuaikan.
  logo: {
    whatsapp:  "img/logo-whatsapp.png",
    instagram: "img/logo-instagram.png",
    facebook:  "img/logo-facebook.png",
    tiktok:    "img/logo-tiktok.png"
  },

  /* ---------------- TEKS BAHASA INDONESIA ---------------- */
  id: {
    pesanWA: "Halo I-Thon Mart, saya mau tanya soal acara Bertemu Santa.",

    // Tulisan kecil di bawah gambar Santa
    catatanDiskon: "*Syarat & ketentuan berlaku. Diskon khusus untuk pembelian hadiah mainan.",

    // Kosong [] = bagian "Siapa yang bisa ikut?" ga tampil
    syaratPeserta: [
      "Terbuka untuk umum, terutama anak-anak. Tidak ada batasan usia."
    ],

    caraIkut: [
      {
        judul: "Beli hadiah di I-Thon Mart",
        isi: "Selama {periode}, hadiah mainan dapat diskon 15%. Hadiahnya juga dibungkus gratis di kasir."
      },
      {
        judul: "Isi formulir dan titipkan hadiah",
        isi: "Formulirnya ada di kasir. Tulis nama si kecil, lalu titipkan hadiahnya di toko."
      },
      {
        judul: "Datang di hari acara",
        isi: "Ajak si kecil ke cabang tempat kamu mendaftar, sesuai jadwal. Santa akan menyerahkan hadiah sesuai nama yang didaftarkan."
      }
    ],

    snk: [
      "Diskon 15% berlaku khusus untuk pembelian hadiah mainan yang didaftarkan di acara Bertemu Santa. Bungkus kado gratis untuk setiap hadiah yang didaftarkan.",
      "Berlaku selama periode pendaftaran, {periode}, di I-Thon Mart {cabang}.",
      "Tanpa minimal maupun maksimal belanja.",
      "Pendaftaran dilakukan dengan mengisi formulir di kasir saat pembelian. Hadiah dititipkan di toko tempat pendaftaran.",
      "Pada hari acara, Santa menyerahkan hadiah sesuai nama yang didaftarkan, bersama hadiah tambahan dari I-Thon Mart.",
      "Acara dimulai pukul {jam} sampai selesai.",
      "Syarat & ketentuan dapat berubah sewaktu-waktu mengikuti kebijakan I-Thon Mart. Info terbaru selalu kami perbarui di halaman ini, jadi cek lagi sebelum berbelanja, ya!"
    ]
  },

  /* ---------------- TEKS BAHASA INGGRIS (EN) ---------------- */
  en: {
    pesanWA: "Hi I-Thon Mart, I'd like to ask about the Meet Santa event.",

    catatanDiskon: "*Terms & conditions apply. Discount valid for toy gifts only.",

    syaratPeserta: [
      "Open to everyone, especially children. No age limit."
    ],

    caraIkut: [
      {
        judul: "Buy a gift at I-Thon Mart",
        isi: "During the registration period ({periode}), toy gifts get 15% off. Your gift is also wrapped for free at the cashier."
      },
      {
        judul: "Fill in the form and leave the gift",
        isi: "The form is at the cashier. Write your child's name, then leave the gift with the store."
      },
      {
        judul: "Come on event day",
        isi: "Bring your child to the store where you registered, on its scheduled day. Santa hands over each gift by the registered name."
      }
    ],

    snk: [
      "The 15% discount applies only to toy gifts registered for the Meet Santa event. Every registered gift is wrapped for free.",
      "Valid during the registration period, {periode}, at I-Thon Mart {cabang}.",
      "No minimum or maximum purchase.",
      "Register by filling in the form at the cashier when you pay. The gift is kept at the store where you registered.",
      "On event day, Santa hands over each gift by the registered name, together with a bonus gift from I-Thon Mart.",
      "The event starts at {jam} and runs until finished.",
      "Terms & conditions may change at any time in line with I-Thon Mart policy. We always post the latest info on this page, so please check again before you shop!"
    ]
  }
};
