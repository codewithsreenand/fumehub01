import Header from '../components/Header'
import Footer from '../components/Footer'
import './Checkout.css'

const Checkout = () => {
  // Simple placeholder checkout page for now
  return (
    <div className="checkout-page">
      <Header />
      <main className="checkout-main">
        <section className="checkout-card">
          <h1>Checkout coming soon</h1>
          <p>
            The backend checkout flow from the e-commerce project is not yet wired into this
            Fumehub UI. We will integrate address, payment and order APIs here.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Checkout


