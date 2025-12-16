## Fumehub Fullstack Setup

This directory now hosts both the **Fumehub frontend UI/UX** and the **e‑commerce FastAPI backend** in one place.

### Structure

- **Backend (APIs, database, auth, cart, orders, products)**
  - Path: `e-commerce-main/backend`
  - Stack: FastAPI, PostgreSQL, Redis (rate limiting), Alembic, Nginx/Docker support
- **Frontend (Fumehub storefront UI/UX)**
  - Path: `fumehub`
  - Stack: React + Vite, Framer Motion, React Router

You can treat this root folder as your combined project: backend and frontend live side‑by‑side.

---

### Running the backend (FastAPI)

1. **Install dependencies**

   ```bash
   cd /Users/sreenandkarichery/Documents/fumehub-backend/e-commerce-main/backend
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\\Scripts\\activate
   pip install -r requirements.txt
   ```

2. **Configure environment**

   - Copy or create `.env` based on any sample/config you have in `app/core/config.py`.
   - Ensure database, Redis, and other URLs are set correctly.

3. **Run the API server (dev mode)**

   ```bash
   cd /Users/sreenandkarichery/Documents/fumehub-backend/e-commerce-main/backend
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

   The backend will be available at: `http://localhost:8000`

   - Health check: `GET http://localhost:8000/health`
   - Products list: `GET http://localhost:8000/api/v1/product/list`
   - Single product: `GET http://localhost:8000/api/v1/product/show/{product_id}`

> CORS is already configured in the FastAPI app to allow `*`, so the frontend can call it directly from `localhost`.

---

### Running the frontend (Fumehub UI)

1. **Install dependencies**

   ```bash
   cd /Users/sreenandkarichery/Documents/fumehub-backend/fumehub
   npm install
   ```

2. **(Optional) Configure API base URL for future integration**

   If you want to gradually move from the local mock/product data to the FastAPI backend, you can define an environment variable:

   ```bash
   # .env.local (in /Users/sreenandkarichery/Documents/fumehub-backend/fumehub)
   VITE_API_BASE_URL=http://localhost:8000
   ```

   Then, inside your React code, you can call the backend using:

   ```js
   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
   ```

   and gradually replace static imports (like `../data/products`) with `fetch`/`axios` calls to the FastAPI endpoints.

3. **Run the frontend dev server**

   ```bash
   cd /Users/sreenandkarichery/Documents/fumehub-backend/fumehub
   npm run dev
   ```

   By default Vite serves at: `http://localhost:5173`

---

### Using them together

- Start **backend**: FastAPI on `http://localhost:8000`
- Start **frontend**: Fumehub React on `http://localhost:5173`
- The UI/UX remains exactly the same (Fumehub), and you now have a production‑grade backend in `e-commerce-main/backend` that you can wire your React components to as needed (products, cart, orders, auth, etc.).

You can now evolve this into a single deployable app (e.g., Docker Compose or separate frontend/backend deployments) without changing the core UI/UX.



