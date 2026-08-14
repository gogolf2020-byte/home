import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What does acupuncture treat?',
      answer: 'Acupuncture uses fine, sterile needles to support the body\'s natural healing processes and address pain, stress, sleep, and wellbeing. It can be effective for a wide range of conditions including musculoskeletal pain, tension headaches, anxiety, insomnia, digestive issues, and recovery from injury.'
    },
    {
      question: 'Is acupuncture ACC registered?',
      answer: 'Yes. Wellness Spring provides ACC-registered acupuncture for eligible injuries. If you have experienced an accident or work-related injury, you may be covered. Please bring your ACC claim details to your appointment.'
    },
    {
      question: 'How is my treatment personalised?',
      answer: 'Your practitioner reviews your health history, symptoms, goals, and AI assessment results before creating a personalised care plan. Treatment is tailored to your individual needs, ensuring the most effective approach for your recovery.'
    },
    {
      question: 'How should I prepare?',
      answer: 'Wear comfortable clothing and arrive hydrated. Please share relevant medical information, medications, and current concerns during consultation. Avoid heavy meals 2–3 hours before your appointment, and allow time to rest afterward for optimal benefits.'
    },
    {
      question: 'How long is an appointment?',
      answer: 'Appointment length varies by service. Most initial consultations allow time for assessment, treatment, questions, and personalised care planning. Typically 60–90 minutes. Follow-up sessions may be shorter (30–45 minutes) depending on your treatment plan.'
    },
    {
      question: 'What if I\'m nervous about needles?',
      answer: 'Many people feel anxious about acupuncture needles. They are extremely fine and usually cause minimal sensation. Our practitioners are experienced in helping nervous clients feel comfortable. We can discuss your concerns and may start with gentler techniques or cupping, gua sha, or moxibustion as alternatives.'
    },
    {
      question: 'Can I combine acupuncture with other treatments?',
      answer: 'Yes. Acupuncture works well alongside conventional medicine and other complementary therapies. Please inform your practitioner about any other treatments you\'re receiving so we can create a coordinated care plan.'
    },
    {
      question: 'How many sessions will I need?',
      answer: 'The number of sessions depends on your condition, how long you\'ve had it, and your body\'s response to treatment. Some acute injuries improve quickly (3–6 sessions), while chronic conditions may require longer courses. We\'ll discuss realistic expectations and create a personalised plan together.'
    },
    {
      question: 'Are there any side effects?',
      answer: 'Acupuncture is generally very safe. Minor side effects may include slight soreness, mild bruising, or brief dizziness. These are temporary and usually resolve quickly. Serious side effects are rare when performed by qualified practitioners.'
    },
    {
      question: 'Do you offer online consultations?',
      answer: 'Initial consultations and treatments require an in-person visit to ensure proper assessment and care. However, we may offer follow-up guidance and support via phone or video depending on your needs. Please contact us to discuss options.'
    },
  ]

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="bg-bgLight py-20 md:py-24 dark:bg-slate-950">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            Find answers to frequently asked questions about acupuncture, treatment, and how we work with you to support your wellness journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-slate-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 dark:hover:border-accent/50"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full px-6 py-5 md:px-8 md:py-6 text-left bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors duration-200 flex items-center justify-between group"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-4">
                  <svg
                    className={`w-6 h-6 text-primary dark:text-accent transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-5 md:px-8 md:py-6 bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
                  <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-slate-300 mb-6">
            Didn't find your answer?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary hover:bg-secondary text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
