import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import About         from './components/About'
import Gallery       from './components/Gallery'
import Videos        from './components/Videos'
import Pricing       from './components/Pricing'
import Services      from './components/Services'
import Extras        from './components/Extras'
import Rules         from './components/Rules'
import FAQ           from './components/FAQ'
import Contact       from './components/Contact'
import CTA           from './components/CTA'
import Footer        from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Gallery />
        <Videos />
        <Pricing />
        <Services />
        <Extras />
        <Rules />
        <FAQ />
        <Contact />
        <CTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
