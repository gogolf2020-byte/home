import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { usePreferences } from '../context/Preferences'
import { practitionersData } from '../data/practitionersData'
import founderPhoto from '../assets/22.jpg'

export default function Practitioner() {
  const { t, i18n } = useTranslation()
  const { language } = usePreferences() || {}
  const activeLang = i18n.language || language || 'en'
  const lang = ['zh', 'en', 'de', 'ko', 'to'].includes(activeLang) ? activeLang : 'en'

  // Filter team doctors list for specialists (excluding Helene who is featured in the Founder section)
  const teamDoctors = practitionersData.filter((doc) => doc.id !== 'helene-yu')

  return (
    <section id="practitioner" className="bg-[#f0f4f9] py-16 md:py-24 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-emerald-400 mb-4 text-center">
            {t('practitioner.meetTitle')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-teal-400 mx-auto rounded-full" />
        </div>

        {/* 1. FOUNDER MODULE (Preserving screenshot layout & marking Founder title) */}
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800 mb-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Photo Container */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm group">
                <div className="relative overflow-hidden rounded-[2rem] shadow-xl bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <img
                    src={founderPhoto}
                    alt="Helene YU"
                    className="h-[420px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Bottom Gold Wave Overlay matching screenshot */}
                  <div className="absolute inset-x-0 bottom-0 pointer-events-none">
                    <svg viewBox="0 0 400 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
                      <path d="M0 65C100 22 300 22 400 65V65H0V65Z" fill="url(#goldGradFounder)" />
                      <defs>
                        <linearGradient id="goldGradFounder" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#D4AF37" />
                          <stop offset="0.5" stopColor="#F3E5AB" />
                          <stop offset="1" stopColor="#AA771C" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Founder Badge */}
                <div className="mt-4 text-center">
                  <span className="text-xs font-bold text-amber-900 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-4 py-1.5 rounded-full inline-block border border-amber-300/80 dark:border-amber-800 shadow-sm">
                    👑 {lang === 'zh' ? 'Wellness Spring 诊所创始人' : lang === 'de' ? 'Gründerin von Wellness Spring' : lang === 'ko' ? 'Wellness Spring 설립자' : 'Founder of Wellness Spring'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 inline-block mb-3">
                  {t('practitioner.founderTag')}
                </span>
                
                <h3 className="text-xl sm:text-2xl font-bold text-primary dark:text-emerald-300 tracking-tight mb-2">
                  Helene YU
                </h3>

                <p className="text-base font-semibold text-emerald-800 dark:text-emerald-400 mb-6">
                  {t('practitioner.founderTitle')}
                </p>

                <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
                  {t('practitioner.founderDesc1')}
                </p>

                <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-8">
                  {t('practitioner.founderDesc2')}
                </p>

                {/* Specialties Box */}
                <div className="bg-[#f0f4f9] dark:bg-slate-800/90 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h4 className="font-bold text-lg text-primary dark:text-emerald-300 mb-3">
                    {lang === 'zh' ? 'Specialties 临床专长' : lang === 'de' ? 'Schwerpunkte' : lang === 'ko' ? 'Specialties 전문 진료 분야' : 'Specialties'}
                  </h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                    {lang === 'ko' ? (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                          <span>근거 기반 한의학 및 침구 치료 (TCM & Acupuncture)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                          <span>심신 균형 및 전인적 체질 관리 (Mind-Body Regulation)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                          <span>정서 안정 및 수면 케어 (Emotional Balance & Wellness)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                          <span>AI 보조 건강 진단 및 데이터 융합 (AI-Assisted Assessment)</span>
                        </li>
                      </>
                    ) : lang === 'zh' ? (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                          <span>Traditional Chinese Medicine & Acupuncture 中医与针灸诊疗</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                          <span>Mind-Body Regulation 身心整体调衡</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                          <span>Emotional Balance & Wellness 情绪平衡与健康调理</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                          <span>AI-Assisted Health Assessment AI 辅助健康评估</span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                          <span>Traditional Chinese Medicine & Acupuncture</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                          <span>Mind-Body Regulation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                          <span>Emotional Balance & Wellness</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                          <span>AI-Assisted Health Assessment</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. DOCTORS TEAM GRID (Specialist Doctors: Xiaodong JIN, Dr. Damen Qian, Catherine Wang, Grace Gao) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-emerald-700 dark:text-emerald-400 text-xs uppercase tracking-widest font-semibold bg-emerald-50 dark:bg-emerald-950/60 px-3.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 inline-block mb-2">
              {lang === 'zh' ? '专家医师团队' : lang === 'de' ? 'FACHÄRZTE TEAM' : lang === 'ko' ? '전문 의료진' : 'MEDICAL SPECIALISTS'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a472a] dark:text-emerald-300">
              {lang === 'zh' ? '核心专家团队' : lang === 'de' ? 'Unsere Fachärzte' : lang === 'ko' ? '핵심 전문가 의료진' : 'Our Medical Team'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {teamDoctors.map((doc) => (
              <Link
                key={doc.id}
                to={`/practitioners/${doc.slug}`}
                className="group bg-white dark:bg-slate-900 p-6 shadow-md hover:shadow-2xl border border-slate-200/80 dark:border-slate-800 transition-all duration-500 cursor-pointer flex flex-col justify-between transform hover:-translate-y-2 rounded-3xl block"
              >
                {/* Photo Container: Full Image Display with object-contain */}
                <div className="relative overflow-hidden bg-slate-900/5 dark:bg-slate-950">
                  <img
                    src={doc.photo}
                    alt={doc.name[lang] || doc.name['en']}
                    className="w-full h-auto object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:-translate-y-1"
                  />
                </div>

                {/* Doctor Details */}
                <div className="pt-5 pb-2 text-center flex-1 flex flex-col justify-between">
                  <div>
                    {/* Doctor Name */}
                    <h4 className="text-2xl font-extrabold text-[#1a472a] dark:text-emerald-300 group-hover:text-emerald-600 transition-colors mb-1.5">
                      {doc.name[lang] || doc.name['en']}
                    </h4>

                    {/* Title / Accreditation */}
                    <p className="text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-400 mb-3 leading-snug">
                      {doc.shortTitle[lang] || doc.shortTitle['en']}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-1.5 mb-3">
                      {(doc.tags[lang] || doc.tags['en'] || []).slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover CTA Link */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 mt-2">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>{lang === 'zh' ? '查看医师详情' : lang === 'de' ? 'Profil anzeigen' : lang === 'ko' ? '의료진 상세 보기' : 'View Profile'}</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
