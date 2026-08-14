import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import AIAssessment from './components/AIAssessment'
import Practitioner from './components/Practitioner'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#f0f4f9] transition-colors duration-300 dark:bg-slate-950">
      <Header />
      <Hero />
      <About />
      <AIAssessment />
      <Practitioner />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
