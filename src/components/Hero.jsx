import { useTranslation } from 'react-i18next'
import heroImage from '../assets/88.jpg'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative isolate overflow-hidden bg-primary">
      <img
        src={heroImage}
        alt="Wellness Spring practitioner preparing tea outdoors"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-white/80 to-white/10 dark:from-slate-950/95 dark:via-slate-950/70 dark:to-slate-950/10" />
      <div className="container flex min-h-[620px] items-center py-16 md:py-20">
        <div className="max-w-xl rounded-[2rem] bg-white/65 p-8 shadow-xl backdrop-blur-sm md:p-12 dark:bg-slate-900/65">
          <p className="mb-4 text-sm font-bold tracking-[0.2em] text-accent">
            {t('hero.tag')}
          </p>
          <h2 className="mb-6 text-3xl sm:text-4xl font-bold text-primary dark:text-emerald-300">
            {t('hero.title')}
          </h2>
          <p className="mb-8 text-lg text-gray-700 md:text-xl dark:text-slate-200 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="rounded-full bg-primary px-8 py-3 font-semibold text-white hover:bg-secondary transition-colors"
            >
              {t('hero.bookBtn')}
            </a>
            <a
              href="#about"
              className="rounded-full border-2 border-primary px-8 py-3 font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
            >
              {t('hero.learnMore')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
