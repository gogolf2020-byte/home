import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function ResearchInnovation() {
  const { t } = useTranslation()

  return (
    <section id="research-innovation" className="py-16 sm:py-24 bg-[#f0f4f9] dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* 1. HERO / PAGE START HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary dark:text-emerald-300 tracking-tight mb-4">
            {t('researchInnovation.title')}
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">
            {t('researchInnovation.heroHeadline')}
          </h2>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 dark:border-slate-800 text-left space-y-4 leading-relaxed text-slate-700 dark:text-slate-200 text-base sm:text-lg">
            <p className="font-medium text-slate-800 dark:text-slate-100">
              {t('researchInnovation.heroP1')}
            </p>
            <p>
              {t('researchInnovation.heroP2')}
            </p>
          </div>
        </div>

        {/* 2. MODULES STACK (01 -> 02 -> 03) */}
        <div className="space-y-10 mb-20">
          {/* MODULE 1 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800 relative overflow-hidden transition-all hover:shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {t('researchInnovation.m1Title')}
              </h3>
              <span className="text-3xl">🩺</span>
            </div>

            <h4 className="text-base sm:text-lg font-semibold text-emerald-800 dark:text-emerald-400 mb-6">
              {t('researchInnovation.m1Sub')}
            </h4>

            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-8">
              <p>{t('researchInnovation.m1Desc1')}</p>
              <p>{t('researchInnovation.m1Desc2')}</p>
            </div>

            {/* Flow Process Line */}
            <div className="bg-slate-50 dark:bg-slate-800/80 p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700">
              <p className="text-xs uppercase tracking-wider font-bold text-emerald-800 dark:text-emerald-400 mb-2">
                Clinical Workflow Integration
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-normal overflow-x-auto whitespace-nowrap sm:whitespace-normal py-1">
                {t('researchInnovation.m1Flow')}
              </p>
            </div>
          </div>

          {/* MODULE 2 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800 relative overflow-hidden transition-all hover:shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {t('researchInnovation.m2Title')}
              </h3>
              <span className="text-3xl">🌏</span>
            </div>

            <h4 className="text-base sm:text-lg font-semibold text-emerald-800 dark:text-emerald-400 mb-6">
              {t('researchInnovation.m2Sub')}
            </h4>

            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
              <p>{t('researchInnovation.m2Desc1')}</p>
              <p className="font-medium text-slate-900 dark:text-white">{t('researchInnovation.m2Desc2')}</p>
            </div>
          </div>

          {/* MODULE 3 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800 relative overflow-hidden transition-all hover:shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {t('researchInnovation.m3Title')}
              </h3>
              <span className="text-3xl">🏛️</span>
            </div>

            <h4 className="text-base sm:text-lg font-semibold text-emerald-800 dark:text-emerald-400 mb-6">
              {t('researchInnovation.m3Sub')}
            </h4>

            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
              <p>{t('researchInnovation.m3Desc1')}</p>
              <p className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-200">
                ⚡ {t('researchInnovation.m3Desc2')}
              </p>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM CLOSING SECTION */}
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 sm:p-14 shadow-xl border border-slate-200/80 dark:border-slate-800 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-primary dark:text-emerald-300 tracking-tight">
              {t('researchInnovation.footerTitle')}
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              {t('researchInnovation.footerDesc')}
            </p>

            {/* 2 Action Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services/ai-assessment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-secondary dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-extrabold px-8 py-4 rounded-full text-base shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <span>🤖</span>
                <span>{t('researchInnovation.btnExplore')}</span>
              </Link>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-extrabold px-8 py-4 rounded-full text-base shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <span>🤝</span>
                <span>{t('researchInnovation.btnCollaborate')}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Compliance & AI Disclaimer */}
        <div className="mt-12 text-center text-xs text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-6">
          <p>💡 {t('footer.aiDisclaimer')}</p>
        </div>
      </div>
    </section>
  )
}
