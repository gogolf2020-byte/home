import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function FloatingBookButton() {
  const [isVisible, setIsVisible] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      const contactElem = document.getElementById('contact')
      if (contactElem) {
        const rect = contactElem.getBoundingClientRect()
        // If the top of the contact section is near or inside the viewport
        if (rect.top <= window.innerHeight - 80 && rect.bottom >= 80) {
          setIsVisible(false)
          return
        }
      }

      // Show floating button after scrolling down 280px
      if (window.scrollY > 280) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const handleClick = (e) => {
    e.preventDefault()
    const contactElem = document.getElementById('contact')
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#contact')
    }
  }

  if (!isVisible) return null

  const isAccPage = location.pathname === '/acc-treatment' || location.pathname === '/services/acc-treatment'
  const buttonText = isAccPage ? t('acc.bookBtn') : t('hero.bookBtn')

  return (
    <a
      href="#contact"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-secondary focus:outline-none ring-2 ring-white/30 dark:bg-emerald-600 dark:hover:bg-emerald-500 dark:ring-slate-900 group"
      aria-label={buttonText}
    >
      <svg className="h-5 w-5 fill-current transition-transform group-hover:rotate-12" viewBox="0 0 24 24">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z" />
      </svg>
      <span>{buttonText}</span>
    </a>
  )
}
