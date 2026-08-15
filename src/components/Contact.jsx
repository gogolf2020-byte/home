import { useState } from 'react'
import qrCode from '../assets/logo1.jpg'

export default function Contact() {
  const [method, setMethod] = useState('email') // 'email' | 'txt'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submittedMethod, setSubmittedMethod] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name'
    }
    if (method === 'email') {
      if (!formData.email.trim()) {
        newErrors.email = 'Please enter your email'
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
    } else {
      if (!formData.phone.trim()) {
        newErrors.phone = 'Please enter your phone number'
      }
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message'
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
      if (method === 'email') {
        const mailtoSubject = encodeURIComponent(`Message from ${formData.name}`)
        const mailtoBody = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )
        const mailtoUrl = `mailto:info@wellness-spring.co.nz?subject=${mailtoSubject}&body=${mailtoBody}`
        window.location.href = mailtoUrl
      } else {
        const smsBody = encodeURIComponent(
          `Hi Wellness Spring, message from ${formData.name} (${formData.phone}): ${formData.message}`
        )
        const smsUrl = `sms:+64211018892?body=${smsBody}`
        window.location.href = smsUrl
      }

      setIsSubmitting(false)
      setSubmitted(true)
      setSubmittedMethod(method)
    }, 600)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setErrors({})
  }

  return (
    <section id="contact" className="bg-gradient-to-r from-primary to-secondary text-white py-20 md:py-24">
      <div className="container max-w-4xl">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Book an Appointment
        </h2>
        
        <p className="text-lg text-center mb-12 opacity-90 max-w-2xl mx-auto">
          Ready to take the next step in your health journey? Contact Wellness Spring to
          discuss your needs and book an appointment.
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
                  <p className="text-base font-medium break-words">info@wellness-spring.co.nz</p>
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
              <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
              
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
                  <span>📧</span> By Email
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
                  <span>💬</span> By Txt (SMS)
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
                        Your email client has been launched with a pre-filled draft to <span className="font-semibold text-white">info@wellness-spring.co.nz</span>.
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
                      placeholder="Your Name"
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
                        placeholder="Your Email"
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
                        placeholder="Your Mobile Phone (for Txt/SMS)"
                        className={`w-full px-3.5 py-2 rounded-lg bg-white/20 text-white placeholder-emerald-100/60 focus:outline-none focus:ring-2 focus:ring-white transition ${
                          errors.phone ? 'ring-2 ring-red-300 bg-red-900/30' : ''
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-200 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  )}

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      rows="4"
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
                      <span>Send Message</span>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="order-last flex flex-col items-center justify-center text-center md:order-none">
              <img src={qrCode} alt="Wellness Spring WeChat QR code" className="h-36 w-36 rounded-xl bg-white p-2 shadow-md" />
              <p className="mt-3 text-sm font-medium">Scan to connect via WeChat</p>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="text-center mt-12">
          <p className="text-sm opacity-75">Languages: English · Mandarin · Cantonese</p>
        </div>
      </div>
    </section>
  )
}

