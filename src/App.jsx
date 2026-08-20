import { useState, useEffect } from 'react'
import Cover from './components/Cover'
import weddingData from './data/weddingData'
import themes from './data/themes'
import Ornament from './components/Ornament'
import Reveal from './components/Reveal'

// ============================================
// THEME SWITCHER (floating, kanan atas)
// ============================================
function ThemeSwitcher({ current, onChange }) {
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/80 backdrop-blur px-3 py-2 rounded-full shadow-sm">
      {Object.entries(themes).map(([key, t]) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          title={t.label}
          className="w-6 h-6 rounded-full border-2 transition"
          style={{
            backgroundColor: t.accent,
            borderColor: current === key ? t.dark : 'transparent',
          }}
        />
      ))}
    </div>
  )
}

// ============================================
// SECTION: COUNTDOWN
// ============================================
function Countdown() {
  const calculateTimeLeft = () => {
    const difference = new Date(weddingData.weddingDate) - new Date()
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  const units = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ]

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-[var(--color-bg-alt)] text-[var(--color-text)]">
            <Reveal className="flex flex-col items-center">
        <p className="text-xs tracking-[0.3em] uppercase mb-2 text-[var(--color-accent)]">Save the date</p>
        <h2 className="font-display text-2xl mb-2">Menuju Hari Bahagia</h2>
        <Ornament />
      </Reveal>
      <div className="flex gap-4">
        {units.map((unit) => (
          <div key={unit.label} className="text-center bg-[var(--color-bg)] rounded-xl px-5 py-4 min-w-[70px]">
            <div className="font-display text-3xl">{unit.value}</div>
            <div className="text-[10px] tracking-widest uppercase mt-1 text-[var(--color-text-muted)]">{unit.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ============================================
// SECTION: MEMPELAI
// ============================================
function Mempelai() {
  const { groom, bride } = weddingData

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[var(--color-bg)] text-[var(--color-text)]">
            <Reveal className="flex flex-col items-center">
        <p className="text-xs tracking-[0.3em] uppercase mb-2 text-[var(--color-accent)]">Mempelai</p>
        <h2 className="font-display text-2xl mb-2">Dengan Rahmat Allah</h2>
        <Ornament />
      </Reveal>
      <div className="flex flex-col md:flex-row gap-12 items-center mt-4">
        <div className="text-center max-w-xs">
		  <img src={groom.photo} alt={groom.fullName} className="elegant-photo w-40 h-40 rounded-full object-cover mx-auto mb-4" />
          <h3 className="font-display text-2xl">{groom.fullName}</h3>
          <p className="text-sm mt-2 text-[var(--color-text-muted)]">{groom.parents}</p>
          <p className="text-sm mt-1">@{groom.instagram}</p>
        </div>

        <div className="font-display text-3xl text-[var(--color-accent)]">&</div>

        <div className="text-center max-w-xs">
		  <img src={groom.photo} alt={groom.fullName} className="elegant-photo w-40 h-40 rounded-full object-cover mx-auto mb-4" />
          <h3 className="font-display text-2xl">{bride.fullName}</h3>
          <p className="text-sm mt-2 text-[var(--color-text-muted)]">{bride.parents}</p>
          <p className="text-sm mt-1">@{bride.instagram}</p>
        </div>
      </div>
    </section>
  )
}

// ============================================
// SECTION: ACARA
// ============================================
function AcaraCard({ data }) {
  return (
    <div className="bg-[var(--color-bg)] rounded-xl p-8 max-w-sm text-center shadow-sm">
      <p className="text-xs tracking-widest uppercase mb-2 text-[var(--color-accent)]">{data.label}</p>
      <p className="font-display text-lg mb-1">{data.date}</p>
      <p className="text-sm mb-4">{data.time}</p>
      <p className="font-medium">{data.venue}</p>
      <p className="text-sm text-[var(--color-text-muted)] mb-4">{data.address}</p>
      
        <a href={data.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm border border-[var(--color-accent)] rounded-full px-5 py-2 hover:bg-[var(--color-bg-alt)] transition"
      >
        Lihat Lokasi
      </a>
    </div>
  )
}

function Acara() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[var(--color-bg-accent)] text-[var(--color-text)]">
            <Reveal className="flex flex-col items-center">
        <p className="text-xs tracking-[0.3em] uppercase mb-2 text-[var(--color-accent)]">Rangkaian acara</p>
        <h2 className="font-display text-2xl mb-2">Save The Date</h2>
        <Ornament />
      </Reveal>
      <div className="flex flex-col md:flex-row gap-6">
        <AcaraCard data={weddingData.akad} />
        <AcaraCard data={weddingData.resepsi} />
      </div>
    </section>
  )
}

// ============================================
// SECTION: LOVE STORY
// ============================================
function LoveStory() {
  return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[var(--color-bg)] text-[var(--color-text)]">
      <Reveal className="flex flex-col items-center">
        <p className="text-xs tracking-[0.3em] uppercase mb-2 text-[var(--color-accent)]">Perjalanan cinta</p>
        <h2 className="font-display text-2xl mb-2">Love Story</h2>
        <Ornament />
      </Reveal>
      <div className="max-w-2xl w-full space-y-10 mt-6">
        {weddingData.loveStory.map((moment, index) => (
          <Reveal key={index} delay={index * 100} className="flex flex-col md:flex-row gap-6 items-center">
            <img src={moment.photo} alt={moment.title} className="elegant-photo w-full md:w-52 h-40 object-cover rounded-lg flex-shrink-0" />
            <div className="text-center md:text-left">
              <p className="text-xs tracking-widest uppercase text-[var(--color-accent)] mb-1">{moment.date}</p>
              <h3 className="font-display text-xl mb-2">{moment.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)]">{moment.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

// ============================================
// SECTION: GALERI
// ============================================
function Galeri() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[var(--color-bg-alt)] text-[var(--color-text)]">
            <Reveal className="flex flex-col items-center">
        <p className="text-xs tracking-[0.3em] uppercase mb-2 text-[var(--color-accent)]">Momen berharga</p>
        <h2 className="font-display text-2xl mb-2">Galeri Foto</h2>
        <Ornament />
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl w-full mt-6">
        {weddingData.gallery.map((photo, index) => (
          <Reveal key={index} delay={index * 80}>
            <img
              src={photo}
              alt={`Galeri ${index + 1}`}
              onClick={() => setSelectedPhoto(photo)}
              className="elegant-photo w-full h-40 object-cover rounded-lg cursor-pointer"
            />
          </Reveal>
        ))}
      </div>

      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50 cursor-pointer"
        >
          <img src={selectedPhoto} alt="Preview" className="max-w-full max-h-full rounded-lg" />
        </div>
      )}
    </section>
  )
}

// ============================================
// SECTION: RSVP
// ============================================
function RSVP() {
  const [form, setForm] = useState({ nama: '', jumlah: 1, status: 'Hadir' })
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.nama.trim()) {
      setError('Nama wajib diisi')
      return
    }
    setError('')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[var(--color-bg-accent)] text-[var(--color-text)]">
        <h3 className="font-display text-2xl mb-3">Terima kasih, {form.nama}!</h3>
        <p className="text-sm text-[var(--color-text-muted)]">Konfirmasi kehadiranmu sudah kami terima.</p>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[var(--color-bg-accent)] text-[var(--color-text)]">
            <Reveal className="flex flex-col items-center">
        <p className="text-xs tracking-[0.3em] uppercase mb-2 text-[var(--color-accent)]">Konfirmasi kehadiran</p>
        <h2 className="font-display text-2xl mb-2">RSVP</h2>
        <Ornament />
      </Reveal>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div>
          <input
            type="text"
            placeholder="Nama lengkap"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            className="w-full border border-[var(--color-accent)] rounded-lg px-4 py-3 text-sm bg-[var(--color-bg)]"
          />
          {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
        </div>

        <input
          type="number"
          min="1"
          placeholder="Jumlah tamu"
          value={form.jumlah}
          onChange={(e) => setForm({ ...form, jumlah: e.target.value })}
          className="w-full border border-[var(--color-accent)] rounded-lg px-4 py-3 text-sm bg-[var(--color-bg)]"
        />

        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          className="w-full border border-[var(--color-accent)] rounded-lg px-4 py-3 text-sm bg-[var(--color-bg)]"
        >
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
          <option value="Ragu-ragu">Ragu-ragu</option>
        </select>

        <button
          type="submit"
          className="w-full rounded-full py-3 text-sm tracking-wide hover:opacity-90 transition text-[var(--color-bg)] bg-[var(--color-dark)]"
        >
          Kirim Konfirmasi
        </button>
      </form>
    </section>
  )
}

// ============================================
// SECTION: UCAPAN & DOA
// ============================================
function Ucapan() {
  const [ucapanList, setUcapanList] = useState(weddingData.initialUcapan)
  const [form, setForm] = useState({ nama: '', pesan: '' })
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.nama.trim() || !form.pesan.trim()) {
      setError('Nama dan pesan wajib diisi')
      return
    }
    setError('')
    setUcapanList([{ nama: form.nama, pesan: form.pesan }, ...ucapanList])
    setForm({ nama: '', pesan: '' })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[var(--color-bg)] text-[var(--color-text)]">
            <Reveal className="flex flex-col items-center">
        <p className="text-xs tracking-[0.3em] uppercase mb-2 text-[var(--color-accent)]">Kirim ucapan & doa</p>
        <h2 className="font-display text-2xl mb-2">Buku Tamu</h2>
        <Ornament />
      </Reveal>

      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-3 mb-10">
        <input
          type="text"
          placeholder="Nama"
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
          className="w-full border border-[var(--color-accent)] rounded-lg px-4 py-3 text-sm bg-[var(--color-bg-alt)]"
        />
        <textarea
          placeholder="Tulis ucapan dan doa..."
          value={form.pesan}
          onChange={(e) => setForm({ ...form, pesan: e.target.value })}
          rows={3}
          className="w-full border border-[var(--color-accent)] rounded-lg px-4 py-3 text-sm bg-[var(--color-bg-alt)]"
        />
        {error && <p className="text-xs text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full rounded-full py-3 text-sm tracking-wide hover:opacity-90 transition text-[var(--color-bg)] bg-[var(--color-dark)]"
        >
          Kirim Ucapan
        </button>
      </form>

      <div className="w-full max-w-sm space-y-4">
                {ucapanList.map((item, index) => (
          <Reveal key={index} delay={index * 80} className="border-b border-[var(--color-bg-accent)] pb-3">
            <p className="font-medium text-sm">{item.nama}</p>
            <p className="text-sm text-[var(--color-text-muted)]">{item.pesan}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

// ============================================
// SECTION: AMPLOP DIGITAL
// ============================================
function AmplopCard({ account }) {
  const [copied, setCopied] = useState(false)
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${account.nomor}`

  const handleCopy = () => {
    navigator.clipboard.writeText(account.nomor)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-[var(--color-bg)] rounded-xl p-6 max-w-xs text-center shadow-sm">
      <img src={qrUrl} alt={`QR ${account.bank}`} className="w-32 h-32 mx-auto mb-4" />
      <p className="text-sm font-medium">{account.bank}</p>
      <p className="font-display text-lg tracking-wide my-1">{account.nomor}</p>
      <p className="text-xs text-[var(--color-text-muted)] mb-4">a.n {account.atasNama}</p>
      <button
        onClick={handleCopy}
        className="text-xs border border-[var(--color-accent)] rounded-full px-4 py-2 hover:bg-[var(--color-bg-alt)] transition"
      >
        {copied ? 'Tersalin!' : 'Salin Nomor Rekening'}
      </button>
    </div>
  )
}

function AmplopDigital() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[var(--color-bg-alt)] text-[var(--color-text)]">
            <Reveal className="flex flex-col items-center">
        <p className="text-xs tracking-[0.3em] uppercase mb-2 text-[var(--color-accent)]">Amplop digital</p>
        <h2 className="font-display text-2xl mb-2">Kado Untuk Mempelai</h2>
        <Ornament />
      </Reveal>
      <p className="text-sm text-[var(--color-text-muted)] max-w-sm text-center mb-10">
        Doa restu Bapak/Ibu adalah karunia yang sangat berarti bagi kami.
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        {weddingData.bankAccounts.map((account, index) => (
          <AmplopCard key={index} account={account} />
        ))}
      </div>
    </section>
  )
}

// ============================================
// FOOTER
// ============================================
function Footer() {
  const [muted, setMuted] = useState(false)

  return (
    <footer className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative bg-[var(--color-dark)] text-[var(--color-bg)]">
      <h2 className="font-display text-3xl mb-6">{weddingData.coupleNames}</h2>
      <p className="text-sm opacity-70 max-w-md mb-10">{weddingData.thankYouMessage}</p>
      <p className="text-xs opacity-50">Dengan penuh cinta dan doa</p>

      <button
        onClick={() => setMuted(!muted)}
        className="absolute bottom-6 right-6 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-xs hover:bg-white/10 transition"
        aria-label={muted ? 'Aktifkan musik' : 'Matikan musik'}
      >
        {muted ? '🔇' : '🔊'}
      </button>
    </footer>
  )
}

// ============================================
// APP UTAMA
// ============================================
function App() {
  const [opened, setOpened] = useState(false)
  const [themeKey, setThemeKey] = useState('ivoryGold')

  // Setiap themeKey berubah, kita "suntik" warnanya ke CSS variable global
  useEffect(() => {
    const t = themes[themeKey]
    const root = document.documentElement
    root.style.setProperty('--color-bg', t.bg)
    root.style.setProperty('--color-bg-alt', t.bgAlt)
    root.style.setProperty('--color-bg-accent', t.bgAccent)
    root.style.setProperty('--color-text', t.text)
    root.style.setProperty('--color-text-muted', t.textMuted)
    root.style.setProperty('--color-accent', t.accent)
    root.style.setProperty('--color-dark', t.dark)
  }, [themeKey])

  return (
    <div>
      <ThemeSwitcher current={themeKey} onChange={setThemeKey} />
      {!opened && <Cover onOpen={() => setOpened(true)} />}
      {opened && (
        <div>
          <Countdown />
          <Mempelai />
          <Acara />
          <LoveStory />
          <Galeri />
          <RSVP />
          <Ucapan />
          <AmplopDigital />
          <Footer />
        </div>
      )}
    </div>
  )
}

export default App