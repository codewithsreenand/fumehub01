import express from 'express'
import cors from 'cors'
import { products } from './data/products.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products)
})

// Get single product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id))
  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ error: 'Product not found' })
  }
})

// Create order (checkout)
app.post('/api/orders', (req, res) => {
  const { items, total, customerInfo } = req.body
  
  // In a real app, you would save this to a database
  const order = {
    id: Date.now(),
    items,
    total,
    customerInfo,
    status: 'pending',
    createdAt: new Date().toISOString()
  }
  
  console.log('New order received:', order)
  res.json({ success: true, order })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

