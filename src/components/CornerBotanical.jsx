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

export default CornerBotanical