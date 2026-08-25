import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function ResearchInnovation() {
  const { t } = useTranslation()

  const modules = [
    {
      id: '01',
      icon: '🩺',
      title: t('researchInnovation.card1Title'),
      sub: t('researchInnovation.card1Sub'),
      desc: t('researchInnovation.card1Desc'),
      gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
      borderColor: 'border-emerald-200 dark:border-emerald-800/60',
      badgeColor: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300',
    },
    {
      id: '02',
      icon: '🌏',
      title: t('researchInnovation.card2Title'),
      sub: t('researchInnovation.card2Sub'),
      desc: t('researchInnovation.card2Desc'),
      gradient: 'from-teal-500/10 via-emerald-500/5 to-transparent',
      borderColor: 'border-teal-200 dark:border-teal-800/60',
      badgeColor: 'bg-teal-100 text-teal-900 dark:bg-teal-950 dark:text-teal-300',
    },
    {
      id: '03',
      icon: '🏛️',
      title: t('researchInnovation.card3Title'),
      sub: t('researchInnovation.card3Sub'),
      desc: t('researchInnovation.card3Desc'),
      gradient: 'from-emerald-500/10 via-cyan-500/5 to-transparent',
      borderColor: 'border-emerald-200 dark:border-emerald-800/60',
      badgeColor: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300',
    },
  ]

  return (
    <section id="research-innovation" className="py-16 sm:py-24 bg-[#f0f4f9] dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Badge & Main Titles */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-950/80 px-4 py-1.5 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <span>✨</span>
            <span>{t('researchInnovation.tag')}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary dark:text-emerald-300 tracking-tight mb-6">
            {t('researchInnovation.title')}
          </h1>

          {/* Mission Box Statement */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 dark:border-slate-800 text-left sm:text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            <p className="text-base sm:text-xl text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
              "{t('researchInnovation.subtitle')}"
            </p>
          </div>
        </div>

        {/* 3 Core Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {modules.map((item) => (
            <div
              key={item.id}
              className={`group relative bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border ${item.borderColor} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none`} />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl p-3 bg-emerald-50 dark:bg-slate-800 rounded-2xl border border-emerald-100 dark:border-slate-700 shadow-sm">
                    {item.icon}
                  </span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.badgeColor}`}>
                    {item.id}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>

                <h4 className="text-sm font-semibold text-emerald-800 dark:text-emerald-400 mb-4">
                  {item.sub}
                </h4>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                <span>Core Initiative</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration CTA Callout */}
        <div className="bg-gradient-to-r from-emerald-900 via-primary to-teal-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 border border-emerald-700/50">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
              {t('researchInnovation.ctaTitle')}
            </h3>
            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
              {t('researchInnovation.ctaDesc')}
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-emerald-950 hover:bg-emerald-50 font-extrabold px-8 py-4 rounded-full text-base shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <span>📩</span>
              <span>{t('researchInnovation.ctaBtn')}</span>
            </a>
          </div>
        </div>

        {/* Compliance & AI Supportive Tool Disclaimer */}
        <div className="mt-12 text-center text-xs text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-6">
          <p>💡 {t('footer.aiDisclaimer')}</p>
        </div>
      </div>
    </section>
  )
}
