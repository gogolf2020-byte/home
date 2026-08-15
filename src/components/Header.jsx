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
            <div className="relative flex items-center">
              <select
                id="language"
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                className="appearance-none rounded-full border border-emerald-900/20 bg-transparent pl-3.5 pr-8 py-1.5 text-xs font-semibold text-emerald-900 outline-none transition focus:ring-2 focus:ring-emerald-600 dark:border-slate-700 dark:text-slate-200 dark:bg-slate-800/50 cursor-pointer"
              >
                <option value="en" className="dark:bg-slate-900">EN</option>
                <option value="zh" className="dark:bg-slate-900">中文</option>
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

