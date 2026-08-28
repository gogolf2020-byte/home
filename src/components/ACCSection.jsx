import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function ACCSection() {
  const { t } = useTranslation()

  return (
    <section id="acc-treatment" className="scroll-mt-20 bg-[#f0f4f9] py-16 md:py-24 dark:bg-slate-950 transition-colors duration-300 border-y border-emerald-900/10 dark:border-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-emerald-300 mb-4">
              {t('acc.title')}
            </h2>
            <p className="text-base sm:text-lg font-semibold text-emerald-800 dark:text-emerald-400 leading-relaxed">
              {t('acc.subtitle')}
            </p>
          </div>

          {/* Description */}
          <div className="bg-[#eef4ef] dark:bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-emerald-200/80 dark:border-slate-700 shadow-sm mb-8">
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-200 text-center max-w-4xl mx-auto">
              {t('acc.desc')}
            </p>
          </div>

          {/* Key Trust Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 text-xs sm:text-sm font-semibold text-emerald-900 dark:text-emerald-300">
            <span className="rounded-full bg-[#eef4ef] dark:bg-slate-800 px-4 py-2 shadow-sm border border-emerald-200 dark:border-slate-700">
              ✓ {t('acc.badgeAcupuncturist')}
            </span>
            <span className="rounded-full bg-[#eef4ef] dark:bg-slate-800 px-4 py-2 shadow-sm border border-emerald-200 dark:border-slate-700">
              ✓ {t('acc.badgePlan')}
            </span>
            <span className="rounded-full bg-[#eef4ef] dark:bg-slate-800 px-4 py-2 shadow-sm border border-emerald-200 dark:border-slate-700">
              ✓ {t('acc.badgeSupport')}
            </span>
          </div>

          {/* CTA Link to ACC Details Page */}
          <div className="text-center">
            <Link
              to="/acc-treatment"
              className="inline-flex items-center gap-2.5 bg-primary hover:bg-secondary dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-extrabold px-9 py-3.5 rounded-full text-base sm:text-lg shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <span>🏥</span>
              <span>{t('acc.bookBtn')}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
