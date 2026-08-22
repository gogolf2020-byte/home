import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import qrCode from '../assets/logo1.jpg'

export default function Contact({ title, subtitle }) {
  const { t } = useTranslation()
  const [method, setMethod] = useState('email') // 'email' | 'txt'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    needHomeVisit: false,
    address: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submittedMethod, setSubmittedMethod] = useState('')

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    const val = type === 'checkbox' ? checked : value

    setFormData((prev) => ({ ...prev, [name]: val }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = t('booking.fillDetails')
    }
    if (method === 'email') {
      if (!formData.email.trim()) {
        newErrors.email = t('contact.email')
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
    } else {
      if (!formData.phone.trim()) {
        newErrors.phone = t('contact.phone')
      }
    }
    // Conditional validation for Home Visit Address
    if (formData.needHomeVisit && !formData.address.trim()) {
      newErrors.address = t('booking.addressError')
    }
    if (!formData.message.trim()) {
      newErrors.message = t('contact.message')
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      const homeVisitInfo = formData.needHomeVisit ? `\n[Home Visit Requested - Address: ${formData.address}]` : ''
      if (method === 'email') {
        const mailtoSubject = encodeURIComponent(`Message from ${formData.name}`)
        const mailtoBody = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}${homeVisitInfo}\n\nMessage:\n${formData.message}`
        )
        const mailtoUrl = `mailto:wellness.spring.sys@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`
        window.location.href = mailtoUrl
      } else {
        const smsBody = encodeURIComponent(
          `Hi Wellness Spring, message from ${formData.name} (${formData.phone})${homeVisitInfo}: ${formData.message}`
        )
        const smsUrl = `sms:+64211018892?body=${smsBody}`
        window.location.href = smsUrl
      }

      setIsSubmitting(false)
      setSubmitted(true)
      setSubmittedMethod(method)
    }, 800)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({ name: '', email: '', phone: '', needHomeVisit: false, address: '', message: '' })
    setErrors({})
  }

  return (
    <section id="contact" className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-16">
      <div className="container max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          {title || t('contact.title')}
        </h2>
        
        <p className="text-lg text-center mb-12 opacity-90 max-w-2xl mx-auto">
          {subtitle || t('contact.subtitle')}
        </p>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-xl border border-white/10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 text-sm sm:text-base">
                <div>
                  <h4 className="font-semibold mb-1 flex items-center gap-2 text-emerald-200">
                    <span>📞</span> Appointments
                  </h4>
                  <p className="text-lg font-medium">021 101 8892</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-1 flex items-center gap-2 text-emerald-200">
                    <span>📞</span> General Enquiries
                  </h4>
                  <p className="text-lg font-medium">027 372 0262</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-1 flex items-center gap-2 text-emerald-200">
                    <span>📧</span> Email
                  </h4>
                  <p className="text-base font-medium break-words">wellness.spring.sys@gmail.com</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-1 flex items-center gap-2 text-emerald-200">
                    <span>💬</span> WhatsApp
                  </h4>
                  <p className="text-lg font-medium">+64 21 101 8892</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-4">{t('contact.title')}</h3>
              
              {/* Send Method Selector */}
              <div className="flex bg-black/20 p-1 rounded-xl mb-4 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => { setMethod('email'); setErrors({}); }}
                  className={`flex-1 py-2 px-2.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    method === 'email'
                      ? 'bg-white text-emerald-950 shadow-md font-bold'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{t('contact.byEmail')}</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setMethod('txt'); setErrors({}); }}
                  className={`flex-1 py-2 px-2.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    method === 'txt'
                      ? 'bg-white text-emerald-950 shadow-md font-bold'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{t('contact.byTxt')}</span>
                </button>
              </div>

              {submitted ? (
                <div className="bg-emerald-950/50 border border-emerald-400/40 rounded-xl p-5 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-300 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h4 className="font-bold text-lg text-white">Message Ready!</h4>
                  <p className="text-sm text-emerald-100/90 leading-relaxed">
                    {submittedMethod === 'email' ? (
                      <>
                        Your email client has been launched with a pre-filled draft to <span className="font-semibold text-white">wellness.spring.sys@gmail.com</span>.
                      </>
                    ) : (
                      <>
                        Your text app has been launched with a pre-filled message to <span className="font-semibold text-white">021 101 8892</span>.
                      </>
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full mt-2 bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors"
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
                      className={`w-full px-3.5 py-2 rounded-lg bg-white/20 text-white placeholder-emerald-100/60 focus:outline-none focus:ring-2 focus:ring-white transition ${
                        errors.name ? 'ring-2 ring-red-300 bg-red-900/30' : ''
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-200 mt-1">{errors.name}</p>
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
                        className={`w-full px-3.5 py-2 rounded-lg bg-white/20 text-white placeholder-emerald-100/60 focus:outline-none focus:ring-2 focus:ring-white transition ${
                          errors.email ? 'ring-2 ring-red-300 bg-red-900/30' : ''
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-200 mt-1">{errors.email}</p>
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
                        className={`w-full px-3.5 py-2 rounded-lg bg-white/20 text-white placeholder-emerald-100/60 focus:outline-none focus:ring-2 focus:ring-white transition ${
                          errors.phone ? 'ring-2 ring-red-300 bg-red-900/30' : ''
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-200 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  )}

                  {/* Home Visit Checkbox Selector */}
                  <div className="bg-black/20 p-2.5 rounded-lg border border-white/10">
                    <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-white">
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
                        className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 accent-emerald-500 cursor-pointer"
                      />
                      <span>🚗 {t('booking.homeVisit')}</span>
                    </label>

                    {/* Conditional Address Field with Red Border Validation */}
                    {formData.needHomeVisit && (
                      <div className="mt-2 pt-2 border-t border-white/10 animate-fadeIn">
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder={t('booking.addressPlaceholder')}
                          className={`w-full px-3.5 py-2 rounded-lg text-xs transition focus:outline-none ${
                            errors.address
                              ? 'border-2 border-red-400 ring-2 ring-red-400 bg-red-900/50 text-white placeholder-red-200'
                              : 'bg-white/20 text-white placeholder-emerald-100/60 focus:ring-2 focus:ring-white'
                          }`}
                        />
                        {errors.address && (
                          <p className="text-xs font-semibold text-red-200 mt-1 flex items-center gap-1">
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
                      className={`w-full px-3.5 py-2 rounded-lg bg-white/20 text-white placeholder-emerald-100/60 focus:outline-none focus:ring-2 focus:ring-white resize-none transition ${
                        errors.message ? 'ring-2 ring-red-300 bg-red-900/30' : ''
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-xs text-red-200 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-emerald-950 font-bold py-2.5 rounded-lg hover:bg-emerald-50 transition-all shadow-md active:scale-[0.99] disabled:opacity-75 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-emerald-950" viewBox="0 0 24 24" fill="none">
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

            <div className="order-last flex flex-col items-center justify-center text-center md:order-none">
              <img src={qrCode} alt="Wellness Spring WeChat QR code" className="h-36 w-36 rounded-xl bg-white p-2 shadow-md" />
              <p className="mt-3 text-sm font-medium">{t('contact.scanWeChat')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
