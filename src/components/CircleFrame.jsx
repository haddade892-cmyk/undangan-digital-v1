import useReveal from '../hooks/useReveal'

function CircleFrame({ src, alt, size = 170 }) {
  const [ref, visible] = useReveal(0.3)

  return (
    <div ref={ref} className="relative mx-auto" style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full pointer-events-none">
        <circle
          cx="100" cy="100" r="96"
          fill="none" stroke="var(--color-accent)" strokeWidth="1"
          style={{
            strokeDasharray: 603,
            strokeDashoffset: visible ? 0 : 603,
            transition: 'stroke-dashoffset 1.8s ease',
          }}
        />
        <circle cx="100" cy="100" r="86" fill="none" stroke="var(--color-accent)" strokeWidth="0.5" opacity="0.4" />
      </svg>
      <div className="absolute rounded-full overflow-hidden" style={{ inset: 14 }}>
        <img src={src} alt={alt} className="elegant-photo w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default CircleFrame