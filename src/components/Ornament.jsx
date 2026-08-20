function Ornament() {
  return (
    <svg width="120" height="24" viewBox="0 0 120 24" className="mx-auto mb-6" style={{ color: 'var(--color-accent)' }}>
      <line x1="0" y1="12" x2="42" y2="12" stroke="currentColor" strokeWidth="0.75" opacity="0.6" />
      <line x1="78" y1="12" x2="120" y2="12" stroke="currentColor" strokeWidth="0.75" opacity="0.6" />
      <g transform="translate(60,12)">
        <path d="M0,-6 C4,-3 4,3 0,6 C-4,3 -4,-3 0,-6 Z" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.8" />
        <circle r="1.4" fill="currentColor" opacity="0.9" />
        <path d="M-10,0 C-7,-4 -4,-2 -2,0" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
        <path d="M10,0 C7,-4 4,-2 2,0" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      </g>
    </svg>
  )
}

export default Ornament