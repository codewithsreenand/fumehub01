import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { products, categories } from '../data/products'
import './CategoryProducts.css'

const CategoryProducts = ({ addToCart }) => {
  const { categoryId } = useParams()
  const navigate = useNavigate()

  // Get category info
  const category = categories.find(c => c.id === categoryId) || categories[0]
  
  // Filter products by category
  const categoryProducts = categoryId === 'all'
    ? products
    : products.filter(product => product.category === categoryId)

  return (
    <div className="category-products-page">
      <div className="category-products-container">
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

        <motion.div
          className="category-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="category-page-title">{category.name.toUpperCase()}</h1>
          {category.description && (
            <p className="category-page-description">{category.description}</p>
          )}
        </motion.div>

        {categoryProducts.length === 0 ? (
          <div className="no-products">
            <p>No products found in this category.</p>
          </div>
        ) : (
          <div className="category-products-grid">
            {categoryProducts.map((product, index) => (
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
    </div>
  )
}

export default CategoryProducts

