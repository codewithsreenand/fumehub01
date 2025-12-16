import { motion } from 'framer-motion'
import { categories } from '../data/products'
import './CategoryFilter.css'

const CategoryFilter = ({ onCategoryClick, activeCategory }) => {
  return (
    <motion.div
      className="category-filter"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="category-filter-container">
        <h3 className="category-title">DISCOVER BY SCENT</h3>
        <p className="category-subtitle">Find your perfect fragrance match</p>
        <div className="category-buttons">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => onCategoryClick(category.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <span className="category-name">{category.name}</span>
              {category.description && (
                <span className="category-description">{category.description}</span>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default CategoryFilter

