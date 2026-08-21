function SectionShell({ base, textColor = 'var(--color-text)', waveFill, bgImage, children, className = '' }) {
  return (
    <section
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