import wellnessPhoto from '../assets/3.jpg'

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-24">
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
        <div id="services" className="rounded-[2rem] bg-gray-50 p-6 md:p-10">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Our Services</h3>
          <p className="mx-auto mb-9 max-w-2xl text-center text-gray-600">Integrating traditional wisdom with modern innovation to support your health and wellbeing.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
              <div key={service.title} className="rounded-2xl bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#edf0df] text-xl font-semibold text-primary">{service.icon}</span>
                <h4 className="min-h-12 text-base font-semibold leading-5 text-primary">{service.title}</h4>
                <span className="my-3 block text-accent">⌁</span>
                <p className="text-sm leading-6 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
