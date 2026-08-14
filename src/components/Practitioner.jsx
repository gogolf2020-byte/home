export default function Practitioner() {
  return (
    <section id="practitioner" className="bg-white py-20 md:py-24">
      <div className="container">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">
          Meet the Practitioner
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-8xl">👩‍⚕️</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Helene Li YU</h3>
            
            <p className="text-gray-700 text-lg leading-8 mb-6">
              Helene brings extensive expertise and compassion to her practice, with a holistic
              approach to care, integrating acupuncture, traditional Chinese medicine therapies,
              mind–body regulation, and AI-assisted health assessment.
            </p>
            
            <p className="text-gray-700 text-lg leading-8 mb-8">
              Her focus is on personalised treatment, emotional balance, and supporting long-term
              wellbeing through thoughtful, individualised care.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Specialties</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Traditional Chinese Medicine & Acupuncture</li>
                <li>• Mind-Body Regulation</li>
                <li>• Emotional Balance & Wellness</li>
                <li>• AI-Assisted Health Assessment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
