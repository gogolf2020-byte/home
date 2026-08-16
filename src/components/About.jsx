import wellnessPhoto from '../assets/3.jpg'

export default function About() {
  return (
    <section id="about" className="bg-[#f0f4f9] py-12 md:py-16 dark:bg-slate-950">
      <div className="container">
        <h2 className="text-4xl font-bold text-primary dark:text-emerald-400 mb-8 text-center">
          About Wellness Spring
        </h2>
        
        <div className="grid items-center gap-12 md:grid-cols-2 mb-16">
          <img src={wellnessPhoto} alt="Traditional tea ceremony in a garden setting" className="h-[480px] w-full rounded-[2rem] object-cover shadow-lg" />
          <div>
          <p className="text-lg text-gray-700 dark:text-slate-300 leading-8 mb-6">
            At Wellness Spring, we combine evidence-informed Chinese medicine, acupuncture,
            traditional therapies, Chinese medicine psychology, and AI-assisted health
            assessment to provide personalised care for recovery and long-term wellbeing.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-slate-300 leading-8 mb-6">
            Treatment may include acupuncture, moxibustion, cupping, gua sha, traditional
            bloodletting techniques, fire needle therapy, and other approaches selected according to
            each patient's individual needs.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-slate-300 leading-8">
            We place particular emphasis on regulating the mind and spirit, supporting emotional
            balance, and integrating therapeutic music where appropriate. Technology is used to
            enhance — not replace — the practitioner–patient relationship.
          </p>
          </div>
        </div>

        {/* Services */}
        <div id="services" className="scroll-mt-2 rounded-[2rem] bg-[#eef4ef] p-6 md:p-10 dark:bg-slate-900/90 dark:border dark:border-slate-800">
          <h3 className="mb-4 text-3xl font-bold text-primary dark:text-emerald-400 text-center">Our Services</h3>
          <p className="mx-auto mb-8 max-w-5xl text-center text-base font-medium leading-7 text-slate-700 md:text-lg dark:text-slate-300">Integrating traditional wisdom with modern innovation to support your health and wellbeing.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {[
              {
                title: 'Acupuncture',
                icon: (
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3l-6.5 6.5M12.5 9.5L5 17M5 17l-2 2M12.5 9.5l2 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="4.5" cy="19.5" r="2.5" />
                  </svg>
                ),
                description: 'Restore balance and support natural healing.',
              },
              {
                title: 'Cupping',
                icon: (
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 19h12a1 1 0 001-1v-2c0-4.4-3.6-8-8-8s-8 3.6-8 8v2a1 1 0 001 1z" />
                    <path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
                description: 'Encourage circulation and ease muscle tension.',
              },
              {
                title: 'Traditional Bloodletting Techniques',
                icon: (
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
                  </svg>
                ),
                description: 'Traditional methods to restore harmony.',
              },
              {
                title: 'Chinese Medicine Psychology',
                icon: (
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                ),
                description: 'Support emotional balance and mind–body wellbeing.',
              },
              {
                title: 'Moxibustion',
                icon: (
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 22c4.4 0 8-3.6 8-8 0-4-3-7.5-6.5-11.5C12 1 10.5 3 9.5 5 7 8 4 10.5 4 14c0 4.4 3.6 8 8 8zm0-4a4 4 0 01-4-4c0-2 1.5-3.5 3-5.5 1 1.5 2.5 3 2.5 4.5a1.5 1.5 0 01-1.5 1.5z" />
                  </svg>
                ),
                description: 'Warm the meridians and support vital energy.',
              },
              {
                title: 'Gua Sha',
                icon: (
                  <svg className="h-6 w-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.5 3.5c-4.5 0-9.5 3-12 7.5S4 19.5 4.5 20s6.5 1 11-1.5 7-7.5 7.5-12-.5-3-3.5-3z" fill="currentColor" fillOpacity="0.2" />
                    <path d="M8 17c1-2 3.5-4.5 6.5-6" strokeLinecap="round" />
                  </svg>
                ),
                description: 'Promote circulation and relieve tension.',
              },
              {
                title: 'Fire Needle Therapy',
                icon: (
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2c1.2 2 1 3.5 0 4.8 1.2-.2 2.2.8 2.2 2.2 0 1.8-1.4 3.2-3.2 3.2s-3.2-1.4-3.2-3.2c0-2 2-3.6 2.4-4.4.4-.8.8-1.4.8-2.6z" />
                    <path d="M12 11.5V22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                ),
                description: 'Use warmth to stimulate healing and relieve pain.',
              },
              {
                title: 'Therapeutic Music',
                icon: (
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                ),
                description: 'Calm the mind and support recovery.',
              },
              {
                title: 'AI-Assisted Health Assessment',
                icon: 'AI',
                description: 'Personalised insights supported by AI technology.',
              },
              {
                title: 'Aesthetics & Anti-Aging',
                icon: (
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M10 3c-4.4 0-8 3.6-8 8 0 3.8 2.7 7 6.3 7.8C9.5 19.8 11.2 21 13 22h2c-2-2.5-2.2-5-1.5-7.8C16.8 12.8 18 10.5 18 8c0-2.8-2.2-5-5-5h-3z" opacity="0.3" />
                    <path d="M14 2l1.2 3.8L19 7l-3.8 1.2L14 12l-1.2-3.8L9 7l3.8-1.2L14 2z" />
                    <path d="M7 14l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z" />
                  </svg>
                ),
                description: 'Skin Rejuvenation, Anti-Wrinkle, Brightening & Medical Care',
              },
            ].map((service) => (
              <div key={service.title} className="flex min-h-[255px] flex-col rounded-2xl border border-emerald-950/10 bg-white p-5 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl dark:border-slate-700/60 dark:bg-slate-800/90 dark:hover:border-emerald-400">
                <span className="mx-auto mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e2eddc] text-xl font-bold text-primary dark:bg-emerald-950/80 dark:text-emerald-300">{service.icon}</span>
                <h4 className="flex min-h-11 items-center justify-center text-base font-bold leading-5 text-[#153e26] dark:text-emerald-300">{service.title}</h4>
                <span className="my-3 block text-sm font-bold text-accent dark:text-emerald-400">⌁</span>
                <p className="text-sm font-medium leading-6 text-slate-700 dark:text-slate-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

