const weddingData = {
  coupleNames: "Adi & Asti",
  weddingDate: "2026-09-12T08:09:00",
  defaultGuestLabel: "Tamu Undangan",

  
    cover: {
    backgroundType: "image",
    backgroundImage: "images/BGcoverwedding.webp",
    backgroundVideo: "",
    preweddingPhoto: "images/1.jpg",
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
      date: "2019",
      title: "Pertama Bertemu",
      description: "dipertemukan di sosial media percakapan singkat menjadi awal dari kisah singkat.",
      photo: "/images/2.jpg",
    },
    {
      date: "Desember 2019",
      title: "Menjalin Hubungan",
      description: "Menjalin hubungan setelah  saling mengenal lebih dekat, kami memutuskan untuk melangkah bersama dalam sebuah hubungan.",
      photo: "/images/5.jpg",
    },
    {
      date: "Juli 2026",
      title: "Lamaran",
      description: "Lamaran dihadapan keluarga tercinta, sebuah janji sebagai diucapkan sebagai langkah menuju prnikahan.",
      photo: "/images/3.jpg",
    },
    {
      date: "September 2026",
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
    { time: "13.00 WITA", title: "Resepsi Pernikahan", description: "Sambutan keluarga, hiburan, dan foto bersama." },
    { time: "17.30 WITA", title: "Acara Selesai", description: "Terima kasih atas kehadiran dan doa restunya." },
  ],

  initialUcapan: [
    { nama: "Budi Santoso", pesan: "Selamat menempuh hidup baru! Semoga sakinah mawaddah warahmah." },
    { nama: "Rina Wati", pesan: "Bahagia sekali melihat kalian akhirnya menikah. Selamat!" },
  ],
  
    bankAccounts: [
    { bank: "Mandiri", nomor: "1700019062466", atasNama: "" },
    { bank: "Dana", nomor: "082197321182", atasNama: "" },
  ],co

  thankYouMessage: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.",

  akad: {
    label: "Akad Nikah",
    date: "Sabtu, 12 September 2026",
    time: "08.00 WITA - Selesai",
    venue: "Kediaman Mempelai Wanita",
    address: "Jln.Permandian Ompo(Depan Warung Jen'k Idha)",
    mapsUrl: "https://maps.app.goo.gl/NM51moPeCoDzS54H8",
  },
  resepsi: {
    label: "Resepsi",
    date: "Sabtu, 12 September 2026",
    time: "09.00 - Selesai",
    venue: "Rumah Mempelai",
    address: "Rumpa'E,Kel.Macanre,Kab.Soppeng",
    mapsUrl: "https://maps.app.goo.gl/rRAfv76ntnJCxNmZ8",
  },
    music: {
    url: "/audio/music.mp3",
  },
}

export default weddingData