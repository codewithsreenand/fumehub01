import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-brand">
            <h3 className="footer-logo">FUMEHUB</h3>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Shop</h4>
              <a href="#products" className="footer-link">Collection</a>
              <a href="#" className="footer-link">New Arrivals</a>
              <a href="#" className="footer-link">Best Sellers</a>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">About</h4>
              <a href="#" className="footer-link">Our Story</a>
              <a href="#" className="footer-link">Contact</a>
              <a href="#" className="footer-link">Careers</a>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Support</h4>
              <a href="#" className="footer-link">Shipping</a>
              <a href="#" className="footer-link">Returns</a>
              <a href="#" className="footer-link">FAQ</a>
            </div>
          </div>
        </motion.div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 FUMEHUB
          </p>
          <div className="footer-social">
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

