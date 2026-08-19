import Hero from './Hero'
import About from './About'
import ACCSection from './ACCSection'
import MobileCareSection from './MobileCareSection'
import AIAssessment from './AIAssessment'
import Practitioner from './Practitioner'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import Contact from './Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ACCSection />
      <MobileCareSection />
      <AIAssessment />
      <Practitioner />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
