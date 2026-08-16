import logo from '../assets/matrix1.jpg'

export default function AIAssessment() {
  return (
    <section id="ai-assessment" className="bg-[#f0f4f9] py-12 md:py-16 dark:bg-slate-950">
      <div className="container">
        <h2 className="text-4xl font-bold text-primary dark:text-emerald-400 mb-12 text-center">
          AI Health Assessment
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-lg dark:border dark:border-slate-800">
              <h3 className="text-2xl font-bold text-primary dark:text-emerald-300 mb-6">Smart Health Analysis</h3>
              <p className="text-gray-700 dark:text-slate-300 text-lg leading-8 mb-4">
                Our AI-assisted health assessment helps identify patterns across symptoms,
                lifestyle, and overall wellbeing to support a more personalised Chinese medicine
                treatment plan.
              </p>
              <p className="text-gray-700 dark:text-slate-300 text-lg leading-8">
                It is used as a clinical support tool alongside practitioner assessment — not as a
                replacement for professional judgement or medical diagnosis.
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="rounded-[2rem] bg-white dark:bg-slate-900 p-4 shadow-lg md:p-5 dark:border dark:border-slate-800">
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
            <div key={feature.title} className="bg-white dark:bg-slate-900 p-6 rounded-lg text-center shadow-md dark:border dark:border-slate-800">
              <h4 className="text-xl font-semibold text-primary dark:text-emerald-300 mb-3">{feature.title}</h4>
              <p className="text-gray-700 dark:text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
