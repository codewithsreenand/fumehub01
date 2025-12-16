# Fumehub - Luxury Perfume Store

A modern, luxury e-commerce website for Fumehub, a premium perfume store in Singapore.

## Features

- 🎨 Modern, minimalist design with brown and white theme
- ✨ Smooth animations and transitions using Framer Motion
- 🛒 Full shopping cart functionality
- 📱 Fully responsive design
- 🎯 Gen Z aesthetic with clean white space and luxury feel
- 🎭 Beautiful hover effects and micro-interactions

## Getting Started

### Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server && npm install && cd ..
```

### Run Development Servers

**Option 1: Run frontend and backend together**
```bash
npm run dev:all
```

**Option 2: Run separately**

Frontend (port 5173):
```bash
npm run dev
```

Backend (port 3001):
```bash
npm run server
```

The website will be available at `http://localhost:5173`
The API will be available at `http://localhost:3001`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Adding Your Perfume Image

1. Place your perfume image in the `public` folder
2. Name it `perfume-image.jpg`
3. The same image will be used for all products as per requirements

## Tech Stack

### Frontend
- **React 18** - Modern UI library
- **React Router** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Smooth animations and transitions
- **Modern CSS** - Custom properties, flexbox, grid

### Backend
- **Express.js** - Node.js web framework
- **CORS** - Cross-origin resource sharing
- **RESTful API** - Product and order endpoints

## Design Features

- **Color Scheme**: Brown (#3d2817, #6b4e3d, #8b6f47) and White
- **Typography**: Inter (sans-serif) + Playfair Display (serif)
- **Animations**: Smooth scroll, fade-ins, hover effects, cart slide-in
- **Layout**: Generous white space, clean grid layouts
- **Responsive**: Mobile-first approach

## Products

The website features 5 luxury perfumes:
- **Lucerna** (Inspired by Creed Silver Mountain Water) - S$89
- **Parisienne** (Inspired by Chanel No. 5) - S$95
- **Tokyora** (Inspired by Prada Paradoxe) - S$92
- **Seoulene** (Inspired by YSL Black Opium) - S$88
- **Maraska** (Inspired by Xerjoff Erba Pura) - S$94

## Project Structure

```
fumehub/
├── public/              # Static assets (add perfume-image.jpg here)
├── src/
│   ├── components/     # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Products.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Cart.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── products.js # Product data
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
└── package.json
```

## Customization

- Edit product data in `src/data/products.js`
- Modify colors in `src/index.css` (CSS variables)
- Adjust animations in component files (Framer Motion)
- Update styling in individual component CSS files

