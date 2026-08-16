import { Link } from 'react-router-dom'
import { usePreferences } from '../context/Preferences'
import { practitionersData } from '../data/practitionersData'

export default function Practitioner() {
  const { language } = usePreferences() || { language: 'zh' }
  const lang = language === 'zh' ? 'zh' : language === 'de' ? 'de' : 'en'

  return (
    <section id="practitioner" className="bg-[#f0f4f9] py-12 md:py-16 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Original Section Title */}
        <h2 className="text-4xl font-bold text-primary dark:text-emerald-400 mb-12 text-center">
          Meet the Practitioner
        </h2>

        {/* 3-Column Doctor Card Grid - Reference to Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {practitionersData.map((doc) => (
            <Link
              key={doc.id}
              to={`/practitioners/${doc.slug}`}
              className="group bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-md hover:shadow-2xl border border-slate-200/80 dark:border-slate-800 transition-all duration-500 cursor-pointer flex flex-col justify-between transform hover:-translate-y-2 block"
            >
              {/* Photo Frame Container with 0.5s Cubic Bezier Upward Movement */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-inner">
                <img
                  src={doc.photo}
                  alt={doc.name[lang]}
                  className="w-full h-80 object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:-translate-y-2"
                />

                {/* Metallic Gold Bottom Curve Accent */}
                <div className="absolute inset-x-0 bottom-0 pointer-events-none">
                  <svg
                    viewBox="0 0 400 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto drop-shadow-sm"
                  >
                    <path
                      d="M0 55C100 18 300 18 400 55V55H0V55Z"
                      fill="url(#goldCardGradMinimal)"
                    />
                    <defs>
                      <linearGradient id="goldCardGradMinimal" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D4AF37" />
                        <stop offset="0.5" stopColor="#F3E5AB" />
                        <stop offset="1" stopColor="#AA771C" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Doctor Details below photo */}
              <div className="pt-5 pb-2 text-center flex-1 flex flex-col justify-between">
                <div>
                  {/* Doctor Name */}
                  <h3 className="text-2xl font-extrabold text-[#1a472a] dark:text-emerald-300 group-hover:text-emerald-600 transition-colors mb-1.5">
                    {doc.name[lang]}
                  </h3>

                  {/* Title / Accreditation */}
                  <p className="text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-400 mb-3 leading-snug">
                    {doc.shortTitle[lang]}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap justify-center gap-1.5 mb-3">
                    {doc.tags[lang].slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover CTA Indicator */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 mt-2">
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>{lang === 'zh' ? '查看医师详情' : lang === 'de' ? 'Profil anzeigen' : 'View Profile'}</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
