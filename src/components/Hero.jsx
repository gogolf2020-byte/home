export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Integrated Acupuncture & Holistic Health
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Combining traditional Chinese medicine, acupuncture and AI-assisted health
            assessment to support personalised care, recovery and long-term wellbeing.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book an Appointment
            </a>
            <a
              href="#about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
