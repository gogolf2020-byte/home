import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePreferences } from '../context/Preferences'
import Contact from './Contact'

export default function ACCTreatmentPage() {
  const { language } = usePreferences()
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
  const navigate = useNavigate()

  const handleContactClick = (e) => {
    e.preventDefault()
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#contact')
    }
  }

  const whoCanBenefit = [
    {
      title: 'Sports Injuries',
      description: 'Sprains, strains and injury-related muscle or joint symptoms.',
      icon: (
        <svg className="h-6 w-6 fill-current text-primary dark:text-emerald-300" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.5 2L12 9l3 1-5 12 1.5-7L8.5 14l5-12z" />
        </svg>
      )
    },
    {
      title: 'Work-Related Injuries',
      description: 'Injuries affecting comfort, movement or ability to work.',
      icon: (
        <svg className="h-6 w-6 fill-current text-primary dark:text-emerald-300" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3 0 1.5-1.5 3.5-3 5.5-1.5-2-3-4-3-5.5 0-1.66 1.34-3 3-3zm5 12H7v-1.5c0-1.8 3.3-2.7 5-2.7s5 .9 5 2.7V18z" />
        </svg>
      )
    },
    {
      title: 'Accident Injuries',
      description: 'Recovery following falls, impacts and other covered accidents.',
      icon: (
        <svg className="h-6 w-6 fill-current text-primary dark:text-emerald-300" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
        </svg>
      )
    },
    {
      title: 'Neck & Back Injuries',
      description: 'Where symptoms are related to an accepted injury claim.',
      icon: (
        <svg className="h-6 w-6 fill-current text-primary dark:text-emerald-300" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      title: 'Shoulder & Limb Injuries',
      description: 'Supporting movement and function during recovery.',
      icon: (
        <svg className="h-6 w-6 fill-current text-primary dark:text-emerald-300" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3l-6.5 6.5M12.5 9.5L5 17M5 17l-2 2M12.5 9.5l2 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="4.5" cy="19.5" r="2.5" />
        </svg>
      )
    },
    {
      title: 'Post-Injury Recovery',
      description: 'Helping manage symptoms and support return to everyday activity.',
      icon: (
        <svg className="h-6 w-6 fill-current text-primary dark:text-emerald-300" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )
    }
  ]

  const howItWorksSteps = [
    {
      step: '1',
      title: 'Have an ACC Claim',
      description: 'If your injury already has an ACC-covered claim, have your claim number ready when booking.'
    },
    {
      step: '2',
      title: 'Book Directly',
      description: 'Clients with a covered ACC claim can self-refer for acupuncture treatment.'
    },
    {
      step: '3',
      title: 'Initial Assessment',
      description: 'Your first visit includes an assessment of your injury-related symptoms, movement, recovery progress and treatment needs.'
    },
    {
      step: '4',
      title: 'Personalised Treatment',
      description: 'A treatment plan is tailored to your injury, symptoms, function and recovery goals, with progress reviewed throughout care.'
    }
  ]

  const whyChooseUs = [
    {
      title: 'ACC-Registered Acupuncturist',
      description: 'Professional treatment by an ACC-registered acupuncture provider.'
    },
    {
      title: 'Individualised Treatment',
      description: 'Care is tailored to your injury, symptoms, function and recovery goals.'
    },
    {
      title: 'Chinese Medicine Integration',
      description: 'Where appropriate, treatment may incorporate acupuncture with selected Chinese medicine techniques.'
    },
    {
      title: 'Recovery-Focused Care',
      description: 'The focus is not only symptom management, but restoring movement, function and confidence.'
    },
    {
      title: 'Clear Communication',
      description: 'Treatment plans and progress are explained clearly throughout the recovery process.'
    }
  ]

  const accFaqs = [
    {
      question: 'Do I need a referral for ACC acupuncture?',
      answer: 'If you already have an accepted ACC-covered claim, you can self-refer for acupuncture treatment.'
    },
    {
      question: 'What should I bring to my appointment?',
      answer: 'Please bring your ACC claim number and any relevant information you have about the injury or previous treatment.'
    },
    {
      question: 'Does ACC pay the full treatment cost?',
      answer: 'ACC contributes towards eligible acupuncture treatment. A co-payment may apply depending on the treatment and clinic fee.'
    },
    {
      question: 'How many ACC acupuncture sessions can I have?',
      answer: 'Current ACC acupuncture funding provides a maximum of 12 treatments within 12 weeks from the first treatment, provided the treatment remains eligible and related to the covered injury.'
    },
    {
      question: 'Can cupping or gua sha be included?',
      answer: 'ACC recognises some Traditional Chinese Medicine treatments including gua sha, cupping and tuina as additional treatments alongside acupuncture when appropriate.'
    },
    {
      question: 'Can I use ACC for a non-injury condition?',
      answer: 'ACC funding applies to treatment related to an injury covered by ACC. Non-injury treatment is treated separately.'
    }
  ]

  return (
    <div id="acc-details" className="scroll-mt-16 bg-[#f0f4f9] dark:bg-slate-950 transition-colors">
      {/* SECTION 1 — HERO */}
      <section className="relative isolate overflow-hidden bg-primary py-16 md:py-24 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold tracking-wider text-emerald-100 mb-4">
              ACC INJURY RECOVERY
            </span>
            <h1 className="text-4xl font-bold md:text-5xl mb-4 text-white">
              ACC Injury Recovery
            </h1>
            <p className="text-xl font-medium text-emerald-200 mb-6">
              Personalised Acupuncture & Chinese Medicine Treatment for ACC-Covered Injuries
            </p>
            <p className="text-base md:text-lg leading-8 opacity-90 mb-8">
              Injury can affect more than the painful area — it can change movement, sleep, confidence and everyday activity. Wellness Spring provides individualised acupuncture and Chinese medicine care to support recovery from ACC-covered injuries and help you return to function safely and confidently.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
              <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-sm border border-white/15">
                ✓ ACC-Registered Acupuncturist
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-sm border border-white/15">
                ✓ Individualised Injury Recovery Plans
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-sm border border-white/15">
                ✓ Acupuncture + Chinese Medicine Support
              </span>
            </div>

            <a
              href="#contact"
              onClick={handleContactClick}
              className="inline-block rounded-full bg-white px-8 py-3.5 text-sm font-bold text-primary hover:bg-emerald-50 transition-all shadow-lg cursor-pointer"
            >
              Book ACC Treatment
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Who ACC Acupuncture Is For */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary dark:text-emerald-400 mb-4">
              Who Can Benefit from ACC Acupuncture?
            </h2>
            <p className="max-w-2xl mx-auto text-base text-slate-700 dark:text-slate-300">
              ACC-funded acupuncture is intended for people recovering from an injury covered by ACC who require treatment to help restore movement and function.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whoCanBenefit.map((item) => (
              <div key={item.title} className="rounded-2xl border border-emerald-950/10 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-primary dark:text-emerald-300 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-6">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — How ACC Treatment Works */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-900 border-y border-emerald-900/10 dark:border-slate-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary dark:text-emerald-400 mb-4">
              How ACC Treatment Works
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-300">
              Simple steps to start your injury recovery with Wellness Spring.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {howItWorksSteps.map((step) => (
              <div key={step.step} className="rounded-2xl bg-[#eef4ef] p-6 dark:bg-slate-800/80 dark:border dark:border-slate-700">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-white dark:bg-emerald-400 dark:text-slate-950">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-primary dark:text-emerald-300 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-6">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Already Have a Claim / No Claim Yet */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white p-8 shadow-md border-l-4 border-emerald-600 dark:bg-slate-900 dark:border-slate-800">
              <h3 className="text-xl font-bold text-primary dark:text-emerald-300 mb-3">
                Already Have an ACC Claim?
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-7">
                Great — provide your ACC claim number when you book. Clients with a covered claim can self-refer for acupuncture treatment.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md border-l-4 border-amber-500 dark:bg-slate-900 dark:border-slate-800">
              <h3 className="text-xl font-bold text-primary dark:text-emerald-300 mb-3">
                Don't Have an ACC Claim Yet?
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-7">
                If you have not yet lodged an ACC claim, you may need to see an appropriate healthcare provider who can assess your injury and arrange the claim before ACC-funded acupuncture can begin. Contact us if you are unsure what information you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Wellness Spring Difference: More Than Acupuncture */}
      <section className="py-16 md:py-20 bg-[#eef4ef] dark:bg-slate-900/90 border-y border-emerald-900/10 dark:border-slate-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary dark:text-emerald-400 mb-2">
              More Than Acupuncture
            </h2>
            <p className="text-lg font-semibold text-accent dark:text-emerald-300 mb-4">
              A Chinese Medicine Approach to Injury Recovery
            </p>
            <p className="max-w-3xl mx-auto text-base text-slate-700 dark:text-slate-300 leading-8">
              At Wellness Spring, injury recovery is approached as more than symptom relief alone. Treatment considers pain, movement, muscle tension, function, recovery patterns and the individual’s overall presentation.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-800">
              <h3 className="text-lg font-bold text-primary dark:text-emerald-300 mb-2">Acupuncture</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-6">
                Fine disposable needles are used according to the individual injury presentation and treatment goals.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-800">
              <h3 className="text-lg font-bold text-primary dark:text-emerald-300 mb-2">Cupping</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-6">
                May be incorporated where clinically appropriate as part of injury-related care.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-800">
              <h3 className="text-lg font-bold text-primary dark:text-emerald-300 mb-2">Gua Sha</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-6">
                May be used as an additional Chinese medicine technique when appropriate.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-800">
              <h3 className="text-lg font-bold text-primary dark:text-emerald-300 mb-2">Tuina</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-6">
                Chinese therapeutic manual techniques may be incorporated where suitable to support recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — What ACC Pays For & SECTION 7 — Treatment Allowance */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl space-y-8">
          <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-slate-900 dark:border dark:border-slate-800">
            <h2 className="text-2xl font-bold text-primary dark:text-emerald-400 mb-4">
              ACC Funding & Treatment
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-8 mb-4">
              ACC contributes towards the cost of eligible acupuncture treatment for injuries covered by ACC. Depending on the clinic fee and treatment provided, a co-payment may apply.
            </p>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 border-l-2 border-primary pl-4">
              Non-injury treatment and treatments not funded by ACC are charged separately.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-slate-900 dark:border dark:border-slate-800">
            <h2 className="text-2xl font-bold text-primary dark:text-emerald-400 mb-4">
              How Many ACC Acupuncture Treatments Are Funded?
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-8 mb-4">
              ACC-funded acupuncture currently provides a maximum of 12 treatments within 12 weeks from the first acupuncture treatment. The first treatment needs to begin within one year of the accident. Eligibility continues while treatment remains related to the covered injury and ACC requirements are met.
            </p>
            <p className="text-sm text-accent dark:text-emerald-300 font-semibold">
              If you are unsure whether your claim is eligible, contact us before booking and we can help you understand what information to bring.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Why Choose Wellness Spring */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-900 border-y border-emerald-900/10 dark:border-slate-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary dark:text-emerald-400 mb-4">
              Why Choose Wellness Spring for ACC Injury Recovery?
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="rounded-2xl bg-[#f0f4f9] p-6 dark:bg-slate-800 border border-emerald-900/10 dark:border-slate-700">
                <span className="mb-3 block text-2xl font-bold text-accent dark:text-emerald-400">✦</span>
                <h3 className="text-lg font-bold text-primary dark:text-emerald-300 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-6">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — ACC FAQ */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary dark:text-emerald-400 mb-4">
              ACC Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {accFaqs.map((faq, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                  className="w-full px-6 py-4 text-left font-bold text-primary dark:text-emerald-300 flex items-center justify-between"
                >
                  <span>{faq.question}</span>
                  <span className="text-xl">{openFaqIndex === index ? '−' : '+'}</span>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-700 dark:text-slate-300 leading-7 border-t border-slate-100 dark:border-slate-800">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACC Booking & Contact Section */}
      <Contact
        title="Ready to Start Your ACC Recovery?"
        subtitle="If you already have an ACC claim, book an appointment and provide your claim number. If you are unsure whether your injury may be eligible, contact Wellness Spring and we can explain what information you need before your appointment."
      />
    </div>
  )
}
