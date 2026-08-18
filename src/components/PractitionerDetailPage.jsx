import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { usePreferences } from '../context/Preferences'
import { practitionersData } from '../data/practitionersData'

export default function PractitionerDetailPage() {
  const { doctorId } = useParams()
  const { t, i18n } = useTranslation()
  const { language } = usePreferences() || {}
  const activeLang = i18n.language || language || 'zh'
  const lang = activeLang === 'zh' ? 'zh' : activeLang === 'de' ? 'de' : 'en'

  const [activeTab, setActiveTab] = useState('bio')

  // Find practitioner by slug or id
  const doctor = practitionersData.find(
    (p) => p.slug === doctorId || p.id === doctorId
  ) || practitionersData[0]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [doctorId])

  if (!doctor) {
    return (
      <div className="min-h-screen py-24 text-center">
        <h2 className="text-2xl font-bold">Doctor Profile Not Found</h2>
        <Link to="/" className="text-emerald-600 underline mt-4 inline-block">
          Return to Home
        </Link>
      </div>
    )
  }

  // Get other practitioners for bottom recommendation cards
  const otherPractitioners = practitionersData.filter((p) => p.id !== doctor.id)

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300 pt-20 pb-24">
      {/* Breadcrumb Bar */}
      <div className="bg-slate-100 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800 py-3.5 px-4 mb-10">
        <div className="container mx-auto max-w-6xl">
          <nav className="flex items-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium gap-2">
            <Link to="/" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
              {lang === 'zh' ? '首页' : lang === 'de' ? 'Startseite' : 'Home'}
            </Link>
            <span>/</span>
            <Link to="/#practitioner" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
              {lang === 'zh' ? '医师介绍' : lang === 'de' ? 'Behandler' : 'Practitioner'}
            </Link>
            <span>/</span>
            <span className="text-emerald-800 dark:text-emerald-300 font-semibold">
              {doctor.name[lang]}
            </span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Doctor Profile Card */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-xl border border-slate-100 dark:border-slate-800">
          
          {/* Left Column: Image Frame displaying full photo with gold frame exposed */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md group">
              {/* Styled Image Frame displaying complete photo without clipping */}
              <div className="relative overflow-hidden shadow-2xl bg-slate-950 border border-slate-200 dark:border-slate-800 transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2">
                <img
                  src={doctor.photo}
                  alt={doctor.name[lang]}
                  className="w-full h-auto object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Name, Titles, Tabs & Specialties */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Doctor Name */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a472a] dark:text-emerald-300 tracking-tight mb-3">
                {doctor.name[lang]}
              </h1>

              {/* Professional Title */}
              <p className="text-lg sm:text-xl font-semibold text-emerald-800 dark:text-emerald-400 leading-snug mb-4">
                {doctor.title[lang]}
              </p>

              {/* Mentor / Brand Slogan Pill */}
              {doctor.mentor && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-300/70 dark:border-amber-800/60 text-amber-900 dark:text-amber-300 text-sm font-medium mb-6 shadow-sm">
                  <span>✨</span>
                  <span>{doctor.mentor[lang]}</span>
                </div>
              )}

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {doctor.tags[lang].map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-3.5 py-1.5 rounded-xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Sub-Navigation Tabs */}
              <div className="flex border-b border-slate-200 dark:border-slate-800 mb-6 gap-6 text-base">
                <button
                  onClick={() => setActiveTab('bio')}
                  className={`pb-3 font-bold transition-all border-b-2 ${
                    activeTab === 'bio'
                      ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400'
                      : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  {lang === 'zh' ? '个人履历' : lang === 'de' ? 'Biografie' : 'Profile'}
                </button>
                <button
                  onClick={() => setActiveTab('education')}
                  className={`pb-3 font-bold transition-all border-b-2 ${
                    activeTab === 'education'
                      ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400'
                      : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  {lang === 'zh' ? '教育与资质' : lang === 'de' ? 'Ausbildung' : 'Education'}
                </button>
                <button
                  onClick={() => setActiveTab('research')}
                  className={`pb-3 font-bold transition-all border-b-2 ${
                    activeTab === 'research'
                      ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400'
                      : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  {lang === 'zh' ? '科研与调护' : lang === 'de' ? 'Forschung' : 'Practice & Philosophy'}
                </button>
              </div>

              {/* Tab Content: Bio */}
              {activeTab === 'bio' && (
                <div className="space-y-4 mb-8">
                  {doctor.bioParagraphs[lang].map((para, i) => (
                    <p
                      key={i}
                      className="text-slate-700 dark:text-slate-300 text-base leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {/* Tab Content: Education */}
              {activeTab === 'education' && (
                <div className="mb-8 space-y-3.5">
                  {doctor.educationList[lang].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 shadow-sm"
                    >
                      <div>
                        <span className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base block sm:inline mr-3">
                          {item.school}
                        </span>
                        <span className="text-emerald-700 dark:text-emerald-400 text-sm font-semibold">
                          {item.degree}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1 sm:mt-0 bg-white dark:bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                        {item.period}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab Content: Research / Practice */}
              {activeTab === 'research' && (
                <div className="mb-8 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 p-6 rounded-2xl">
                  <ul className="space-y-3">
                    {doctor.researchPoints[lang].map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">✦</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Specialties Box */}
            <div className="bg-[#f0f4f8] dark:bg-slate-800/90 p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-md">
              <h4 className="font-bold text-xl text-[#1a472a] dark:text-emerald-300 mb-4 flex items-center gap-2">
                <span>{doctor.specialtiesTitle[lang]}</span>
              </h4>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                {doctor.specialties[lang].map((spec, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">•</span>
                    <span className="leading-snug">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Other Practitioners Section */}
        {otherPractitioners.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1a472a] dark:text-emerald-300">
                {lang === 'zh' ? '认识团队其他医师' : lang === 'de' ? 'Weitere Behandler kennenlernen' : 'Meet Other Medical Experts'}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherPractitioners.map((other) => (
                <Link
                  key={other.id}
                  to={`/practitioners/${other.slug}`}
                  className="group bg-white dark:bg-slate-900 p-6 shadow-md hover:shadow-xl border border-slate-200 dark:border-slate-800 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center gap-5 cursor-pointer transform hover:-translate-y-2 block"
                >
                  <img
                    src={other.photo}
                    alt={other.name[lang]}
                    className="w-24 h-auto object-contain rounded-none shadow-sm border border-slate-200 dark:border-slate-700 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-[#1a472a] dark:text-emerald-300 group-hover:text-emerald-600 transition-colors">
                      {other.name[lang]}
                    </h4>
                    <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mt-1 mb-2">
                      {other.shortTitle[lang]}
                    </p>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>{lang === 'zh' ? '查看医师详情' : 'View Profile'}</span>
                      <span>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
