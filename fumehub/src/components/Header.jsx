import { useState, useEffect, useMemo } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import './Header.css'

const Header = ({ cartCount, onCartClick }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const { scrollY } = useScroll()
  const [lastScrollY, setLastScrollY] = useState(0)
  const navigate = useNavigate()

  const results = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()
    if (!term) return []
    return products
      .filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.inspiredBy.toLowerCase().includes(term)
      )
      .slice(0, 6)
  }, [searchTerm])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setSearchOpen(false)
      }
    }
    const onClick = (e) => {
      if (searchOpen && !e.target.closest('.search-panel') && !e.target.closest('.search-button')) {
        setSearchOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousedown', onClick)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('mousedown', onClick)
    }
  }, [searchOpen])

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY && latest > 100) {
      // Scrolling down
      setIsVisible(false)
    } else {
      // Scrolling up
      setIsVisible(true)
    }
    setLastScrollY(latest)
  })

  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="header-container">
        <nav className="nav nav-left">
          <Link to="/login" className="login-icon-wrapper">
            <motion.button
              className="login-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Login"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
            </motion.button>
          </Link>
        </nav>
        <Link to="/" className="logo-wrapper">
          <motion.h1
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            FUMEHUB
          </motion.h1>
        </Link>
        <nav className="nav nav-right">
          <motion.button
            className="search-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.65" y1="16.65" x2="21" y2="21" />
            </svg>
          </motion.button>
          <motion.button
            className="cart-button"
            onClick={onCartClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 2L7 6m8-4l2 4M3 8h18l-1 10H4L3 8z" />
              <circle cx="7" cy="20" r="1" />
              <circle cx="17" cy="20" r="1" />
            </svg>
            {cartCount > 0 && (
              <motion.span
                className="cart-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                {cartCount}
              </motion.span>
            )}
          </motion.button>
        </nav>
      </div>
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="search-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              className="search-panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="search-input-row">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Search by name or inspired by..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
                {searchTerm && (
                  <button
                    className="search-clear"
                    onClick={() => setSearchTerm('')}
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>
              <div className="search-results">
                {searchTerm.trim() === '' && (
                  <div className="search-empty">Type to search products</div>
                )}
                {searchTerm.trim() !== '' && results.length === 0 && (
                  <div className="search-empty">No matches found.</div>
                )}
                {results.map((p) => (
                  <button
                    key={p.id}
                    className="search-result"
                    onClick={() => {
                      setSearchOpen(false)
                      setSearchTerm('')
                      navigate(`/product/${p.id}`)
                    }}
                  >
                    <img src={p.image} alt={p.name} loading="lazy" />
                    <div className="result-info">
                      <div className="result-name">{p.name}</div>
                      <div className="result-inspired">Inspired by {p.inspiredBy}</div>
                      <div className="result-price">S${p.price}</div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header

