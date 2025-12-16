import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import './SplashScreen.css'

const SplashScreen = ({ onComplete }) => {
  const [showCaption, setShowCaption] = useState(false)

  useEffect(() => {
    // Show caption after brand appears
    const timer1 = setTimeout(() => setShowCaption(true), 800)
    // Complete after animation sequence
    const timer2 = setTimeout(() => {
      onComplete()
    }, 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [onComplete])

  return (
    <motion.div
      className="splash-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="splash-content">
        <motion.div
          className="splash-brand"
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.4, 0, 0.2, 1],
            delay: 0.2
          }}
        >
          <motion.h1
            className="splash-logo"
          >
            FUMEHUB
          </motion.h1>
          <motion.div
            className="splash-line"
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
        </motion.div>

        <AnimatePresence>
          {showCaption && (
            <motion.p
              className="splash-caption"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover Your Signature Scent
            </motion.p>
          )}
        </AnimatePresence>

        <motion.div
          className="splash-particles"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ 
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                opacity: 0
              }}
              animate={{
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 0.5,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default SplashScreen

