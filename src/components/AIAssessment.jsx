import { useTranslation } from 'react-i18next'
import aiPatternImage from '../assets/matrix1.jpg'

export default function AIAssessment() {
  const { t } = useTranslation()

  return (
    <section id="ai-assessment" className="bg-[#f0f4f9] py-12 md:py-16 dark:bg-slate-950">
      <div className="container">
        <h2 className="text-4xl font-bold text-primary dark:text-emerald-400 mb-8 text-center">
          {t('ai.title')}
        </h2>

        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 shadow-xl md:p-12 dark:bg-slate-900">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-primary dark:text-emerald-300 mb-4">
                {t('ai.cardTitle')}
              </h3>
              <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {t('ai.cardDesc')}
              </p>
            </div>
            <div>
              <img
                src={aiPatternImage}
                alt="AI Health Pattern Recognition Matrix"
                className="w-full h-64 object-cover rounded-2xl shadow-md border border-slate-100 dark:border-slate-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
