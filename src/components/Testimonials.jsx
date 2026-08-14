export default function Testimonials() {
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
    <section id="testimonials" className="bg-[#f0f4f9] py-20 md:py-24">
      <div className="container">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">
          Testimonials
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-6 leading-8">
                "{testimonial.text}"
              </p>
              
              <hr className="border-gray-200 mb-4" />
              
              <h4 className="font-bold text-primary">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
