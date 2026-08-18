import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import zh from './locales/zh'
import en from './locales/en'
import de from './locales/de'

const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') || 'zh' : 'zh'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      zh: { translation: zh },
      en: { translation: en },
      de: { translation: de }
    },
    lng: savedLanguage,
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  })

export default i18n
