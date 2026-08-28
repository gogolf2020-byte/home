import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import qrCode from '../assets/qr-code.jpg'

export default function Contact({ title, subtitle }) {
  const { t } = useTranslation()
  const [method, setMethod] = useState('email')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    needHomeVisit: false,
    address: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submittedMethod, setSubmittedMethod] = useState('email')

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = t('booking.fillDetails')
    }
    if (method === 'email') {
      if (!formData.email.trim()) {
        newErrors.email = t('contact.email')
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Invalid email address'
      }
    } else {
      if (!formData.phone.trim()) {
        newErrors.phone = t('contact.phone')
      }
    }
    if (formData.needHomeVisit && !formData.address.trim()) {
      newErrors.address = t('booking.addressError')
    }
    if (!formData.message.trim()) {
      newErrors.message = t('contact.message')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmittedMethod(method)

    setTimeout(() => {
      if (method === 'email') {
        const mailtoSubject = encodeURIComponent(`Message from ${formData.name}`)
        const mailtoBody = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nHome Visit Required: ${formData.needHomeVisit ? 'YES (' + formData.address + ')' : 'NO'}\n\nMessage:\n${formData.message}`
        )
        window.location.href = `mailto:wellness.spring.sys@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`
      } else {
        const smsBody = encodeURIComponent(
          `Message from ${formData.name}:\nPhone: ${formData.phone}\nHome Visit: ${formData.needHomeVisit ? 'YES (' + formData.address + ')' : 'NO'}\nMessage: ${formData.message}`
        )
        window.location.href = `sms:0211018892?body=${smsBody}`
      }

      setIsSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      needHomeVisit: false,
      address: ''
    })
    setErrors({})
  }

  return (
    <section id="contact" className="bg-[#f0f4f9] dark:bg-slate-950 py-16 md:py-24 transition-colors duration-300 border-t border-slate-200/80 dark:border-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-emerald-300 mb-4">
              {title || t('contact.title')}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {subtitle || t('contact.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="bg-[#eef4ef] dark:bg-slate-800/80 p-6 rounded-3xl border border-emerald-200/80 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>

              <div className="space-y-5 text-sm sm:text-base">
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
                    <span>🕒</span> {t('contact.hoursTitle', 'Opening Hours')}
                  </h4>
                  <p className="text-base font-bold text-slate-900 dark:text-white">
                    {t('contact.hoursValue', '24/7 (By appointment only)')}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
                    <span>📞</span> Appointments
                  </h4>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">021 101 8892</p>
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
                    <span>📞</span> General Enquiries
                  </h4>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">027 372 0262</p>
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
                    <span>📧</span> Email
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 break-words">wellness.spring.sys@gmail.com</p>
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
                    <span>💬</span> WhatsApp
                  </h4>
                  <p className="text-base font-bold text-slate-900 dark:text-white">+64 21 101 8892</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-[#eef4ef] dark:bg-slate-800/80 p-6 rounded-3xl border border-emerald-200/80 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t('contact.title')}</h3>

              {/* Send Method Selector */}
              <div className="flex bg-slate-200/80 dark:bg-slate-800 p-1 rounded-xl mb-4 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => { setMethod('email'); setErrors({}); }}
                  className={`flex-1 py-2 px-2.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    method === 'email'
                      ? 'bg-white text-emerald-950 shadow-md font-bold dark:bg-emerald-700 dark:text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                  }`}
                >
                  <span>{t('contact.byEmail')}</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setMethod('txt'); setErrors({}); }}
                  className={`flex-1 py-2 px-2.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    method === 'txt'
                      ? 'bg-white text-emerald-950 shadow-md font-bold dark:bg-emerald-700 dark:text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                  }`}
                >
                  <span>{t('contact.byTxt')}</span>
                </button>
              </div>

              {submitted ? (
                <div className="bg-white dark:bg-slate-800 border border-emerald-300 dark:border-emerald-700 rounded-2xl p-5 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-sm">
                    ✓
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">Message Ready!</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {submittedMethod === 'email' ? (
                      <>
                        Your email client has been launched with a pre-filled draft to <span className="font-semibold text-emerald-800 dark:text-emerald-400">wellness.spring.sys@gmail.com</span>.
                      </>
                    ) : (
                      <>
                        Your text app has been launched with a pre-filled message to <span className="font-semibold text-emerald-800 dark:text-emerald-400">021 101 8892</span>.
                      </>
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full mt-2 bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded-xl text-sm transition-all shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t('contact.name')}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder-slate-400 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition ${
                        errors.name ? 'border-red-400 ring-2 ring-red-400' : ''
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {method === 'email' ? (
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t('contact.email')}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder-slate-400 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition ${
                          errors.email ? 'border-red-400 ring-2 ring-red-400' : ''
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                      )}
                    </div>
                  ) : (
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t('contact.phone')}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder-slate-400 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition ${
                          errors.phone ? 'border-red-400 ring-2 ring-red-400' : ''
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  )}

                  {/* Home Visit Checkbox Selector */}
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                    <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-800 dark:text-slate-200">
                      <input
                        type="checkbox"
                        name="needHomeVisit"
                        checked={formData.needHomeVisit}
                        onChange={(e) => {
                          handleInputChange(e)
                          if (!e.target.checked) {
                            setFormData((prev) => ({ ...prev, address: '' }))
                            setErrors((prev) => ({ ...prev, address: '' }))
                          }
                        }}
                        className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 accent-emerald-600 cursor-pointer"
                      />
                      <span>🚗 {t('booking.homeVisit')}</span>
                    </label>

                    {/* Conditional Address Field */}
                    {formData.needHomeVisit && (
                      <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-800 animate-fadeIn">
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder={t('booking.addressPlaceholder')}
                          className={`w-full px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-800 border transition focus:outline-none ${
                            errors.address
                              ? 'border-red-400 ring-2 ring-red-400 text-slate-800 dark:text-slate-100'
                              : 'border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-emerald-500'
                          }`}
                        />
                        {errors.address && (
                          <p className="text-xs font-semibold text-red-500 mt-1 flex items-center gap-1">
                            <span>⚠️</span>
                            <span>{errors.address}</span>
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t('contact.message')}
                      rows="3"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder-slate-400 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none transition ${
                        errors.message ? 'border-red-400 ring-2 ring-red-400' : ''
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-secondary dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition-all shadow-md active:scale-[0.99] disabled:opacity-75 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        <span>Preparing Message...</span>
                      </>
                    ) : (
                      <span>{t('contact.sendBtn')}</span>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="bg-[#eef4ef] dark:bg-slate-800/80 p-6 rounded-3xl border border-emerald-200/80 dark:border-slate-700 flex flex-col items-center justify-center text-center">
              <img src={qrCode} alt="Wellness Spring WeChat QR code" className="h-36 w-36 rounded-2xl bg-white p-2 shadow-md border border-slate-200 dark:border-slate-700" />
              <p className="mt-4 text-sm font-bold text-slate-800 dark:text-slate-200">{t('contact.scanWeChat')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
