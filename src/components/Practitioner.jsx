export default function Practitioner() {
  return (
    <section id="practitioner" className="bg-bgLight py-20 md:py-24">
      <div className="container">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">
          Meet the Practitioner
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div className="flex justify-center">
            <img src={practitionerPhoto} alt="Helene Li Yu" className="h-[430px] w-full max-w-sm rounded-[2rem] object-cover object-top shadow-xl" />
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
import practitionerPhoto from '../assets/22.jpg'
