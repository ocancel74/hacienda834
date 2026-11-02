import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import TrustStrip    from './components/TrustStrip'
import Amenities     from './components/Amenities'
import Rules         from './components/Rules'
import Pricing       from './components/Pricing'
import Contact       from './components/Contact'
import FAQ           from './components/FAQ'
import Footer        from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Admin         from './components/Admin'

export default function App() {
  if (window.location.pathname === '/admin') return <Admin />

  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Amenities />
        <Rules />
        <Pricing />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
