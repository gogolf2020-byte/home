export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">🌿 Wellness Spring</h3>
            <p className="text-sm opacity-75">
              Future Smart Health<br/>
              Acupuncture • Chinese Medicine • AI-Assisted Health Assessment
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Services</a></li>
              <li><a href="#ai-assessment" className="hover:opacity-100 transition-opacity">AI Assessment</a></li>
              <li><a href="#practitioner" className="hover:opacity-100 transition-opacity">Practitioner</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>📞 021 101 8892</li>
              <li>027 372 0262</li>
              <li>📧 info@wellness-spring.co.nz</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                f
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                📷
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                🎵
              </a>
              <a href="https://wa.me/+642110118892" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                💬
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white border-opacity-20 my-8" />

        {/* Bottom */}
        <div className="text-center text-sm opacity-75">
          <p>&copy; {currentYear} Wellness Spring. All rights reserved.</p>
          <p className="mt-2">Future Smart Health - Combining Tradition with Innovation</p>
        </div>
      </div>
    </footer>
  )
}
