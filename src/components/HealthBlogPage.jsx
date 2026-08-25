import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Contact from './Contact'

export default function HealthBlogPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-[#f0f4f9] dark:bg-slate-950 transition-colors">
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary dark:text-emerald-300 tracking-tight mb-6">
            {t('nav.healthBlog')}
          </h1>

          {/* Coming Soon Card */}
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 sm:p-14 shadow-xl border border-slate-200/80 dark:border-slate-800 my-8 space-y-6">
            <div className="w-20 h-20 bg-emerald-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto text-4xl shadow-inner border border-emerald-100 dark:border-slate-700">
              📝
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {t('healthBlog.comingSoonTitle')}
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t('healthBlog.comingSoonDesc')}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-extrabold px-8 py-3.5 rounded-full text-base shadow-md transition-all hover:scale-105"
              >
                <span>🏠</span>
                <span>{t('healthBlog.btnHome')}</span>
              </Link>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-extrabold px-8 py-3.5 rounded-full text-base shadow-sm transition-all hover:scale-105"
              >
                <span>📩</span>
                <span>{t('healthBlog.btnContact')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}
