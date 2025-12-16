import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { categories } from '../data/products'
import './ProductCard.css'

const ProductCard = ({ product, addToCart, index }) => {
  const navigate = useNavigate()
  const originalPrice = Math.ceil(product.price / 0.9)

  const handleCardClick = () => {
    navigate(`/product/${product.id}`)
  }

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={handleCardClick}
    >
      <motion.div
        className="product-image-container"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      >
        <div className="product-image">
          <img 
            src={product.image} 
            alt={product.name}
            loading="lazy"
            onError={(e) => {
              if (e.target.dataset.fallback === 'true') return
              e.target.dataset.fallback = 'true'
              e.target.src = '/perfume-image.jpg'
              e.target.style.display = 'block'
            }}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
          <div className="image-placeholder" style={{ display: 'none' }}>
            <div className="placeholder-content">
              <div className="bottle-shape"></div>
              <p className="placeholder-text">FUMEHUB</p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="product-info">
        <div className="product-header-info">
          <h3 className="product-name">{product.name}</h3>
          {product.category && (
            <motion.div
              className="product-category-badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <span className="category-badge-text">
                {categories.find(c => c.id === product.category)?.name}
              </span>
            </motion.div>
          )}
        </div>
        <p className="product-inspired">Inspired by {product.inspiredBy}</p>
        <p className="product-description">
          {product.description}
        </p>
        <button
          className="product-more"
          type="button"
          onClick={handleCardClick}
        >
          View more info
        </button>
        <div className="product-footer">
          <div className="price-block">
            <span className="price-original">S${originalPrice}</span>
            <span className="price-current">S${product.price}</span>
            <span className="price-discount">10% OFF</span>
          </div>
          <motion.button
            className="add-to-cart-btn"
            onClick={(e) => {
              e.stopPropagation()
              addToCart(product)
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard

