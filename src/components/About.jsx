import { useTranslation } from 'react-i18next'
import wellnessPhoto from '../assets/3.jpg'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="bg-[#f0f4f9] py-12 md:py-16 dark:bg-slate-950">
      <div className="container">
        <h2 className="text-4xl font-bold text-primary dark:text-emerald-400 mb-8 text-center">
          {t('about.title')}
        </h2>
        
        <div className="grid items-center gap-12 md:grid-cols-2 mb-16">
          <img src={wellnessPhoto} alt="Traditional tea ceremony in a garden setting" className="h-[480px] w-full rounded-[2rem] object-cover shadow-lg" />
          <div>
            <p className="text-lg text-gray-700 dark:text-slate-300 leading-8 mb-6">
              {t('about.desc1')}
            </p>
            <p className="text-lg text-gray-700 dark:text-slate-300 leading-8 mb-6">
              {t('about.desc2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
