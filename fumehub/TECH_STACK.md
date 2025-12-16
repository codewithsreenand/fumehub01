# Fumehub Website - Tech Stack & Coding Details

## 🚀 Technology Stack Overview

### **Frontend Stack**

#### Core Framework & Libraries
- **React 18.2.0** - Modern UI library for building component-based interfaces
- **React DOM 18.2.0** - React renderer for web browsers
- **React Router DOM 6.20.0** - Client-side routing for single-page applications
- **Framer Motion 10.16.4** - Animation library for React components

#### Build Tools & Development
- **Vite 5.0.0** - Fast build tool and development server
- **@vitejs/plugin-react 4.2.1** - Vite plugin for React support
- **Concurrently 8.2.2** - Run multiple npm scripts simultaneously

### **Backend Stack**

- **Node.js** - JavaScript runtime environment
- **Express.js 4.18.2** - Web application framework for Node.js
- **CORS 2.8.5** - Cross-Origin Resource Sharing middleware

### **Styling & Design**

- **CSS3** - Custom CSS with CSS Modules (component-scoped styles)
- **CSS Variables** - Custom properties for theming (brown/white color scheme)
- **Google Fonts** - Bebas Neue (for logo/branding)
- **Self-hosted Fonts** - Dublin font family (Regular & Bold weights)

---

## 📁 Project Structure

```
fumehub/
├── public/
│   ├── fonts/              # Self-hosted Dublin font files
│   ├── perfume-image.jpg  # Product images
│   └── generated-image.png # About section image
│
├── server/
│   ├── index.js           # Express.js backend server
│   ├── data/
│   │   └── products.js   # Product data for API
│   └── package.json      # Backend dependencies
│
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx    # Navigation header
│   │   ├── Hero.jsx      # Hero section
│   │   ├── Products.jsx  # Product listing
│   │   ├── ProductCard.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── ProductComparison.jsx
│   │   ├── Cart.jsx      # Shopping cart sidebar
│   │   ├── About.jsx     # About/Story section
│   │   ├── Footer.jsx    # Footer component
│   │   ├── Login.jsx    # Login page
│   │   └── SplashScreen.jsx
│   │
│   ├── data/
│   │   └── products.js   # Product data (frontend)
│   │
│   ├── App.jsx           # Main app component with routing
│   ├── main.jsx          # React entry point
│   ├── index.css         # Global styles & CSS variables
│   └── App.css           # App-level styles
│
├── index.html            # HTML entry point
├── vite.config.js       # Vite configuration
└── package.json         # Frontend dependencies
```

---

## 🎨 Key Features & Implementation

### **1. Component Architecture**
- **Functional Components** - All components use React hooks (useState, useEffect)
- **Component Composition** - Modular, reusable components
- **Props-based Communication** - Data flow through props

### **2. Routing**
- **React Router DOM** - Client-side routing
- Routes:
  - `/` - Home page (Hero, Products, About, Footer)
  - `/product/:id` - Individual product detail page
  - `/login` - Login page

### **3. State Management**
- **React Hooks**:
  - `useState` - Component state (cart, UI state)
  - `useEffect` - Side effects & lifecycle
  - `useParams` - URL parameters
  - `useNavigate` - Programmatic navigation
  - `useScroll` (Framer Motion) - Scroll position tracking

### **4. Animations**
- **Framer Motion** for:
  - Page transitions
  - Scroll-triggered animations
  - Hover effects
  - Splash screen animations
  - Header fade on scroll
  - Cart slide-in animations

### **5. Styling Approach**
- **CSS Modules** - Component-scoped CSS files
- **CSS Variables** - Theme colors defined in `:root`
- **Responsive Design** - Mobile-first with media queries
- **Flexbox & Grid** - Modern layout techniques

### **6. Responsive Breakpoints**
```css
- Desktop: Default (> 1024px)
- Tablet: max-width: 1024px
- Mobile Large: max-width: 768px
- Mobile Small: max-width: 480px
```

---

## 🛠️ Key Dependencies Explained

### **React 18.2.0**
- Latest stable React version
- Used for building all UI components
- Supports concurrent features

### **React Router DOM 6.20.0**
- Handles client-side routing
- Enables navigation without page reloads
- Supports dynamic routes (`/product/:id`)

### **Framer Motion 10.16.4**
- Animation library built for React
- Used for:
  - Smooth page transitions
  - Scroll animations
  - Micro-interactions
  - Splash screen effects

### **Vite 5.0.0**
- Modern build tool (faster than Webpack)
- Hot Module Replacement (HMR)
- Fast development server
- Optimized production builds

### **Express.js 4.18.2**
- RESTful API endpoints
- Serves product data
- Handles order submissions
- CORS enabled for cross-origin requests

---

## 📦 Installation & Setup

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn

### **Installation Steps**

1. **Install Frontend Dependencies**
```bash
npm install
```

2. **Install Backend Dependencies**
```bash
cd server
npm install
cd ..
```

3. **Run Development Servers**

**Option 1: Run both together**
```bash
npm run dev:all
```

**Option 2: Run separately**
```bash
# Terminal 1 - Frontend (port 5173)
npm run dev

# Terminal 2 - Backend (port 3001)
npm run server
```

4. **Build for Production**
```bash
npm run build
```

---

## 🎯 Key Components Breakdown

### **Header Component**
- Fixed position navigation
- Scroll-based hide/show functionality
- Login button (left), Logo (center), Cart (right)
- Responsive mobile layout

### **Hero Section**
- Full-viewport hero with gradient background
- Water splash effect (CSS animations)
- Product image display
- Call-to-action button

### **Products Section**
- Grid layout for product cards
- Category filtering (Fresh, Floral, Fruity, Warm)
- Product cards with hover effects
- Click to view product details

### **Cart Component**
- Slide-in sidebar cart
- Add/remove items
- Quantity management
- Total calculation

### **Product Detail Page**
- Individual product view
- Product comparison table
- Quantity selector
- Add to cart functionality

### **Splash Screen**
- Animated loading screen
- Brand logo animation
- Auto-transition to main page

---

## 🎨 Design System

### **Color Palette**
```css
--brown-dark: #3d2817
--brown-medium: #6b4e3d
--brown-light: #8b6f47
--brown-accent: #a0826d
--brown-bg: #f5ede5
--brown-bg-light: #faf7f2
--white: #ffffff
--text-dark: #2c1810
--text-light: #6b5d52
```

### **Typography**
- **Logo/Brand**: Bebas Neue (Google Fonts)
- **Body Text**: Dublin (Self-hosted)
- **Headings**: Dublin Bold

### **Spacing System**
- Consistent padding: 4rem (desktop), 2rem (tablet), 1.5rem (mobile)
- Max-width containers: 1400px
- Gap spacing: 2rem-4rem (desktop), 1rem-2rem (mobile)

---

## 🔧 API Endpoints

### **Backend API (Express.js)**

1. **GET /api/products**
   - Returns all products
   - Response: Array of product objects

2. **GET /api/products/:id**
   - Returns single product by ID
   - Response: Product object

3. **POST /api/orders**
   - Creates new order
   - Request body: { items, total, customerInfo }
   - Response: { success: true, order }

---

## 📱 Responsive Features

- **Mobile-first design**
- **Touch-friendly buttons** (min 44px tap targets)
- **Flexible grid layouts**
- **Optimized images** (max-width: 100%)
- **Horizontal scroll prevention**
- **Viewport meta tag** configured

---

## 🚀 Performance Optimizations

1. **Code Splitting** - React Router lazy loading
2. **Image Optimization** - Responsive images with proper sizing
3. **Font Loading** - font-display: swap for faster rendering
4. **CSS Optimization** - Scoped styles, minimal global CSS
5. **Vite Build** - Optimized production bundles

---

## 🔐 Security Considerations

- **CORS** configured for API
- **Input validation** on forms
- **XSS prevention** (React's built-in escaping)
- **HTTPS ready** (for production)

---

## 📝 Development Workflow

1. **Component-based development** - Each feature is a component
2. **CSS Modules** - Styles co-located with components
3. **Hot reload** - Instant updates during development
4. **Git version control** - Track changes

---

## 🎓 Learning Resources

- **React**: https://react.dev
- **React Router**: https://reactrouter.com
- **Framer Motion**: https://www.framer.com/motion
- **Vite**: https://vitejs.dev
- **Express.js**: https://expressjs.com

---

## 📊 Project Statistics

- **Total Components**: 15 React components
- **CSS Files**: 15 component stylesheets + 2 global
- **Routes**: 3 main routes
- **API Endpoints**: 3 endpoints
- **Dependencies**: 6 frontend, 2 backend

---

This is a modern, full-stack e-commerce website built with React, featuring smooth animations, responsive design, and a clean brown/white aesthetic perfect for a luxury perfume brand.

