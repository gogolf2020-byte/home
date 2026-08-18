import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { usePreferences } from '../context/Preferences'

export default function BookingModal({ isOpen, onClose, preselectedDoctor }) {
  const { t } = useTranslation()
  const { language } = usePreferences() || { language: 'zh' }
  const lang = language === 'zh' ? 'zh' : language === 'de' ? 'de' : 'en'

  const [formData, setFormData] = useState({
    doctor: preselectedDoctor?.name?.[lang] || '',
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '10:00 AM',
    needHomeVisit: false,
    address: '',
    notes: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (preselectedDoctor) {
      setFormData((prev) => ({
        ...prev,
        doctor: preselectedDoctor.name[lang] || preselectedDoctor.name.zh
      }))
    }
  }, [preselectedDoctor, lang])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate Home Visit Address
    if (formData.needHomeVisit && !formData.address.trim()) {
      setErrors((prev) => ({
        ...prev,
        address: t('booking.addressError')
      }))
      return
    }

    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 p-6 md:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
          aria-label="Close modal"
        >
          ✕
        </button>

        {submitted ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              {t('booking.successTitle')}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xs mx-auto mb-2">
              {t('booking.successDesc')}
            </p>
            {formData.needHomeVisit && (
              <span className="inline-block text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                🚗 {t('booking.homeVisit')}: {formData.address}
              </span>
            )}
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 inline-block mb-2">
                {t('booking.tag')}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {t('booking.title')}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                {preselectedDoctor
                  ? `${t('booking.selectedPractitioner')} ${preselectedDoctor.name[lang] || preselectedDoctor.name.zh}`
                  : t('booking.fillDetails')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t('booking.practitioner')}
                </label>
                <input
                  type="text"
                  readOnly
                  value={formData.doctor}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium text-sm focus:outline-none"
                />
              </div>

              {/* Home Visit Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  {t('booking.homeVisit')}
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl">
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, needHomeVisit: false, address: '' })
                      setErrors({ ...errors, address: '' })
                    }}
                    className={`py-2 px-3 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      !formData.needHomeVisit
                        ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-sm border border-slate-200 dark:border-slate-600'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-800'
                    }`}
                  >
                    <span>{t('booking.no')}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, needHomeVisit: true })
                    }}
                    className={`py-2 px-3 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      formData.needHomeVisit
                        ? 'bg-emerald-700 text-white shadow-md font-extrabold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-800'
                    }`}
                  >
                    <span>{t('booking.yes')}</span>
                  </button>
                </div>
              </div>

              {/* Address Input with i18n Red Border Validation */}
              {formData.needHomeVisit && (
                <div className="transition-all duration-300">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t('booking.address')}
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => {
                      setFormData({ ...formData, address: e.target.value })
                      if (errors.address && e.target.value.trim()) {
                        setErrors({ ...errors, address: '' })
                      }
                    }}
                    placeholder={t('booking.addressPlaceholder')}
                    className={`w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none transition-all ${
                      errors.address
                        ? 'border-2 border-red-500 ring-2 ring-red-500/30 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200 placeholder-red-400'
                        : 'bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-emerald-500'
                    }`}
                  />
                  {errors.address && (
                    <p className="text-xs font-semibold text-red-600 dark:text-red-400 mt-1 flex items-center gap-1">
                      <span>⚠️</span>
                      <span>{errors.address}</span>
                    </p>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t('booking.yourName')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === 'zh' ? '张先生 / 李女士' : 'John Doe'}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t('booking.phone')} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="021 123 4567"
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t('booking.email')}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="yourname@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t('booking.date')}
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t('booking.time')}
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="01:30 PM">01:30 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t('booking.notes')}
                </label>
                <textarea
                  rows="2"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={lang === 'zh' ? '请简要说明您的调理需求或症状...' : 'Briefly describe your symptoms or reason for visit...'}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/3 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  {t('booking.cancel')}
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-700/20 transition-all"
                >
                  {t('booking.submit')}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
