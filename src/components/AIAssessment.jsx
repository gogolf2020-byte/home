import logo from '../assets/matrix1.jpg'

export default function AIAssessment() {
  return (
    <section id="ai-assessment" className="bg-bgLight py-20 md:py-24">
      <div className="container">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">
          AI Health Assessment
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Smart Health Analysis</h3>
              <p className="text-gray-700 text-lg leading-8 mb-4">
                Our AI-assisted health assessment helps identify patterns across symptoms,
                lifestyle, and overall wellbeing to support a more personalised Chinese medicine
                treatment plan.
              </p>
              <p className="text-gray-700 text-lg leading-8">
                It is used as a clinical support tool alongside practitioner assessment — not as a
                replacement for professional judgement or medical diagnosis.
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="rounded-[2rem] bg-white p-4 shadow-lg md:p-5">
              <img src={logo} alt="MATRIX AI health assessment device" className="h-auto w-64 rounded-2xl object-contain md:w-72" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: 'Pattern Recognition',
              description: 'Identifies interconnected patterns in your health profile'
            },
            {
              title: 'Personalized Plan',
              description: 'Creates customized treatment recommendations'
            },
            {
              title: 'Continuous Support',
              description: 'Monitors progress and adapts treatment as needed'
            }
          ].map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg text-center">
              <h4 className="text-xl font-semibold text-primary mb-3">{feature.title}</h4>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
