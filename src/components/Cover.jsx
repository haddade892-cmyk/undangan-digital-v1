import { useState, useEffect } from 'react'
import weddingData from '../data/weddingData'

function CornerFrame({ position }) {
  const isRight = position === 'right'
  return (
    <svg
      width="60" height="60" viewBox="0 0 60 60"
      className={`absolute top-6 ${isRight ? 'right-6 scale-x-[-1]' : 'left-6'} opacity-60`}
    >
      <path d="M2,30 L2,10 Q2,2 10,2 L30,2" fill="none" stroke="white" strokeWidth="0.75" />
      <circle cx="2" cy="2" r="1.5" fill="white" />
    </svg>
  )
}

function Cover({ onOpen }) {
  const [guestName, setGuestName] = useState(weddingData.defaultGuestLabel)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const to = params.get('to')
    if (to) setGuestName(to)
    setVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 text-center overflow-hidden">
      <img
        src={weddingData.cover.backgroundImage}
        alt=""
        className="elegant-photo absolute inset-0 w-full h-full object-cover scale-105"
      />
      {/* Vignette gelap di tepi, lebih terang di tengah — kesan lebih premium dari overlay hitam rata */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.65) 100%)'
      }} />

      <CornerFrame position="left" />
      <CornerFrame position="right" />

      <div
        className="relative z-10 transition-all duration-1000"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1)' : 'scale(1.04)',
        }}
      >
        <p className="text-xs tracking-[0.3em] uppercase mb-6">The Wedding Of</p>

        <h1 className="font-display text-5xl mb-2">{weddingData.groom.name}</h1>
        <div className="font-display text-2xl my-2 opacity-80">&</div>
        <h1 className="font-display text-5xl mb-8">{weddingData.bride.name}</h1>

        <div className="w-16 h-px bg-white/40 mx-auto mb-8" />

        <p className="text-xs tracking-widest uppercase mb-1">Kepada Yth</p>
        <p className="text-lg font-display mb-10">{guestName}</p>

        <button
          onClick={onOpen}
          className="border border-white/60 rounded-full px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  )
}

export default Cover