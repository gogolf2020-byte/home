import { useTranslation } from 'react-i18next'

export default function Testimonials() {
  const { t } = useTranslation()

  const testimonials = [
    {
      name: 'Terry Horne',
      title: 'Retired AUT Sports Science Senior Lecturer & Programme Leader',
      text: 'Helene\'s patience and calm reassurance put me at ease from the beginning. She explained Traditional Chinese Medicine clearly, and over the course of treatment I experienced genuine improvements in strength, movement and confidence. I came to trust her skills completely and would recommend her without hesitation.'
    },
    {
      name: 'Sarah Chen',
      title: 'Business Professional',
      text: 'The AI health assessment gave me insights I never had before about my wellbeing patterns. Combined with Helene\'s expertise, the personalized treatment plan has made a real difference in my daily life and stress levels.'
    },
    {
      name: 'Michael Johnson',
      title: 'Athlete',
      text: 'After years of conventional treatment, Helene\'s holistic approach finally addressed my chronic pain. The combination of traditional techniques and modern AI analysis is truly unique and effective.'
    }
  ]

  return (
    <section id="testimonials" className="scroll-mt-20 bg-[#f0f4f9] py-16 md:py-24 dark:bg-slate-950 transition-colors duration-300 border-y border-emerald-900/10 dark:border-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-emerald-300">
              {t('testimonials.title', 'Testimonials')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-[#eef4ef] dark:bg-slate-800/80 p-5 sm:p-6 rounded-2xl border border-emerald-200/80 dark:border-slate-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  
                  <p className="text-slate-800 dark:text-slate-100 italic mb-5 leading-relaxed text-sm sm:text-base text-left">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div>
                  <hr className="border-emerald-200/80 dark:border-slate-700 mb-3" />
                  <h4 className="font-bold text-primary dark:text-emerald-300 text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
