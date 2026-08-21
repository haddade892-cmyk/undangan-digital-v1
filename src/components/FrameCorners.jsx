function FrameCorners({ children, className = '' }) {
  return (
    <div className={`relative inline-block px-8 py-6 ${className}`}>
      <span className="absolute top-0 left-0 w-6 h-6 border-t border-l" style={{ borderColor: 'var(--color-accent)' }} />
      <span className="absolute top-0 right-0 w-6 h-6 border-t border-r" style={{ borderColor: 'var(--color-accent)' }} />
      <span className="absolute bottom-0 left-0 w-6 h-6 border-b border-l" style={{ borderColor: 'var(--color-accent)' }} />
      <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r" style={{ borderColor: 'var(--color-accent)' }} />
      {children}
    </div>
  )
}

export default FrameCorners