import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import MobileCareModal from './MobileCareModal'

export default function MobileCareSection() {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const suitabilityList = t('mobileCare.suitableList', { returnObjects: true }) || []

  return (
    <section id="mobile-care" className="scroll-mt-20 bg-[#f0f4f9] py-16 md:py-24 dark:bg-slate-950 transition-colors duration-300 border-y border-emerald-900/10 dark:border-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Outer White Card Container matching site design */}
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800">
          
          {/* Brand Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-emerald-300 mb-4">
              {t('mobileCare.title')}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {t('mobileCare.subtitle')}
            </p>
          </div>

          {/* Core Description & Pre-Assessment Notice Box */}
          <div className="bg-[#eef4ef] dark:bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-emerald-200/80 dark:border-slate-700 shadow-sm mb-12">
            <div className="max-w-4xl mx-auto space-y-4 text-slate-700 dark:text-slate-200 text-base sm:text-lg leading-relaxed whitespace-pre-line text-center sm:text-left">
              <p>{t('mobileCare.desc')}</p>
            </div>

            <div className="mt-6 pt-6 border-t border-emerald-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-900 dark:text-emerald-300 font-semibold">
              <div className="flex items-center gap-2">
                <span className="text-base">📍</span>
                <span>{t('mobileCare.noticeText')}</span>
              </div>
              <span className="bg-white dark:bg-slate-900 text-emerald-800 dark:text-emerald-300 px-3.5 py-1 rounded-full border border-emerald-300 dark:border-slate-700 font-bold shrink-0 shadow-sm">
                {t('mobileCare.processBadge')}
              </span>
            </div>
          </div>

          {/* 3 Step Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#eef4ef] dark:bg-slate-800/80 rounded-2xl p-6 border border-emerald-200/80 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-black text-xl mb-4 shadow-sm">
                01
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {t('mobileCare.step1Title')}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t('mobileCare.step1Desc')}
              </p>
            </div>

            <div className="bg-[#eef4ef] dark:bg-slate-800/80 rounded-2xl p-6 border border-emerald-200/80 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-black text-xl mb-4 shadow-sm">
                02
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {t('mobileCare.step2Title')}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t('mobileCare.step2Desc')}
              </p>
            </div>

            <div className="bg-[#eef4ef] dark:bg-slate-800/80 rounded-2xl p-6 border border-emerald-200/80 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-black text-xl mb-4 shadow-sm">
                03
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {t('mobileCare.step3Title')}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t('mobileCare.step3Desc')}
              </p>
            </div>
          </div>

          {/* ACC Patients Welcome Highlight Box */}
          <div className="bg-[#eef4ef] dark:bg-slate-800/90 border border-emerald-300 dark:border-slate-700 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm flex flex-col sm:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center text-2xl shrink-0 shadow-md">
              🏥
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-300 tracking-wide">
                {t('mobileCare.accNoticeTitle')}
              </h4>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                {t('mobileCare.accNoticeDesc')}
              </p>
            </div>
          </div>

          {/* Suitability & Safety Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Suitable List */}
            <div className="bg-[#eef4ef] dark:bg-slate-800/80 rounded-2xl p-6 border border-emerald-200/80 dark:border-slate-700">
              <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-4 flex items-center gap-2">
                <span>✓</span>
                <span>{t('mobileCare.suitableTitle')}</span>
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
                {Array.isArray(suitabilityList) && suitabilityList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Unsuitable Notice */}
            <div className="bg-[#eef4ef] dark:bg-slate-800/80 rounded-2xl p-6 border border-emerald-200/80 dark:border-slate-700 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-amber-800 dark:text-amber-300 mb-4 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>{t('mobileCare.unsuitableTitle')}</span>
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {t('mobileCare.unsuitableDesc')}
                </p>
              </div>
              <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-xl text-xs text-amber-900 dark:text-amber-200">
                <strong>{t('mobileCare.feeTitle')}:</strong> {t('mobileCare.feeDesc')}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2.5 bg-primary hover:bg-secondary dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-extrabold px-9 py-3.5 rounded-full text-base sm:text-lg shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <span>🚗</span>
              <span>{t('mobileCare.requestBtn')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Assessment Request Modal */}
      <MobileCareModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
