export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-24">
      <div className="container">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">
          About Wellness Spring
        </h2>
        
        <div className="max-w-3xl mx-auto mb-12">
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

        {/* Services */}
        <div id="services" className="bg-gray-50 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Our Services</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Acupuncture',
              'Moxibustion',
              'Cupping',
              'Gua Sha',
              'Traditional Bloodletting Techniques',
              'Fire Needle Therapy',
              'Chinese Medicine Psychology',
              'Therapeutic Music',
              'AI-Assisted Health Assessment',
            ].map((service) => (
              <div key={service} className="flex items-start">
                <span className="text-primary mr-4 text-2xl">✓</span>
                <span className="text-gray-700 text-lg">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
