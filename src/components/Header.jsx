import { useState, useEffect } from 'react'
import logo from '../assets/98.jpg'
import { usePreferences } from '../context/Preferences'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState(window.location.hash || '')
  const { language, setLanguage, theme, setTheme } = usePreferences()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'AI Assessment', href: '#ai-assessment' },
    { label: 'Practitioner', href: '#practitioner' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Faq', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '')
    }

    const sections = navItems
      .map((item) => (item.href.startsWith('#') ? item.href.slice(1) : null))
      .filter(Boolean)
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-emerald-900/5 transition-colors dark:bg-slate-900/95 dark:border-slate-800 dark:shadow-black/30">
      <div className="container">
        <div className="flex justify-between items-center py-3.5">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2 group">
              <img src={logo} alt="Wellness Spring" className="h-10 w-10 rounded-full object-cover ring-2 ring-emerald-600/20 group-hover:ring-emerald-600/40 transition-all" />
              <span className="font-bold text-lg text-emerald-950 dark:text-emerald-100 tracking-tight">Wellness Spring</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="ml-8 hidden gap-1.5 lg:flex items-center">
            {navItems.map((item) => {
              const isActive = item.href === '/'
                ? (!activeHash || activeHash === '#' || activeHash === '')
                : activeHash === item.href

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-100/90 text-emerald-900 font-bold ring-1 ring-emerald-600/30 shadow-xs dark:bg-emerald-950/80 dark:text-emerald-300 dark:ring-emerald-500/40'
                      : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/70 font-medium dark:text-slate-300 dark:hover:text-emerald-300 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="ml-auto hidden items-center gap-3 md:flex">
            <label className="sr-only" htmlFor="language">Language</label>
            <select
              id="language"
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              className="rounded-full border border-emerald-900/20 bg-transparent px-3 py-1.5 text-xs font-semibold text-emerald-900 outline-none transition focus:ring-2 focus:ring-emerald-600 dark:border-slate-700 dark:text-slate-200 dark:bg-slate-800/50"
            >
              <option value="en" className="dark:bg-slate-900">EN</option>
              <option value="zh" className="dark:bg-slate-900">中文</option>
              <option value="de" className="dark:bg-slate-900">DE</option>
            </select>
            <button
              type="button"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="rounded-full border border-emerald-900/20 p-1.5 text-emerald-900 transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:border-slate-700 dark:text-amber-300 dark:hover:bg-slate-800"
              aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              title={theme === 'light' ? 'Dark theme' : 'Light theme'}
            >
              {theme === 'light' ? '☾' : '☀'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700 dark:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-3 border-t border-emerald-900/10 dark:border-slate-800 flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = item.href === '/'
                ? (!activeHash || activeHash === '#' || activeHash === '')
                : activeHash === item.href

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-emerald-100/90 text-emerald-900 font-bold dark:bg-emerald-950/80 dark:text-emerald-300'
                      : 'text-slate-700 hover:bg-emerald-50/60 dark:text-slate-200 dark:hover:bg-slate-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            })}
            <div className="flex items-center gap-3 pt-3 px-3 border-t border-slate-100 dark:border-slate-800 mt-2">
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                className="rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-2.5 py-1 text-xs font-medium text-slate-800 dark:text-slate-200 dark:bg-slate-800"
              >
                <option value="en">English</option>
                <option value="zh">中文</option>
                <option value="de">Deutsch</option>
              </select>
              <button
                type="button"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-1 text-xs font-medium text-slate-800 dark:text-amber-300 dark:bg-slate-800"
              >
                {theme === 'light' ? '☾ Dark' : '☀ Light'}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

