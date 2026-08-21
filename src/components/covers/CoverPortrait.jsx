import { useState, useEffect } from 'react'
import weddingData from '../../data/weddingData'
import CoverBackground from '../CoverBackground'

function CoverPortrait({ onOpen }) {
  const [guestName, setGuestName] = useState(weddingData.defaultGuestLabel)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const to = params.get('to')
    if (to) setGuestName(to)
    setVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col justify-end items-center text-white text-center overflow-hidden px-6 pb-16">
      <CoverBackground />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.75) 100%)' }} />
      <div className="relative z-10 transition-all duration-1000" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)' }}>
        <h1 className="font-display text-4xl mb-1">{weddingData.groom.name} & {weddingData.bride.name}</h1>
        <p className="text-xs tracking-widest uppercase mb-6 opacity-80">{guestName}</p>
        <button onClick={onOpen} className="border border-white/70 rounded-full px-7 py-2.5 text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition">
          Buka Undangan
        </button>
      </div>
    </div>
  )
}

export default CoverPortrait