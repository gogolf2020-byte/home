import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../assets/98.jpg'
import { usePreferences } from '../context/Preferences'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [activeHash, setActiveHash] = useState(window.location.hash || '')
  const dropdownRef = useRef(null)

  const { language, setLanguage, theme, setTheme } = usePreferences() || {}
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()

  const currentLang = i18n.language || language || 'zh'

  const serviceSubItems = [
    { key: 'nav.accTreatment', href: '/services/acc-treatment', isRoute: true, icon: '🏥' },
    { key: 'nav.mobileCare', href: '/services/mobile-care', isRoute: true, icon: '🚗' },
    { key: 'nav.aiAssessment', href: '#ai-assessment', isRoute: false, icon: '🤖' },
    { key: 'nav.servicesOverview', href: '#services', isRoute: false, icon: '📋' },
  ]

  const navItems = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.about', href: '#about' },
    {
      key: 'nav.services',
      href: '/services',
      isDropdown: true,
      subItems: serviceSubItems
    },
    { key: 'nav.practitioner', href: '#practitioner' },
    { key: 'nav.testimonials', href: '#testimonials' },
    { key: 'nav.faq', href: '#faq' },
    { key: 'nav.contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '')
    }

    const sections = ['about', 'services', 'ai-assessment', 'practitioner', 'testimonials', 'faq', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && location.pathname === '/') {
            setActiveHash(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [location.pathname])

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleNavClick = (e, item) => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)

    if (item.href === '/') {
      e.preventDefault()
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        window.history.pushState(null, '', '/')
        setActiveHash('')
      } else {
        navigate('/')
      }
      return
    }

    if (item.isRoute) {
      return
    }

    if (item.href && item.href.startsWith('#')) {
      e.preventDefault()
      const targetId = item.href.slice(1)
      if (location.pathname === '/') {
        const elem = document.getElementById(targetId)
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' })
          window.history.pushState(null, '', item.href)
          setActiveHash(item.href)
        }
      } else {
        navigate(`/${item.href}`)
      }
    }
  }

  const handleLanguageChange = (newLang) => {
    if (setLanguage) setLanguage(newLang)
    i18n.changeLanguage(newLang)
  }

  const isServicesActive =
    location.pathname.startsWith('/services') ||
    location.pathname === '/acc-treatment' ||
    location.pathname === '/mobile-care' ||
    (location.pathname === '/' && (activeHash === '#services' || activeHash === '#ai-assessment' || activeHash === '#mobile-care'))

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md dark:bg-slate-900/95 border-b border-emerald-900/10 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, { href: '/' })}
            className="flex items-center gap-3 group shrink-0"
          >
            <img
              src={logo}
              alt="Wellness Spring logo"
              className="h-10 w-10 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform"
            />
            <span className="text-lg font-bold text-primary dark:text-emerald-300 tracking-tight block leading-tight">
              Wellness Spring
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 xl:gap-2 mx-auto">
            {navItems.map((item) => {
              if (item.isDropdown) {
                return (
                  <div
                    key={item.key}
                    ref={dropdownRef}
                    className="relative group"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all whitespace-nowrap ${
                        isServicesActive
                          ? 'bg-emerald-700 text-white shadow-sm dark:bg-emerald-500 dark:text-slate-950'
                          : 'text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/60 dark:text-slate-200 dark:hover:text-emerald-300 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span>{t(item.key)}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Services Dropdown Menu Card */}
                    <div
                      className={`absolute left-0 top-full pt-1.5 w-60 z-50 transition-all duration-200 ${
                        isServicesOpen
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-2 shadow-xl border border-slate-200/80 dark:border-slate-800 space-y-1">
                        {item.subItems.map((sub) => {
                          const isSubActive =
                            (sub.href.startsWith('/') && location.pathname === sub.href) ||
                            (sub.href.startsWith('#') && location.pathname === '/' && activeHash === sub.href)

                          if (sub.isRoute) {
                            return (
                              <Link
                                key={sub.key}
                                to={sub.href}
                                onClick={(e) => handleNavClick(e, sub)}
                                className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-medium transition-colors ${
                                  isSubActive
                                    ? 'bg-emerald-100 text-emerald-900 font-bold dark:bg-emerald-950/90 dark:text-emerald-300'
                                    : 'text-slate-700 hover:bg-emerald-50/80 hover:text-emerald-800 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-emerald-300'
                                }`}
                              >
                                <span className="text-base">{sub.icon}</span>
                                <span>{t(sub.key)}</span>
                              </Link>
                            )
                          }

                          return (
                            <a
                              key={sub.key}
                              href={location.pathname === '/' ? sub.href : `/${sub.href}`}
                              onClick={(e) => handleNavClick(e, sub)}
                              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-medium transition-colors ${
                                isSubActive
                                  ? 'bg-emerald-100 text-emerald-900 font-bold dark:bg-emerald-950/90 dark:text-emerald-300'
                                  : 'text-slate-700 hover:bg-emerald-50/80 hover:text-emerald-800 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-emerald-300'
                              }`}
                            >
                              <span className="text-base">{sub.icon}</span>
                              <span>{t(sub.key)}</span>
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              }

              const isHomeRoute = item.href === '/' && location.pathname === '/' && (!activeHash || activeHash === '#' || activeHash === '')
              const isHashActive = location.pathname === '/' && activeHash === item.href
              const isActive = isHomeRoute || isHashActive

              if (item.href === '/') {
                return (
                  <Link
                    key={item.key}
                    to={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-emerald-700 text-white shadow-sm dark:bg-emerald-500 dark:text-slate-950'
                        : 'text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/60 dark:text-slate-200 dark:hover:text-emerald-300 dark:hover:bg-slate-800'
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                )
              }

              return (
                <a
                  key={item.key}
                  href={location.pathname === '/' ? item.href : `/${item.href}`}
                  className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-emerald-700 text-white shadow-sm dark:bg-emerald-500 dark:text-slate-950'
                      : 'text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/60 dark:text-slate-200 dark:hover:text-emerald-300 dark:hover:bg-slate-800'
                  }`}
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {t(item.key)}
                </a>
              )
            })}
          </nav>

          {/* Controls: Language & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3 ml-4 lg:ml-6 pl-3 border-l border-emerald-900/10 dark:border-slate-800 shrink-0">
            <label className="sr-only" htmlFor="language">Language</label>
            <div className="relative flex items-center">
              <select
                id="language"
                value={currentLang}
                onChange={(event) => handleLanguageChange(event.target.value)}
                className="appearance-none rounded-full border border-emerald-900/20 bg-transparent pl-3.5 pr-8 py-1.5 text-xs font-semibold text-emerald-900 outline-none transition focus:ring-2 focus:ring-emerald-600 dark:border-slate-700 dark:text-slate-200 dark:bg-slate-800/50 cursor-pointer"
              >
                <option value="zh" className="dark:bg-slate-900">中文</option>
                <option value="en" className="dark:bg-slate-900">EN</option>
                <option value="de" className="dark:bg-slate-900">DE</option>
              </select>
              <svg className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-emerald-900/70 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <button
              type="button"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-900/20 text-emerald-900 transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:border-slate-700 dark:text-amber-300 dark:hover:bg-slate-800"
              aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              title={theme === 'light' ? 'Dark theme' : 'Light theme'}
            >
              {theme === 'light' ? (
                <svg className="h-4 w-4 fill-current text-emerald-950 dark:text-amber-300" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.3 2C6.5 2 1.8 6.7 1.8 12.5S6.5 23 12.3 23c4.8 0 8.9-3.2 10.1-7.7-1.1.4-2.3.6-3.6.6-5.5 0-10-4.5-10-10 0-1.3.2-2.5.6-3.6C15.5 2.2 13.9 2 12.3 2z" />
                </svg>
              ) : (
                <svg className="h-4 w-4 fill-current text-amber-400" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700 dark:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <nav className="md:hidden py-3 border-t border-emerald-900/10 dark:border-slate-800 flex flex-col gap-1">
            {navItems.map((item) => {
              if (item.isDropdown) {
                return (
                  <div key={item.key} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                        isServicesActive
                          ? 'bg-emerald-100/90 text-emerald-900 font-bold dark:bg-emerald-950/80 dark:text-emerald-300'
                          : 'text-slate-700 hover:bg-emerald-50/60 dark:text-slate-200 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span>{t(item.key)}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Mobile Sub-items */}
                    {isServicesOpen && (
                      <div className="pl-4 pr-2 py-1 space-y-1 my-1 border-l-2 border-emerald-600/40 ml-4">
                        {item.subItems.map((sub) => {
                          if (sub.isRoute) {
                            return (
                              <Link
                                key={sub.key}
                                to={sub.href}
                                onClick={(e) => handleNavClick(e, sub)}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-emerald-50 dark:text-slate-200 dark:hover:bg-slate-800"
                              >
                                <span>{sub.icon}</span>
                                <span>{t(sub.key)}</span>
                              </Link>
                            )
                          }
                          return (
                            <a
                              key={sub.key}
                              href={location.pathname === '/' ? sub.href : `/${sub.href}`}
                              onClick={(e) => handleNavClick(e, sub)}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-emerald-50 dark:text-slate-200 dark:hover:bg-slate-800"
                            >
                              <span>{sub.icon}</span>
                              <span>{t(sub.key)}</span>
                            </a>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              }

              const isHomeRoute = item.href === '/' && location.pathname === '/' && (!activeHash || activeHash === '#' || activeHash === '')
              const isHashActive = location.pathname === '/' && activeHash === item.href
              const isActive = isHomeRoute || isHashActive

              if (item.href === '/') {
                return (
                  <Link
                    key={item.key}
                    to={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive
                        ? 'bg-emerald-100/90 text-emerald-900 font-bold dark:bg-emerald-950/80 dark:text-emerald-300'
                        : 'text-slate-700 hover:bg-emerald-50/60 dark:text-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                )
              }

              return (
                <a
                  key={item.key}
                  href={location.pathname === '/' ? item.href : `/${item.href}`}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-emerald-100/90 text-emerald-900 font-bold dark:bg-emerald-950/80 dark:text-emerald-300'
                      : 'text-slate-700 hover:bg-emerald-50/60 dark:text-slate-200 dark:hover:bg-slate-800'
                  }`}
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {t(item.key)}
                </a>
              )
            })}
            <div className="flex items-center gap-3 pt-3 px-3 border-t border-slate-100 dark:border-slate-800 mt-2">
              <select
                value={currentLang}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-1 text-xs font-semibold text-slate-800 dark:text-slate-200"
              >
                <option value="zh" className="dark:bg-slate-900">中文</option>
                <option value="en" className="dark:bg-slate-900">EN</option>
                <option value="de" className="dark:bg-slate-900">DE</option>
              </select>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
