import wellnessPhoto from '../assets/3.jpg'

export default function About() {
  return (
    <section id="about" className="bg-bgLight py-20 md:py-24">
      <div className="container">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">
          About Wellness Spring
        </h2>
        
        <div className="grid items-center gap-12 md:grid-cols-2 mb-16">
          <img src={wellnessPhoto} alt="Traditional tea ceremony in a garden setting" className="h-[480px] w-full rounded-[2rem] object-cover shadow-lg" />
          <div>
          <p className="text-lg text-gray-700 leading-8 mb-6">
            At Wellness Spring, we combine evidence-informed Chinese medicine, acupuncture,
            traditional therapies, Chinese medicine psychology, and AI-assisted health
            assessment to provide personalised care for recovery and long-term wellbeing.
          </p>
          
          <p className="text-lg text-gray-700 leading-8 mb-6">
            Treatment may include acupuncture, moxibustion, cupping, gua sha, traditional
            bloodletting techniques, fire needle therapy, and other approaches selected according to
            each patient's individual needs.
          </p>
          
          <p className="text-lg text-gray-700 leading-8">
            We place particular emphasis on regulating the mind and spirit, supporting emotional
            balance, and integrating therapeutic music where appropriate. Technology is used to
            enhance — not replace — the practitioner–patient relationship.
          </p>
          </div>
        </div>

        {/* Services */}
        <div id="services" className="rounded-[2rem] bg-[#eef4ef] p-6 md:p-10 dark:bg-slate-900">
          <h3 className="mb-4 text-3xl font-bold text-primary text-center">Our Services</h3>
          <p className="mx-auto mb-8 max-w-5xl text-center text-base font-medium leading-7 text-slate-700 md:text-lg dark:text-slate-200">Integrating traditional wisdom with modern innovation to support your health and wellbeing.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {[
              { title: 'Acupuncture', icon: '✦', description: 'Restore balance and support natural healing.' },
              { title: 'Cupping', icon: '◉', description: 'Encourage circulation and ease muscle tension.' },
              { title: 'Traditional Bloodletting Techniques', icon: '◒', description: 'Traditional methods to restore harmony.' },
              { title: 'Chinese Medicine Psychology', icon: '♡', description: 'Support emotional balance and mind–body wellbeing.' },
              { title: 'Moxibustion', icon: '♨', description: 'Warm the meridians and support vital energy.' },
              { title: 'Gua Sha', icon: '⌁', description: 'Promote circulation and relieve tension.' },
              { title: 'Fire Needle Therapy', icon: '♧', description: 'Use warmth to stimulate healing and relieve pain.' },
              { title: 'Therapeutic Music', icon: '♫', description: 'Calm the mind and support recovery.' },
              { title: 'AI-Assisted Health Assessment', icon: 'AI', description: 'Personalised insights supported by AI technology.' },
            ].map((service) => (
              <div key={service.title} className="flex min-h-[255px] flex-col rounded-2xl border border-emerald-950/10 bg-white p-5 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl dark:border-slate-600 dark:bg-slate-800">
                <span className="mx-auto mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e2eddc] text-xl font-bold text-primary dark:bg-emerald-950 dark:text-emerald-200">{service.icon}</span>
                <h4 className="flex min-h-11 items-center justify-center text-base font-bold leading-5 text-[#153e26] dark:text-emerald-200">{service.title}</h4>
                <span className="my-3 block text-sm font-bold text-accent">⌁</span>
                <p className="text-sm font-medium leading-6 text-slate-700 dark:text-slate-200">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
