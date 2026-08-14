export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-r from-primary to-secondary text-white py-20 md:py-24">
      <div className="container max-w-3xl">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Book an Appointment
        </h2>
        
        <p className="text-lg text-center mb-12 opacity-90">
          Ready to take the next step in your health journey? Contact Wellness Spring to
          discuss your needs and book an appointment.
        </p>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span>📞</span> Appointments
                  </h4>
                  <p className="text-lg">021 101 8892</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span>📞</span> General Enquiries
                  </h4>
                  <p className="text-lg">027 372 0262</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span>📧</span> Email
                  </h4>
                  <p className="text-lg">info@wellness-spring.co.nz</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span>💬</span> WhatsApp
                  </h4>
                  <p className="text-lg">+64 21 101 8892</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 rounded bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                ></textarea>
                <button className="w-full bg-white text-primary font-bold py-2 rounded hover:bg-gray-100 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="text-center mt-12">
          <p className="text-sm opacity-75">Languages: English · Mandarin · Cantonese</p>
        </div>
      </div>
    </section>
  )
}
