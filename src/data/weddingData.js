const weddingData = {
  coupleNames: "Adi & Asti",
  weddingDate: "2026-09-12T08:09:00",
  defaultGuestLabel: "Tamu Undangan",

  
    cover: {
    backgroundType: "image",
    backgroundImage: "https://picsum.photos/seed/wedding-cover/800/1200",
    backgroundVideo: "",
    preweddingPhoto: "https://picsum.photos/seed/prewedding-1/700/900",
    greeting: "Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara kami.",
  },

  groom: {
    name: "Adi",
    fullName: "Hariadi Hamdan,S.Pd",
    parents: "Putra Tunggal Ibu Itang & Bapak Arifin (Alm)",
    instagram: "adi",
    photo: "/images/1.jpg",
  },
  bride: {
    name: "Asti",
    fullName: "Asti Kusuma A.Idham, Amd.Kep",
    parents: "Putri Bapak A.Idham A.Dauda,S.Sos & Ibu Rosmawati.M",
    instagram: "Asti",
    photo: "/images/1.jpg",
  },
  
    loveStory: [
    {
      date: "Januari 2020",
      title: "Pertama Bertemu",
      description: "Dipertemukan di sebuah acara kampus, obrolan singkat yang berlanjut jadi pertemanan.",
      photo: "/images/2.jpg",
    },
    {
      date: "Juni 2022",
      title: "Menjalin Hubungan",
      description: "Setelah dua tahun saling mengenal, kami memutuskan untuk melangkah lebih serius.",
      photo: "/images/5.jpg",
    },
    {
      date: "Maret 2025",
      title: "Lamaran",
      description: "Di hadapan keluarga besar, janji untuk melangkah ke jenjang berikutnya resmi terucap.",
      photo: "/images/3.jpg",
    },
    {
      date: "Desember 2026",
      title: "Hari Bahagia",
      description: "Hari yang telah dinantikan, saat kami resmi menjadi satu.",
      photo: "/images/6.jpg",
    },
  ],

  gallery: [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
  ],
  
    // Kosongkan youtubeId jadi "" kalau gak mau ada video di galeri
  galleryVideo: {
    youtubeId: "",
  },
  
    // Kosongkan jadi `null` kalau bukan pernikahan Islam / gak mau pakai ayat suci
  
    ayatSuci: {
    title: "The Wedding Of Adi & Asti",
    photo: "https://picsum.photos/seed/couple-portrait/500/500", // kosongkan "" kalau gak mau pakai foto
    arabic: "وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً",
    translation: "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan untukmu dari jenismu sendiri, agar kamu merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa cinta dan kasih sayang.",
    source: "QS. Ar-Rum: 21",
  },

  susunanAcara: [
    { time: "08.00 WITA", title: "Persiapan & Kedatangan Tamu", description: "Pengantin dan keluarga bersiap-siap menyambut tamu undangan." },
    { time: "10.00 WITA", title: "Akad Nikah", description: "Pembukaan, pembacaan ayat suci, ijab kabul, dan doa." },
    { time: "11.00 WITA", title: "Resepsi Pernikahan", description: "Sambutan keluarga, hiburan, dan foto bersama." },
    { time: "14.00 WITA", title: "Acara Selesai", description: "Terima kasih atas kehadiran dan doa restunya." },
  ],

  initialUcapan: [
    { nama: "Budi Santoso", pesan: "Selamat menempuh hidup baru! Semoga sakinah mawaddah warahmah." },
    { nama: "Rina Wati", pesan: "Bahagia sekali melihat kalian akhirnya menikah. Selamat!" },
  ],
  
    bankAccounts: [
    { bank: "BCA", nomor: "1234567890", atasNama: "Andi Pratama" },
    { bank: "Mandiri", nomor: "0987654321", atasNama: "Siti Nurhaliza" },
  ],

  thankYouMessage: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.",

  akad: {
    label: "Akad Nikah",
    date: "Sabtu, 12 September 2026",
    time: "08.00 WITA - Selesai",
    venue: "Rumah Mempelai",
    address: "Rumpa'E,Kel.Macanre,Kab.Soppeng",
    mapsUrl: "https://maps.google.com",
  },
  resepsi: {
    label: "Resepsi",
    date: "Sabtu, 12 September 2026",
    time: "09.00 - Selesai",
    venue: "Rumah Mempelai",
    address: "Rumpa'E,Kel.Macanre,Kab.Soppeng",
    mapsUrl: "https://maps.google.com",
  },
    music: {
    url: "/audio/music.mp3",
  },
}

export default weddingData