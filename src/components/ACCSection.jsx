import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function ACCSection() {
  const { t } = useTranslation()

  return (
    <section id="acc-treatment" className="scroll-mt-20 bg-white py-16 md:py-20 dark:bg-slate-900 border-y border-emerald-900/10 dark:border-slate-800">
      <div className="container">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[#eef4ef] p-8 md:p-12 dark:bg-slate-800/90 dark:border dark:border-slate-700 shadow-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold tracking-wider text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-300 mb-3">
              {t('acc.tag')}
            </span>
            <h2 className="text-3xl font-bold text-primary dark:text-emerald-300 md:text-4xl mb-3">
              {t('acc.title')}
            </h2>
            <p className="text-lg font-semibold text-emerald-800 dark:text-emerald-400">
              {t('acc.subtitle')}
            </p>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg leading-8 text-slate-700 dark:text-slate-300 text-center mb-8 max-w-3xl mx-auto">
            {t('acc.desc')}
          </p>

          {/* Key Trust Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 text-xs font-semibold text-emerald-900 dark:text-emerald-300">
            <span className="rounded-full bg-white dark:bg-slate-900 px-4 py-2 shadow-sm border border-emerald-200 dark:border-slate-700">
              ✓ {t('acc.badgeAcupuncturist')}
            </span>
            <span className="rounded-full bg-white dark:bg-slate-900 px-4 py-2 shadow-sm border border-emerald-200 dark:border-slate-700">
              ✓ {t('acc.badgePlan')}
            </span>
            <span className="rounded-full bg-white dark:bg-slate-900 px-4 py-2 shadow-sm border border-emerald-200 dark:border-slate-700">
              ✓ {t('acc.badgeSupport')}
            </span>
          </div>

          {/* CTA Link to ACC Details Page */}
          <div className="text-center">
            <Link
              to="/acc-treatment"
              className="inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-secondary hover:scale-105 dark:bg-emerald-600 dark:hover:bg-emerald-500"
            >
              {t('acc.bookBtn')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
