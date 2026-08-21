import { useState, useEffect } from 'react'
import weddingData from '../../data/weddingData'

function CoverSplit({ onOpen }) {
  const [guestName, setGuestName] = useState(weddingData.defaultGuestLabel)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const to = params.get('to')
    if (to) setGuestName(to)
    setVisible(true)
  }, [])

  return (
    <div className={`min-h-screen flex flex-col md:flex-row transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative w-full md:w-1/2 h-[45vh] md:h-screen overflow-hidden">
        <img src={weddingData.cover.preweddingPhoto} alt="" className="elegant-photo absolute inset-0 w-full h-full object-cover" />
      </div>
      <div
        className="w-full md:w-1/2 flex-1 flex flex-col items-center justify-center px-8 py-16 text-center"
        style={{ background: 'var(--color-dark)', color: 'var(--color-on-dark)' }}
      >
        <p className="text-xs tracking-[0.3em] uppercase mb-6 opacity-70">The Wedding Of</p>
        <h1 className="font-display text-5xl leading-tight mb-1">{weddingData.groom.name}</h1>
        <div className="font-display text-xl my-2 opacity-60">&</div>
        <h1 className="font-display text-5xl leading-tight mb-8">{weddingData.bride.name}</h1>
        <div className="w-16 h-px bg-current opacity-30 mb-8" />
        <p className="text-xs tracking-widest uppercase mb-1 opacity-70">Kepada Yth</p>
        <p className="text-lg font-display mb-10">{guestName}</p>
        <button onClick={onOpen} className="border border-current rounded-full px-8 py-3 text-xs tracking-[0.2em] uppercase opacity-90 hover:opacity-100 hover:bg-white/10 transition">
          Buka Undangan
        </button>
      </div>
    </div>
  )
}

export default CoverSplit