import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { usePreferences } from '../context/Preferences'
import { practitionersData } from '../data/practitionersData'
import founderPhoto from '../assets/22.jpg'

export default function Practitioner() {
  const { t, i18n } = useTranslation()
  const { language } = usePreferences() || {}
  const activeLang = i18n.language || language || 'zh'
  const lang = activeLang === 'zh' ? 'zh' : activeLang === 'de' ? 'de' : 'en'

  // Filter team doctors list for specialists (excluding Helene who is featured in the Founder section)
  const teamDoctors = practitionersData.filter((doc) => doc.id !== 'helene-li-yu')

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
                    alt="Helene Li YU"
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
                    👑 {lang === 'zh' ? 'Wellness Spring 诊所创始人' : lang === 'de' ? 'Gründerin von Wellness Spring' : 'Founder of Wellness Spring'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 inline-block mb-3">
                  {lang === 'zh' ? '创始人 · 首席诊疗师' : lang === 'de' ? 'GRÜNDERIN & LEITENDE BEHANDLERIN' : 'FOUNDER & LEAD PRACTITIONER'}
                </span>
                
                <h3 className="text-xl sm:text-2xl font-bold text-primary dark:text-emerald-300 tracking-tight mb-2">
                  Helene Li YU
                </h3>

                <p className="text-base font-semibold text-emerald-800 dark:text-emerald-400 mb-6">
                  {lang === 'zh' ? '新西兰 ACC 注册高级针灸医师 ｜ 循证中医与 AI 结合调护专家' : lang === 'de' ? 'ACC-Registrierte Akupunkteurin | TCM & KI-Spezialistin' : 'ACC-Registered Acupuncturist | TCM & AI Assessment Specialist'}
                </p>

                <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
                  {lang === 'zh'
                    ? 'Helene 以丰富的专业经验与深切关怀服务每位来访者，采用融合针灸、中医疗法、身心调节和 AI 辅助健康评估的整体护理方法。'
                    : lang === 'de'
                    ? 'Helene verbindet umfassende Erfahrung und Einfühlungsvermögen mit einem ganzheitlichen Ansatz aus Akupunktur, traditioneller chinesischer Medizin, Körper-Geist-Regulation und KI-gestützter Gesundheitsanalyse.'
                    : 'Helene brings extensive expertise and compassion to her practice, with a holistic approach to care, integrating acupuncture, traditional Chinese medicine therapies, mind–body regulation, and AI-assisted health assessment.'}
                </p>

                <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-8">
                  {lang === 'zh'
                    ? '她专注于个性化治疗、情绪平衡与心理疏导，全方位支持患者的长期健康与身心调和。'
                    : lang === 'de'
                    ? 'Ihr Fokus liegt auf individueller Behandlung, emotionaler Balance und langfristigem Wohlbefinden durch aufmerksame, persönliche Betreuung.'
                    : 'Her focus is on personalised treatment, emotional balance, and supporting long-term wellbeing through thoughtful, individualised care.'}
                </p>

                {/* Specialties Box (Matches user screenshot) */}
                <div className="bg-[#f0f4f9] dark:bg-slate-800/90 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h4 className="font-bold text-lg text-primary dark:text-emerald-300 mb-3">
                    Specialties
                  </h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. DOCTORS TEAM GRID (3 Doctors: Dr. Damen Qian, Catherine Wang, Grace Gao) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-emerald-700 dark:text-emerald-400 text-xs uppercase tracking-widest font-semibold bg-emerald-50 dark:bg-emerald-950/60 px-3.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 inline-block mb-2">
              {lang === 'zh' ? '专家医师团队' : lang === 'de' ? 'FACHÄRZTE TEAM' : 'MEDICAL SPECIALISTS'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a472a] dark:text-emerald-300">
              {lang === 'zh' ? '核心专家团队' : lang === 'de' ? 'Unsere Fachärzte' : 'Our Medical Team'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamDoctors.map((doc) => (
              <Link
                key={doc.id}
                to={`/practitioners/${doc.slug}`}
                className="group bg-white dark:bg-slate-900 p-6 shadow-md hover:shadow-2xl border border-slate-200/80 dark:border-slate-800 transition-all duration-500 cursor-pointer flex flex-col justify-between transform hover:-translate-y-2 rounded-3xl block"
              >
                {/* Photo Container: Full Image Display with Gold Frame exposed */}
                <div className="relative overflow-hidden bg-slate-900/5 dark:bg-slate-950">
                  <img
                    src={doc.photo}
                    alt={doc.name[lang]}
                    className="w-full h-auto object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:-translate-y-1"
                  />
                </div>

                {/* Doctor Details */}
                <div className="pt-5 pb-2 text-center flex-1 flex flex-col justify-between">
                  <div>
                    {/* Doctor Name */}
                    <h4 className="text-2xl font-extrabold text-[#1a472a] dark:text-emerald-300 group-hover:text-emerald-600 transition-colors mb-1.5">
                      {doc.name[lang]}
                    </h4>

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

                  {/* Hover CTA Link */}
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
      </div>
    </section>
  )
}
