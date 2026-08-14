import { useState } from 'react'
import logo from '../assets/98.jpg'
import { usePreferences } from '../context/Preferences'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, theme, setTheme } = usePreferences()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'AI Assessment', href: '#ai-assessment' },
    { label: 'Practitioner', href: '#practitioner' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md transition-colors dark:bg-slate-900 dark:shadow-black/30">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src={logo} alt="Wellness Spring" className="h-12 w-12 rounded-full object-cover" />
          </div>

          {/* Desktop Navigation */}
          <nav className="ml-12 hidden gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors dark:text-slate-200 dark:hover:text-emerald-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-3 md:flex">
            <label className="sr-only" htmlFor="language">Language</label>
            <select
              id="language"
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              className="rounded-full border border-emerald-900/20 bg-transparent px-3 py-2 text-sm font-medium text-primary outline-none transition focus:ring-2 focus:ring-accent dark:border-slate-500 dark:text-slate-100"
            >
              <option value="en">EN</option>
              <option value="zh">中文</option>
              <option value="de">DE</option>
            </select>
            <button
              type="button"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="rounded-full border border-emerald-900/20 p-2 text-primary transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-accent dark:border-slate-500 dark:text-amber-300 dark:hover:bg-slate-800"
              aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              title={theme === 'light' ? 'Dark theme' : 'Light theme'}
            >
              {theme === 'light' ? '☾' : '☀'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t dark:border-slate-700">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-primary transition-colors dark:text-slate-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3">
              <select value={language} onChange={(event) => setLanguage(event.target.value)} className="rounded border px-2 py-1 text-sm text-primary">
                <option value="en">English</option>
                <option value="zh">中文</option>
                <option value="de">Deutsch</option>
              </select>
              <button type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="rounded border px-3 py-1 text-sm dark:text-white">
                {theme === 'light' ? '☾ Dark' : '☀ Light'}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
