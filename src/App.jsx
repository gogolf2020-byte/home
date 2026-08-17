import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import ACCTreatmentPage from './components/ACCTreatmentPage'
import PractitionerDetailPage from './components/PractitionerDetailPage'
import Footer from './components/Footer'
import FloatingBookButton from './components/FloatingBookButton'
import FloatingMusicPlayer from './components/FloatingMusicPlayer'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <div className="min-h-screen bg-[#f0f4f9] transition-colors duration-300 dark:bg-slate-950">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/acc-treatment" element={<ACCTreatmentPage />} />
        <Route path="/practitioners/:doctorId" element={<PractitionerDetailPage />} />
        <Route path="/practitioner/:doctorId" element={<PractitionerDetailPage />} />
      </Routes>
      <Footer />
      <FloatingBookButton />
      <FloatingMusicPlayer />
    </div>
  )
}

export default App
