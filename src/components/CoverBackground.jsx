import weddingData from '../data/weddingData'

function CoverBackground() {
  const { cover } = weddingData

  if (cover.backgroundType === 'video' && cover.backgroundVideo) {
    return (
      <video autoPlay loop muted playsInline className="elegant-photo absolute inset-0 w-full h-full object-cover">
        <source src={cover.backgroundVideo} type="video/mp4" />
      </video>
    )
  }

  return <img src={cover.backgroundImage} alt="" className="elegant-photo absolute inset-0 w-full h-full object-cover" />
}

export default CoverBackground