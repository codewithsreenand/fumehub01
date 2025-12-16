import { useRef } from 'react'
import ProductCard from './ProductCard'
import './ProductCarousel.css'

const ProductCarousel = ({ products, addToCart }) => {
  const trackRef = useRef(null)

  const scrollByAmount = (direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.carousel-item')
    const cardWidth = card ? card.offsetWidth : 320
    const gap = 24 // matches CSS gap (1.5rem mobile-ish)
    const amount = direction === 'next' ? cardWidth + gap : -(cardWidth + gap)
    track.scrollBy({ left: amount, behavior: 'smooth' })
  }

  if (!products || products.length === 0) return null

  return (
    <div className="carousel-container">
      <div className="carousel-hint">
        <span className="hint-arrow">←</span>
        <span className="hint-text">Swipe</span>
        <span className="hint-arrow">→</span>
      </div>
      <button
        className="carousel-nav prev"
        onClick={() => scrollByAmount('prev')}
        aria-label="Previous products"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div className="carousel-track" ref={trackRef}>
        {products.map((product, index) => (
          <div className="carousel-item" key={product.id}>
            <ProductCard
              product={product}
              addToCart={addToCart}
              index={index}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-nav next"
        onClick={() => scrollByAmount('next')}
        aria-label="Next products"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}

export default ProductCarousel