import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Cart from './components/Cart'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'
import ProductDetail from './components/ProductDetail'
import CategoryProducts from './components/CategoryProducts'
import ScrollToTop from './components/ScrollToTop'
import Login from './components/Login'
import Checkout from './pages/Checkout'
import './App.css'

function AppContent() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
          <Route path="/" element={
            <>
              <Header cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />
              <Hero />
              <Products addToCart={addToCart} />
              <About />
              <Footer />
            </>
          } />
        <Route path="/product/:id" element={
          <>
            <Header cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />
            <ProductDetail addToCart={addToCart} />
            <Footer />
          </>
        } />
        <Route path="/category/:categoryId" element={
          <>
            <Header cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />
            <CategoryProducts addToCart={addToCart} />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        total={cartTotal}
      />
    </div>
  )
}

function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>
      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <AppContent />
        </motion.div>
      )}
    </>
  )
}

export default App

