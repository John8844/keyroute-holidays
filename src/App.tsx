import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Packages from './components/Packages'
import Destinations from './components/Destinations'
import Trips from './components/Trips'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-forest-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Packages />
        <Destinations />
        <Trips />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}

export default App
