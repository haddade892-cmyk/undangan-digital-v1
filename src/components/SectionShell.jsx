import { useId } from 'react'

function SectionShell({ id, base, textColor = 'var(--color-text)', waveFill, bgImage, children, className = '' }) {
  const patternId = useId()
  return (
    <section
      id={id}
      className={`relative overflow-hidden min-h-screen flex flex-col items-center justify-center px-6 py-16 ${className}`}
      style={{ color: textColor }}
    >
      {bgImage ? (
        <>
          <img src={bgImage} alt="" className="elegant-photo absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `color-mix(in srgb, ${base} 80%, transparent)` }} />
        </>
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 15% 15%, color-mix(in srgb, var(--color-accent) 12%, transparent), transparent 42%), radial-gradient(circle at 85% 85%, color-mix(in srgb, var(--color-accent) 9%, transparent), transparent 45%), ${base}`,
          }}
        />
      )}

      
	              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.09 }}>
        <defs>
          <pattern id={`diamond-${patternId}`} width="26" height="46" patternUnits="userSpaceOnUse">
            <path d="M28 4 L52 28 L28 52 L4 28 Z" fill="none" stroke="var(--color-accent)" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#diamond-${patternId})`} />
      </svg>
      <div className="relative z-10 w-full flex flex-col items-center">{children}</div>

      {waveFill && (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none" style={{ transform: 'translateY(1px)' }}>
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[50px] block">
            <path d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z" fill={waveFill} />
          </svg>
        </div>
      )}
    </section>
  )
}

export default SectionShell