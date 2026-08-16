import { useState, useEffect } from 'react'
import { usePreferences } from '../context/Preferences'

export default function BookingModal({ isOpen, onClose, preselectedDoctor }) {
  const { language } = usePreferences() || { language: 'zh' }
  const lang = language === 'zh' ? 'zh' : language === 'de' ? 'de' : 'en'

  const [formData, setFormData] = useState({
    doctor: preselectedDoctor?.name?.[lang] || '',
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '10:00 AM',
    notes: ''
  })

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
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 p-6 md:p-8 overflow-hidden">
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
              {lang === 'zh' ? '预约提交成功！' : lang === 'de' ? 'Terminanfrage gesendet!' : 'Appointment Request Sent!'}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xs mx-auto">
              {lang === 'zh'
                ? `感谢您的预约！我们的诊疗团队将尽快联系您确认与 ${formData.doctor} 的就诊时间。`
                : lang === 'de'
                ? `Vielen Dank! Unser Team wird Sie in Kürze kontaktieren, um Ihren Termin mit ${formData.doctor} zu bestätigen.`
                : `Thank you! Our clinic team will reach out shortly to confirm your appointment with ${formData.doctor}.`}
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 inline-block mb-2">
                {lang === 'zh' ? '在线预约诊疗' : lang === 'de' ? 'TERMIN ONLINE BUCHEN' : 'ONLINE BOOKING'}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {lang === 'zh' ? '预约医师咨询' : lang === 'de' ? 'Termin vereinbaren' : 'Book an Appointment'}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                {preselectedDoctor
                  ? `${lang === 'zh' ? '当前预约医师：' : lang === 'de' ? 'Ausgewählte Behandlerin: ' : 'Selected Practitioner: '} ${preselectedDoctor.name[lang]}`
                  : lang === 'zh' ? '请填写您的基本信息' : 'Please fill in your appointment details'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {lang === 'zh' ? '就诊医师' : lang === 'de' ? 'Behandler' : 'Practitioner'}
                </label>
                <input
                  type="text"
                  readOnly
                  value={formData.doctor}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium text-sm focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {lang === 'zh' ? '您的姓名 *' : lang === 'de' ? 'Ihr Name *' : 'Your Name *'}
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
                    {lang === 'zh' ? '联系电话 *' : lang === 'de' ? 'Telefonnummer *' : 'Phone Number *'}
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
                  {lang === 'zh' ? '电子邮箱' : lang === 'de' ? 'E-Mail-Adresse' : 'Email Address'}
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
                    {lang === 'zh' ? '期望日期' : lang === 'de' ? 'Wunschdatum' : 'Preferred Date'}
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
                    {lang === 'zh' ? '期望时间段' : lang === 'de' ? 'Uhrzeit' : 'Preferred Time'}
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
                  {lang === 'zh' ? '主诉 / 备注事项' : lang === 'de' ? 'Anmerkungen' : 'Notes / Symptoms'}
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
                  {lang === 'zh' ? '取消' : lang === 'de' ? 'Abbrechen' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-700/20 transition-all"
                >
                  {lang === 'zh' ? '确认提交预约' : lang === 'de' ? 'Termin Anfragen' : 'Confirm Booking'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
