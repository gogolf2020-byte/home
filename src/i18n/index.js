import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import zh from './locales/zh'
import en from './locales/en'
import de from './locales/de'
import ko from './locales/ko'
import to from './locales/to'

const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') || 'en' : 'en'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
      de: { translation: de },
      ko: { translation: ko },
      to: { translation: to }
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  })

export default i18n
