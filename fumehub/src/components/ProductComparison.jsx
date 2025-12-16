import { motion } from 'framer-motion'
import './ProductComparison.css'

const ProductComparison = () => {
  const features = [
    { feature: 'City-inspired Storytelling', fumehub: true, others: false },
    { feature: 'Concentré de Parfum (50%)', fumehub: true, others: false },
    { feature: 'IFRA-certified & HSA-registered', fumehub: true, others: false },
    { feature: 'Accessible pricing', fumehub: true, others: false },
    { feature: 'Thematic collections', fumehub: true, others: false },
    { feature: 'Notes info + Wear Guide', fumehub: true, others: false },
    { feature: 'Engraving or Customization', fumehub: true, others: false },
    { feature: '2–3 day delivery (SG)', fumehub: true, others: false },
    { feature: 'Support for issues (3 days)', fumehub: true, others: false },
    { feature: 'Luxury brand markup', fumehub: true, others: false }
  ]

  return (
    <motion.div
      className="product-comparison"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="comparison-title">Fumehub vs Others</h3>
      <div className="comparison-table">
        <div className="comparison-header">
          <div className="comparison-feature-header">Feature</div>
          <div className="comparison-brand-header fumehub-header">Fumehub</div>
          <div className="comparison-brand-header others-header">Others</div>
        </div>
        <div className="comparison-body">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="comparison-row"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="comparison-feature">{item.feature}</div>
              <div className={`comparison-value ${item.fumehub ? 'check' : 'cross'}`}>
                {item.fumehub ? '✓' : '✗'}
              </div>
              <div className={`comparison-value ${item.others ? 'check' : 'cross'}`}>
                {item.others ? '✓' : '✗'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProductComparison

