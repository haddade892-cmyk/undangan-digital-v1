import { useState, useEffect } from 'react'
import { Mail } from 'lucide-react'
import weddingData from '../../data/weddingData'
import CoverBackground from '../CoverBackground'
import CornerBotanical from '../CornerBotanical'
import CircleFrame from '../CircleFrame'

function CoverHybrid({ onOpen }) {
  const [guestName, setGuestName] = useState(weddingData.defaultGuestLabel)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const to = params.get('to')
    if (to) setGuestName(to)
    setVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white text-center px-6 overflow-hidden">
      <CoverBackground />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.7) 100%)' }}
      />

      <CornerBotanical position="top-left" />
      <CornerBotanical position="top-right" />
      <CornerBotanical position="bottom-left" />
      <CornerBotanical position="bottom-right" />

      <div
        className="relative z-10 transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)' }}
      >
        <p className="text-xs tracking-[0.35em] uppercase mb-6" style={{ color: 'var(--color-accent)' }}>
          Happy Wedding
        </p>

        <div className="mb-6">
          <CircleFrame src={weddingData.cover.preweddingPhoto} alt={weddingData.coupleNames} size={200} />
        </div>

        <h1
          className="mb-2"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: 'clamp(2.2rem, 9vw, 3rem)',
            color: 'var(--color-accent)',
          }}
        >
          {weddingData.groom.name} & {weddingData.bride.name}
        </h1>

        <p className="text-xs tracking-widest uppercase mb-6 opacity-80">{weddingData.akad.date}</p>

        <p className="text-sm max-w-xs mx-auto mb-6 opacity-85 leading-relaxed">
          {weddingData.cover.greeting}
        </p>

        <p className="text-sm mb-1 opacity-80">Kepada</p>
        <p className="text-lg font-semibold mb-8">{guestName}</p>

        <button
          onClick={onOpen}
          className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-xs tracking-[0.15em] uppercase transition hover:opacity-90 border border-white/50"
        >
          <Mail size={14} /> Buka Undangan
        </button>
      </div>
    </div>
  )
}

export default CoverHybrid