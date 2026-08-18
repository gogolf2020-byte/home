import { createContext, useContext, useEffect, useState } from 'react'
import i18n from '../i18n'

const PreferencesContext = createContext(null)

export function PreferencesProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('language') || 'zh'
  })
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  const setLanguage = (newLang) => {
    setLanguageState(newLang)
    localStorage.setItem('language', newLang)
    i18n.changeLanguage(newLang)
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language === 'de' ? 'de' : 'en'
    localStorage.setItem('theme', theme)
    i18n.changeLanguage(language)
  }, [language, theme])

  return (
    <PreferencesContext.Provider value={{ language, setLanguage, theme, setTheme }}>
      {children}
    </PreferencesContext.Provider>
  )
}

export function usePreferences() {
  return useContext(PreferencesContext)
}
