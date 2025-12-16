import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="about-title">Our Story</h2>
          <p className="about-subtitle">THE HIGH STRESS FAVOURITE</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="about-paragraph">
              FUMEHUB, fragrance is more than a scent - it is memory, identity, and presence woven into every note. Our journey began with a pursuit to make fine perfumery accessible without compromise, crafting scents that honor the artistry of luxury fragrances while bringing them within reach for everyday wear.
            </p>
            <p className="about-paragraph">
              We draw inspiration from iconic designer perfumes, not to imitate, but to refine - capturing their spirit, elegance, and character with integrity and precision. Each creation is a reimagined tribute: a dialogue between tradition and modernity, alive with emotion, designed to define moments and linger long after you've left the room.
            </p>
            <p className="about-paragraph">
              Our perfumes carry names inspired by cities across the world - Naples, Havana, Paris, Seoul - places alive with rhythm, culture, and story. We believe each bottle is more than fragrance; it is travel, memory, and individuality distilled.
            </p>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="about-image-wrapper">
              <img 
                src="/generated-image.png" 
                alt="Fumehub Story" 
                className="about-image-img"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

