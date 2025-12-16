import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import './ProductSlider.css'

const ProductSlider = ({ products, addToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [productsPerView, setProductsPerView] = useState(3)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [startIndex, setStartIndex] = useState(0)
  const sliderRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const updateProductsPerView = () => {
      if (window.innerWidth <= 768) {
        setProductsPerView(1)
      } else if (window.innerWidth <= 1024) {
        setProductsPerView(2)
      } else {
        setProductsPerView(3)
      }
    }

    updateProductsPerView()
    window.addEventListener('resize', updateProductsPerView)
    return () => window.removeEventListener('resize', updateProductsPerView)
  }, [])

  const maxIndex = Math.max(0, products.length - productsPerView)

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  // Touch/Mouse handlers for swipe
  const handleStart = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    setIsDragging(true)
    setStartX(clientX)
    setStartIndex(currentIndex)
    setDragOffset(0)
  }

  const handleMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const diff = startX - clientX
    setDragOffset(diff)
  }

  const handleEnd = (e) => {
    if (!isDragging) return
    
    const finalDragOffset = dragOffset
    const sliderWidth = sliderRef.current?.offsetWidth || window.innerWidth
    const swipePercentage = (finalDragOffset / sliderWidth) * 100

    setIsDragging(false)
    setDragOffset(0)

    // Determine if we should change slide based on swipe distance (15% of screen width)
    if (Math.abs(swipePercentage) > 15) {
      // Swipe left (positive dragOffset) - go next
      if (finalDragOffset > 0 && currentIndex < maxIndex) {
        goToNext()
      } 
      // Swipe right (negative dragOffset) - go previous
      else if (finalDragOffset < 0 && currentIndex > 0) {
        goToPrevious()
      }
    }
    
    // Prevent click event if we were dragging
    if (Math.abs(finalDragOffset) > 10) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  const translateX = -(currentIndex * (100 / productsPerView))
  const sliderWidth = sliderRef.current?.offsetWidth || window.innerWidth
  const dragPercentage = (dragOffset / sliderWidth) * 100
  const currentTranslate = translateX + dragPercentage

  return (
    <div className="product-slider-container">
      <button
        className="slider-nav-btn slider-nav-prev"
        onClick={goToPrevious}
        disabled={currentIndex === 0}
        aria-label="Previous products"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div 
        className="product-slider"
        ref={sliderRef}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'pan-y pinch-zoom' }}
      >
        <motion.div
          ref={trackRef}
          className="product-slider-track"
          animate={{
            x: `${currentTranslate}%`
          }}
          transition={
            isDragging
              ? { duration: 0, ease: 'linear' }
              : {
                  type: "spring",
                  stiffness: 600,
                  damping: 50,
                  mass: 0.5
                }
          }
        >
          {products.map((product, index) => (
            <div key={product.id} className="slider-item">
              <ProductCard
                product={product}
                addToCart={addToCart}
                index={index}
              />
            </div>
          ))}
        </motion.div>
      </div>

      <button
        className="slider-nav-btn slider-nav-next"
        onClick={goToNext}
        disabled={currentIndex >= maxIndex}
        aria-label="Next products"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}

export default ProductSlider

