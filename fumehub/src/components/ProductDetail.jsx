import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { products } from '../data/products'
import ProductComparison from './ProductComparison'
import './ProductDetail.css'

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [engraving, setEngraving] = useState('no')
  const [engravingText, setEngravingText] = useState('')
  const [expandedSections, setExpandedSections] = useState({
    scentNotes: false,
    wearGuide: false,
    ingredients: false,
    shipping: false,
    disclaimer: false
  })

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id))
    if (foundProduct) {
      setProduct(foundProduct)
    }
  }, [id])

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    )
  }

  const handleAddToCart = () => {
    const surcharge = engraving === 'yes' ? 5 : 0
    const engravedId = engraving === 'yes'
      ? `${product.id}-engraved-${(engravingText || 'custom').trim() || 'custom'}`
      : product.id
    if (engraving === 'yes' && engravingText.trim().length === 0) {
      return
    }
    const itemForCart = {
      ...product,
      id: engravedId,
      price: product.price + surcharge,
      engraving: engraving === 'yes',
      engravingText: engraving === 'yes' ? engravingText.trim() : ''
    }
    for (let i = 0; i < quantity; i++) {
      addToCart(itemForCart)
    }
  }

  return (
    <motion.div
      className="product-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="product-detail-container">
        <motion.button
          className="back-button"
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </motion.button>

        <div className="product-detail-content">
          <motion.div
            className="product-detail-image"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="product-detail-water-effect"></div>
            <motion.div
              className="product-image-wrapper"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="product-detail-img"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="product-detail-info"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-inspired">Inspired by {product.inspiredBy}</p>
            
            <div className="product-detail-divider"></div>

            <p className="product-detail-description">{product.description}</p>

            {/* Stock Count */}
            {product.stockCount !== undefined && (
              <div className="stock-alert">
                <span className="stock-text">HURRY UP! ONLY {product.stockCount} LEFT IN STOCK</span>
              </div>
            )}

            <div className="product-detail-specs">
              <div className="spec-item">
                <span className="spec-label">Volume</span>
                <span className="spec-value">50ml / 1.7oz</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Origin</span>
                <span className="spec-value">Singapore</span>
              </div>
            </div>

            <div className="product-detail-divider"></div>

            {/* Purchase Section - Moved to Top */}
            <div className="product-detail-purchase">
              <div className="price-section">
                <div className="detail-price-stack">
                  <span className="detail-price-original">S${Math.ceil(product.price / 0.9)}</span>
                  <span className="product-detail-price">S${product.price + (engraving === 'yes' ? 5 : 0)}</span>
                  <span className="detail-price-discount">10% OFF</span>
                </div>
              </div>

              <div className="engraving-section">
                <label htmlFor="engraving">Engraving</label>
                <div className="engraving-options">
                  <button
                    className={`engraving-option ${engraving === 'no' ? 'active' : ''}`}
                    onClick={() => setEngraving('no')}
                  >
                    No
                  </button>
                  <button
                    className={`engraving-option ${engraving === 'yes' ? 'active' : ''}`}
                    onClick={() => setEngraving('yes')}
                  >
                    Yes +5SGD
                  </button>
                </div>
                {engraving === 'yes' && (
                  <div className="engraving-input-block">
                    <p className="engraving-helper">
                      Personalize with your engraving here<br />
                      (Engraving will be placed on the back of the bottle).*
                    </p>
                    <label className="engraving-text-label" htmlFor="engraving-text">Your Engraving Text</label>
                    <div className="engraving-textarea-wrapper">
                      <input
                        id="engraving-text"
                        type="text"
                        maxLength={10}
                        value={engravingText}
                        onChange={(e) => setEngravingText(e.target.value)}
                        placeholder="Up to 10 characters"
                      />
                      <span className="engraving-count">{engravingText.length}/10</span>
                    </div>
                    {engravingText.trim().length === 0 && (
                      <p className="engraving-error">Engraving text is required.</p>
                    )}
                  </div>
                )}
              </div>

              <div className="quantity-section">
                <label htmlFor="quantity">Quantity</label>
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    −
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="quantity-input"
                  />
                  <button
                    className="quantity-btn"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <motion.button
                className="add-to-cart-detail"
                onClick={handleAddToCart}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Add to Cart
              </motion.button>
            </div>

            <div className="product-detail-divider"></div>

            {/* Expandable Sections */}
            <div className="expandable-sections">
              {/* Scent Notes */}
              {product.scentNotes && (
                <div className="expandable-section">
                  <button
                    className="expandable-header"
                    onClick={() => toggleSection('scentNotes')}
                  >
                    <span>Scent Notes</span>
                    <motion.svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      animate={{ rotate: expandedSections.scentNotes ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {expandedSections.scentNotes && (
                      <motion.div
                        className="expandable-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="scent-notes">
                          <div className="note-category">
                            <span className="note-label">Top:</span>
                            <span className="note-values">{product.scentNotes.top.join(', ')}</span>
                          </div>
                          <div className="note-category">
                            <span className="note-label">Middle:</span>
                            <span className="note-values">{product.scentNotes.middle.join(', ')}</span>
                          </div>
                          <div className="note-category">
                            <span className="note-label">Base:</span>
                            <span className="note-values">{product.scentNotes.base.join(', ')}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Wear Guide */}
              {product.wearGuide && (
                <div className="expandable-section">
                  <button
                    className="expandable-header"
                    onClick={() => toggleSection('wearGuide')}
                  >
                    <span>Wear Guide</span>
                    <motion.svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      animate={{ rotate: expandedSections.wearGuide ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {expandedSections.wearGuide && (
                      <motion.div
                        className="expandable-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="wear-guide-content">
                          <p>{product.wearGuide}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Ingredients */}
              {product.ingredients && (
                <div className="expandable-section">
                  <button
                    className="expandable-header"
                    onClick={() => toggleSection('ingredients')}
                  >
                    <span>Ingredients</span>
                    <motion.svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      animate={{ rotate: expandedSections.ingredients ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {expandedSections.ingredients && (
                      <motion.div
                        className="expandable-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="ingredients-content">
                          <p>{product.ingredients}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Shipping & Return */}
              {product.shippingInfo && (
                <div className="expandable-section">
                  <button
                    className="expandable-header"
                    onClick={() => toggleSection('shipping')}
                  >
                    <span>Shipping & Return</span>
                    <motion.svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      animate={{ rotate: expandedSections.shipping ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {expandedSections.shipping && (
                      <motion.div
                        className="expandable-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="shipping-info">
                          <div className="shipping-item">
                            <h4>Processing Time</h4>
                            <p>{product.shippingInfo.processingTime}</p>
                          </div>
                          <div className="shipping-item">
                            <h4>Domestic Shipping (Singapore)</h4>
                            <p>{product.shippingInfo.domesticShipping}</p>
                          </div>
                          <div className="shipping-item">
                            <h4>International Shipping</h4>
                            <p>{product.shippingInfo.internationalShipping}</p>
                          </div>
                          <div className="shipping-item">
                            <h4>Tracking</h4>
                            <p>{product.shippingInfo.tracking}</p>
                          </div>
                          <div className="shipping-item">
                            <h4>Delivery Issues</h4>
                            <p>{product.shippingInfo.deliveryIssues}</p>
                          </div>
                          <div className="shipping-item">
                            <h4>Incorrect or Incomplete Addresses</h4>
                            <p>{product.shippingInfo.incorrectAddress}</p>
                          </div>
                          <div className="shipping-item">
                            <h4>Failed Deliveries & Re-delivery</h4>
                            <p>{product.shippingInfo.failedDeliveries}</p>
                          </div>
                          <div className="shipping-item">
                            <h4>Contact Us</h4>
                            <p>{product.shippingInfo.contact}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Disclaimer */}
              {product.disclaimer && (
                <div className="expandable-section">
                  <button
                    className="expandable-header"
                    onClick={() => toggleSection('disclaimer')}
                  >
                    <span>Disclaimer</span>
                    <motion.svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      animate={{ rotate: expandedSections.disclaimer ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {expandedSections.disclaimer && (
                      <motion.div
                        className="expandable-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="disclaimer-content">
                          {product.disclaimer.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </motion.div>
        </div>
        <ProductComparison />
      </div>
    </motion.div>
  )
}

export default ProductDetail

