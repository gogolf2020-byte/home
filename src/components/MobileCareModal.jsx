import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { usePreferences } from '../context/Preferences'

export default function MobileCareModal({ isOpen, onClose }) {
  const { t } = useTranslation()
  const { language } = usePreferences() || { language: 'zh' }
  const lang = language === 'zh' ? 'zh' : language === 'de' ? 'de' : 'en'

  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    phone: '',
    email: '',
    address: '',
    suburb: '',
    reasonRequired: '',
    accClaim: '',
    complaint: '',
    mobilityStatus: 'normal',
    medicalConditions: '',
    medications: '',
    bloodThinners: false,
    pacemaker: false,
    pregnancy: false,
    recentSurgery: false,
    infectiousSymptoms: false,
    preferredDate: '',
    preferredTime: '10:00 AM',
    caregiverPresent: 'yes',
    parkingAccess: '',
    petsInHome: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    const val = type === 'checkbox' ? checked : value
    setFormData((prev) => ({ ...prev, [name]: val }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateStep1 = () => {
    const errs = {}
    if (!formData.fullName.trim()) errs.fullName = t('mobileCareModal.fullName')
    if (!formData.dob.trim()) errs.dob = t('mobileCareModal.dob')
    if (!formData.phone.trim()) errs.phone = t('mobileCareModal.phone')
    if (!formData.address.trim()) errs.address = t('mobileCareModal.address')
    if (!formData.suburb.trim()) errs.suburb = t('mobileCareModal.suburb')
    if (!formData.reasonRequired.trim()) errs.reasonRequired = t('mobileCareModal.reasonRequired')
    return errs
  }

  const validateStep2 = () => {
    const errs = {}
    if (!formData.complaint.trim()) errs.complaint = t('mobileCareModal.complaint')
    return errs
  }

  const handleNext = () => {
    if (step === 1) {
      const errs = validateStep1()
      if (Object.keys(errs).length > 0) {
        setErrors(errs)
        return
      }
    } else if (step === 2) {
      const errs = validateStep2()
      if (Object.keys(errs).length > 0) {
        setErrors(errs)
        return
      }
    }
    setErrors({})
    setStep((prev) => prev + 1)
  }

  const handlePrev = () => {
    setErrors({})
    setStep((prev) => prev - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const mailtoSubject = encodeURIComponent(`Mobile Care Request from ${formData.fullName}`)
    const mailtoBody = encodeURIComponent(
      `--- WELLNESS SPRING MOBILE CARE REQUEST ---\n` +
      `Full Name: ${formData.fullName}\n` +
      `DOB: ${formData.dob}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Address: ${formData.address}, ${formData.suburb}\n` +
      `Reason for Home Visit: ${formData.reasonRequired}\n\n` +
      `ACC Claim: ${formData.accClaim || 'N/A'}\n` +
      `Main Complaint / Injury: ${formData.complaint}\n` +
      `Mobility Status: ${formData.mobilityStatus}\n` +
      `Medical Conditions: ${formData.medicalConditions || 'None'}\n` +
      `Medications: ${formData.medications || 'None'}\n\n` +
      `Safety Screening:\n` +
      `- Blood Thinners: ${formData.bloodThinners ? 'YES' : 'NO'}\n` +
      `- Pacemaker: ${formData.pacemaker ? 'YES' : 'NO'}\n` +
      `- Pregnant: ${formData.pregnancy ? 'YES' : 'NO'}\n` +
      `- Recent Surgery: ${formData.recentSurgery ? 'YES' : 'NO'}\n` +
      `- Infectious Symptoms: ${formData.infectiousSymptoms ? 'YES' : 'NO'}\n\n` +
      `Preferred Time: ${formData.preferredDate} at ${formData.preferredTime}\n` +
      `Caregiver Present: ${formData.caregiverPresent}\n` +
      `Parking / Access: ${formData.parkingAccess || 'None'}\n` +
      `Pets in Home: ${formData.petsInHome || 'None'}\n`
    )

    const mailtoUrl = `mailto:wellness.spring@hotmail.com?subject=${mailtoSubject}&body=${mailtoBody}`
    window.location.href = mailtoUrl

    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setStep(1)
      onClose()
    }, 3000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 overflow-hidden max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
          aria-label="Close modal"
        >
          ✕
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {t('mobileCareModal.successTitle')}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              {t('mobileCareModal.successDesc')}
            </p>
          </div>
        ) : (
          <div>
            {/* Header Title */}
            <div className="mb-4">
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 inline-block mb-2">
                艾泉到家™ · WELLNESS SPRING MOBILE CARE
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {t('mobileCareModal.title')}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('mobileCareModal.subtitle')}
              </p>
            </div>

            {/* Mandatory Disclaimer Box */}
            <div className="mb-6 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 rounded-xl p-3.5 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
              <span className="text-base shrink-0">⚠️</span>
              <p className="leading-relaxed font-medium whitespace-pre-line">
                {t('mobileCareModal.disclaimer')}
              </p>
            </div>

            {/* Multi-step progress bar */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              <div className={`h-1.5 rounded-full transition-all ${step >= 1 ? 'bg-emerald-600' : 'bg-slate-200 dark:bg-slate-800'}`} />
              <div className={`h-1.5 rounded-full transition-all ${step >= 2 ? 'bg-emerald-600' : 'bg-slate-200 dark:bg-slate-800'}`} />
              <div className={`h-1.5 rounded-full transition-all ${step >= 3 ? 'bg-emerald-600' : 'bg-slate-200 dark:bg-slate-800'}`} />
            </div>

            <p className="text-xs font-bold text-emerald-800 dark:text-emerald-400 mb-4">
              {step === 1 && t('mobileCareModal.step1Label')}
              {step === 2 && t('mobileCareModal.step2Label')}
              {step === 3 && t('mobileCareModal.step3Label')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* STEP 1: Patient & Location */}
              {step === 1 && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t('mobileCareModal.fullName')}
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder={t('mobileCareModal.fullNamePlaceholder')}
                        className={`w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none transition ${
                          errors.fullName ? 'border-2 border-red-500 ring-2 ring-red-500/20 bg-red-50 dark:bg-red-950/40' : 'border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500'
                        }`}
                      />
                      {errors.fullName && <p className="text-xs text-red-500 mt-1">⚠️ {errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t('mobileCareModal.dob')}
                      </label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        className={`w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none transition ${
                          errors.dob ? 'border-2 border-red-500 ring-2 ring-red-500/20 bg-red-50 dark:bg-red-950/40' : 'border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500'
                        }`}
                      />
                      {errors.dob && <p className="text-xs text-red-500 mt-1">⚠️ {errors.dob}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t('mobileCareModal.phone')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t('mobileCareModal.phonePlaceholder')}
                        className={`w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none transition ${
                          errors.phone ? 'border-2 border-red-500 ring-2 ring-red-500/20 bg-red-50 dark:bg-red-950/40' : 'border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">⚠️ {errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t('mobileCareModal.email')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t('mobileCareModal.emailPlaceholder')}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t('mobileCareModal.address')}
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder={t('mobileCareModal.addressPlaceholder')}
                        className={`w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none transition ${
                          errors.address ? 'border-2 border-red-500 ring-2 ring-red-500/20 bg-red-50 dark:bg-red-950/40' : 'border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500'
                        }`}
                      />
                      {errors.address && <p className="text-xs text-red-500 mt-1">⚠️ {errors.address}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t('mobileCareModal.suburb')}
                      </label>
                      <input
                        type="text"
                        name="suburb"
                        value={formData.suburb}
                        onChange={handleInputChange}
                        placeholder={t('mobileCareModal.suburbPlaceholder')}
                        className={`w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none transition ${
                          errors.suburb ? 'border-2 border-red-500 ring-2 ring-red-500/20 bg-red-50 dark:bg-red-950/40' : 'border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500'
                        }`}
                      />
                      {errors.suburb && <p className="text-xs text-red-500 mt-1">⚠️ {errors.suburb}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t('mobileCareModal.reasonRequired')}
                    </label>
                    <textarea
                      name="reasonRequired"
                      rows="2"
                      value={formData.reasonRequired}
                      onChange={handleInputChange}
                      placeholder={t('mobileCareModal.reasonRequiredPlaceholder')}
                      className={`w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none resize-none transition ${
                        errors.reasonRequired ? 'border-2 border-red-500 ring-2 ring-red-500/20 bg-red-50 dark:bg-red-950/40' : 'border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500'
                      }`}
                    ></textarea>
                    {errors.reasonRequired && <p className="text-xs text-red-500 mt-1">⚠️ {errors.reasonRequired}</p>}
                  </div>
                </div>
              )}

              {/* STEP 2: Health Screening & Clinical Screening */}
              {step === 2 && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t('mobileCareModal.complaint')}
                      </label>
                      <input
                        type="text"
                        name="complaint"
                        value={formData.complaint}
                        onChange={handleInputChange}
                        placeholder={t('mobileCareModal.complaintPlaceholder')}
                        className={`w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none transition ${
                          errors.complaint ? 'border-2 border-red-500 ring-2 ring-red-500/20 bg-red-50 dark:bg-red-950/40' : 'border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500'
                        }`}
                      />
                      {errors.complaint && <p className="text-xs text-red-500 mt-1">⚠️ {errors.complaint}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t('mobileCareModal.accClaim')}
                      </label>
                      <input
                        type="text"
                        name="accClaim"
                        value={formData.accClaim}
                        onChange={handleInputChange}
                        placeholder={t('mobileCareModal.accClaimPlaceholder')}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t('mobileCareModal.mobilityStatus')}
                    </label>
                    <select
                      name="mobilityStatus"
                      value={formData.mobilityStatus}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    >
                      <option value="normal">{t('mobileCareModal.mobilityOptions.normal')}</option>
                      <option value="restricted">{t('mobileCareModal.mobilityOptions.restricted')}</option>
                      <option value="bedbound">{t('mobileCareModal.mobilityOptions.bedbound')}</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t('mobileCareModal.medicalConditions')}
                      </label>
                      <input
                        type="text"
                        name="medicalConditions"
                        value={formData.medicalConditions}
                        onChange={handleInputChange}
                        placeholder={t('mobileCareModal.medicalConditionsPlaceholder')}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t('mobileCareModal.medications')}
                      </label>
                      <input
                        type="text"
                        name="medications"
                        value={formData.medications}
                        onChange={handleInputChange}
                        placeholder={t('mobileCareModal.medicationsPlaceholder')}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Safety Checkboxes */}
                  <div className="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                    <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                      {t('mobileCareModal.safetyScreeningTitle')}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="bloodThinners"
                          checked={formData.bloodThinners}
                          onChange={handleInputChange}
                          className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 accent-emerald-600"
                        />
                        <span>{t('mobileCareModal.bloodThinners')}</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="pacemaker"
                          checked={formData.pacemaker}
                          onChange={handleInputChange}
                          className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 accent-emerald-600"
                        />
                        <span>{t('mobileCareModal.pacemaker')}</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="pregnancy"
                          checked={formData.pregnancy}
                          onChange={handleInputChange}
                          className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 accent-emerald-600"
                        />
                        <span>{t('mobileCareModal.pregnancy')}</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="recentSurgery"
                          checked={formData.recentSurgery}
                          onChange={handleInputChange}
                          className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 accent-emerald-600"
                        />
                        <span>{t('mobileCareModal.recentSurgery')}</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer sm:col-span-2">
                        <input
                          type="checkbox"
                          name="infectiousSymptoms"
                          checked={formData.infectiousSymptoms}
                          onChange={handleInputChange}
                          className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 accent-emerald-600"
                        />
                        <span>{t('mobileCareModal.infectiousSymptoms')}</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Environment & Scheduling */}
              {step === 3 && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t('mobileCareModal.preferredDate')}
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t('mobileCareModal.preferredTime')}
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      >
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:30 AM">10:30 AM</option>
                        <option value="01:30 PM">01:30 PM</option>
                        <option value="03:30 PM">03:30 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t('mobileCareModal.caregiverPresent')}
                    </label>
                    <div className="flex gap-4 text-xs font-semibold text-slate-800 dark:text-slate-200">
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="caregiverPresent"
                          value="yes"
                          checked={formData.caregiverPresent === 'yes'}
                          onChange={handleInputChange}
                          className="accent-emerald-600"
                        />
                        <span>{t('mobileCareModal.yes')}</span>
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="caregiverPresent"
                          value="no"
                          checked={formData.caregiverPresent === 'no'}
                          onChange={handleInputChange}
                          className="accent-emerald-600"
                        />
                        <span>{t('mobileCareModal.no')}</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t('mobileCareModal.parkingAccess')}
                    </label>
                    <input
                      type="text"
                      name="parkingAccess"
                      value={formData.parkingAccess}
                      onChange={handleInputChange}
                      placeholder={t('mobileCareModal.parkingAccessPlaceholder')}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t('mobileCareModal.petsInHome')}
                    </label>
                    <input
                      type="text"
                      name="petsInHome"
                      value={formData.petsInHome}
                      onChange={handleInputChange}
                      placeholder={t('mobileCareModal.petsInHomePlaceholder')}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 flex gap-3 border-t border-slate-100 dark:border-slate-800">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-1/3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                  >
                    {t('mobileCareModal.prev')}
                  </button>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition"
                  >
                    {t('mobileCareModal.next')}
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-lg transition"
                  >
                    {t('mobileCareModal.submit')}
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
