import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Cart.css'

const Cart = ({ isOpen, onClose, cart, removeFromCart, updateQuantity, total }) => {
  const navigate = useNavigate()

  const handleCheckout = () => {
    // For now, just navigate to a placeholder checkout page
    if (cart.length === 0) return
    onClose()
    navigate('/checkout')
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="cart-sidebar"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="cart-header">
              <h2 className="cart-title">Shopping Cart</h2>
              <button className="cart-close" onClick={onClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="cart-content">
              {cart.length === 0 ? (
                <div className="cart-empty">
                  <p>Your cart is empty</p>
                  <button className="continue-shopping" onClick={onClose}>
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <div className="cart-items">
                    {cart.map((item) => (
                      <motion.div
                        key={item.id}
                        className="cart-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                      >
                        <div className="cart-item-info">
                          <h4 className="cart-item-name">{item.name}</h4>
                          <p className="cart-item-inspired">Inspired by {item.inspiredBy}</p>
                          {item.engraving && (
                            <p className="cart-item-engraving">
                              Engraving: {item.engravingText ? `"${item.engravingText}"` : 'Yes'} (+$5)
                            </p>
                          )}
                        </div>
                        <div className="cart-item-controls">
                          <div className="quantity-controls">
                            <button
                              className="quantity-btn"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              −
                            </button>
                            <span className="quantity">{item.quantity}</span>
                            <button
                              className="quantity-btn"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                          <span className="cart-item-price">S${(item.price * item.quantity).toFixed(2)}</span>
                          <button
                            className="remove-btn"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="cart-footer">
                  <div className="cart-total">
                    <span className="total-label">Total</span>
                    <span className="total-amount">S${total.toFixed(2)}</span>
                  </div>
                    <button className="checkout-btn" onClick={handleCheckout}>
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Cart

