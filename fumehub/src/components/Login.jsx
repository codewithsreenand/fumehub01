import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import './Login.css'

const Login = () => {
  return (
    <>
      <Header cartCount={0} onCartClick={() => {}} />
      <motion.div
        className="login-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="login-container">
          <motion.div
            className="login-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="login-header">
              <Link to="/" className="login-logo">FUMEHUB</Link>
              <h2 className="login-title">Welcome Back</h2>
              <p className="login-subtitle">Sign in to your account</p>
            </div>

            <form className="login-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-input"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox-input" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>

              <motion.button
                type="submit"
                className="login-submit-btn"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Sign In
              </motion.button>
            </form>

            <div className="login-footer">
              <p className="signup-text">
                Don't have an account? <Link to="/signup" className="signup-link">Sign up</Link>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  )
}

export default Login

