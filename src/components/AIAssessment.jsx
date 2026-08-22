import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import aiHeroImage from '../assets/AI-hero.jpg'
import deviceImage from '../assets/matrix1.jpg'
import BookingModal from './BookingModal'

export default function AIAssessment() {
  const { t } = useTranslation()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <section id="ai-assessment" className="scroll-mt-20 bg-[#f0f4f9] py-16 md:py-24 dark:bg-slate-950 transition-colors duration-300 border-y border-emerald-900/10 dark:border-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Outer Card Container matching ACC & Mobile Care section styling */}
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800">
          
          {/* Brand Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-950/80 px-4 py-1.5 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
              <span>✨</span>
              <span>{t('ai.tagHeaderEn')} · {t('ai.tagHeaderZh')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-emerald-300 mb-4">
              {t('ai.title')}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {t('ai.subtitle')}
            </p>
          </div>

          {/* AI Hero Graphic Banner — Full Uncropped View */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-slate-700 mb-12 bg-emerald-950/5 dark:bg-slate-950/40 p-2 sm:p-4 flex items-center justify-center">
            <img
              src={aiHeroImage}
              alt="AI Health Discovery Hero Matrix"
              className="w-full h-auto max-h-[550px] object-contain rounded-2xl shadow-sm"
            />
          </div>

          {/* Feature Highlight Box: Text on Left, Original Device Image on Right */}
          <div className="bg-[#eef4ef] dark:bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-emerald-200/80 dark:border-slate-700 shadow-sm mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-slate-700 dark:text-slate-200 text-base sm:text-lg leading-relaxed text-center sm:text-left">
                <div className="inline-flex items-center gap-2 bg-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-full w-fit shadow-sm">
                  <span>⚡ AI & TCM Fusion</span>
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-300">
                  {t('ai.title')}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {t('ai.subtitle')}
                </p>
              </div>

              {/* Original Equipment / Device Image on Right */}
              <div className="overflow-hidden rounded-2xl border border-emerald-200 dark:border-slate-700 shadow-md">
                <img
                  src={deviceImage}
                  alt="AI Health Assessment Device & Pattern Recognition"
                  className="w-full h-56 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* 3 Step Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Step 1: Scan */}
            <div className="bg-[#f8faf7] dark:bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-emerald-900/10 dark:border-slate-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-black text-xl mb-4 shadow-sm">
                  01
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {t('ai.step1Title')}
                </h3>
                <p className="text-base font-bold text-emerald-900 dark:text-emerald-300 mb-2">
                  {t('ai.step1Desc')}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t('ai.step1Sub')}
                </p>
              </div>
            </div>

            {/* Step 2: Discover */}
            <div className="bg-[#f8faf7] dark:bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-emerald-900/10 dark:border-slate-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-black text-xl mb-4 shadow-sm">
                  02
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {t('ai.step2Title')}
                </h3>
                <p className="text-base font-bold text-emerald-900 dark:text-emerald-300 mb-2">
                  {t('ai.step2Desc')}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t('ai.step2Sub')}
                </p>
              </div>
            </div>

            {/* Step 3: Understand */}
            <div className="bg-[#f8faf7] dark:bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-emerald-900/10 dark:border-slate-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-black text-xl mb-4 shadow-sm">
                  03
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {t('ai.step3Title')}
                </h3>
                <p className="text-base font-bold text-emerald-900 dark:text-emerald-300 mb-2">
                  {t('ai.step3Desc')}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t('ai.step3Sub')}
                </p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex flex-col items-center justify-center bg-primary hover:bg-secondary dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-extrabold px-10 py-4 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 group"
            >
              <span className="text-xs uppercase tracking-widest text-emerald-200 dark:text-emerald-100 font-bold mb-0.5">
                {t('ai.btnTextMain')}
              </span>
              <span className="flex items-center gap-2 text-lg sm:text-xl font-black">
                <span>✨</span>
                <span>{t('ai.btnTextSub')}</span>
              </span>
            </button>
          </div>

          {/* Bottom Medical Disclaimer & Privacy Compliance Notice */}
          <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-2.5 text-center max-w-4xl mx-auto leading-relaxed">
            <p className="font-semibold text-slate-700 dark:text-slate-200 text-xs sm:text-sm">
              {t('footer.aiDisclaimer')}
            </p>
            <p className="text-slate-600 dark:text-slate-300 font-medium">{t('ai.disclaimerPrivacy')}</p>
          </div>

        </div>
      </div>

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  )
}
