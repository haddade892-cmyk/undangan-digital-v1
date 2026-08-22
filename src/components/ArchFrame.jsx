import useReveal from '../hooks/useReveal'

function ArchFrame({ src, alt }) {
  const [ref, visible] = useReveal(0.3)

  return (
    <div ref={ref} className="relative w-[190px] h-[230px] mx-auto">
      <svg viewBox="0 0 200 240" className="absolute inset-0 w-full h-full pointer-events-none">
        <path
          d="M4 240 V80 C4 36 40 4 100 4 C160 4 196 36 196 80 V240"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          style={{
            strokeDasharray: 700,
            strokeDashoffset: visible ? 0 : 700,
            transition: 'stroke-dashoffset 1.8s ease',
          }}
        />
      </svg>
      <div className="absolute" style={{ inset: '10px', borderRadius: '95px 95px 4px 4px', overflow: 'hidden' }}>
        <img src={src} alt={alt} className="elegant-photo w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default ArchFrame