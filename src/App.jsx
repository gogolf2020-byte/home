import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import AIAssessment from './components/AIAssessment'
import Practitioner from './components/Practitioner'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <AIAssessment />
      <Practitioner />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
