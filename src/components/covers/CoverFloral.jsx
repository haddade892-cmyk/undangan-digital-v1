import { useState, useEffect } from 'react'
import { Mail } from 'lucide-react'
import weddingData from '../../data/weddingData'
import CircleFrame from '../CircleFrame'

function CornerBotanical({ position }) {
  const transforms = {
    'top-left': '',
    'top-right': 'scaleX(-1)',
    'bottom-left': 'scaleY(-1)',
    'bottom-right': 'scale(-1,-1)',
  }
  const posClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  }
  return (
    <svg
      width="120" height="120" viewBox="0 0 130 130"
      className={`absolute ${posClasses[position]} opacity-80 pointer-events-none`}
      style={{ transform: transforms[position] }}
    >
      <g stroke="var(--color-accent)" fill="none" strokeWidth="1" strokeLinecap="round" opacity="0.75">
        <path d="M4 4 C 30 20, 40 45, 60 70" />
        <path d="M4 4 C 20 30, 30 55, 40 90" />
        <path d="M4 4 C 15 40, 15 70, 20 110" />
      </g>
      <g fill="var(--color-accent)" opacity="0.5">
        <ellipse cx="55" cy="62" rx="7" ry="3" transform="rotate(40 55 62)" />
        <ellipse cx="35" cy="82" rx="6" ry="2.5" transform="rotate(65 35 82)" />
        <ellipse cx="18" cy="100" rx="6" ry="2.5" transform="rotate(85 18 100)" />
      </g>
    </svg>
  )
}

function CoverFloral({ onOpen }) {
  const [guestName, setGuestName] = useState(weddingData.defaultGuestLabel)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const to = params.get('to')
    if (to) setGuestName(to)
    setVisible(true)
  }, [])

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at 50% 30%, color-mix(in srgb, var(--color-accent) 14%, var(--color-bg)), var(--color-bg) 70%)`,
        color: 'var(--color-text)',
      }}
    >
      <CornerBotanical position="top-left" />
      <CornerBotanical position="top-right" />
      <CornerBotanical position="bottom-left" />
      <CornerBotanical position="bottom-right" />

      <div
        className="relative z-10 transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)' }}
      >
        <p className="text-xs tracking-[0.35em] uppercase mb-6 text-[var(--color-accent)]">Happy Wedding</p>

        <div className="mb-6">
          <CircleFrame src={weddingData.cover.preweddingPhoto} alt={weddingData.coupleNames} size={200} />
        </div>

        <h1
          className="mb-6"
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

        <p className="text-sm max-w-xs mx-auto mb-6 text-[var(--color-text-muted)] leading-relaxed">
          {weddingData.cover.greeting}
        </p>

        <p className="text-sm mb-1 text-[var(--color-text-muted)]">Kepada</p>
        <p className="font-display text-lg font-semibold mb-8">{guestName}</p>

        <button
          onClick={onOpen}
          className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-xs tracking-[0.15em] uppercase transition hover:opacity-90"
          style={{ background: 'var(--color-dark)', color: 'var(--color-on-dark)' }}
        >
          <Mail size={14} /> Buka Sampul
        </button>
      </div>
    </div>
  )
}

export default CoverFloral