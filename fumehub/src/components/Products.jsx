import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import CategoryFilter from './CategoryFilter'
import ProductCard from './ProductCard'
import { products } from '../data/products'
import './Products.css'

const Products = ({ addToCart }) => {
  const navigate = useNavigate()
  
  // Only show bestsellers on main page
  const bestsellerProducts = products.filter(product => product.bestseller)

  const handleCategoryClick = (categoryId) => {
    if (categoryId === 'all') {
      navigate('/category/all')
    } else {
      navigate(`/category/${categoryId}`)
    }
  }

  return (
    <section id="products" className="products">
      <CategoryFilter
        onCategoryClick={handleCategoryClick}
      />
      <div className="products-container">
        <motion.div
          className="products-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Bestsellers</h2>
          <p className="section-subtitle">
            Our most loved fragrances, crafted with precision and passion
          </p>
        </motion.div>
        {bestsellerProducts.length === 0 ? (
          <div className="no-products">
            <p>No bestsellers available.</p>
          </div>
        ) : (
          <div className="products-grid">
            {bestsellerProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Products

