export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src={logo} alt="Wellness Spring logo" className="h-12 w-12 rounded-full object-cover" />
              <h3 className="text-xl font-bold">Wellness Spring</h3>
            </div>
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
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-xl font-bold hover:-translate-y-1 hover:bg-white hover:text-primary transition-all">
                f
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-xl hover:-translate-y-1 hover:bg-white transition-all">
                📷
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-xl hover:-translate-y-1 hover:bg-white transition-all">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M19.59 6.69a4.79 4.79 0 0 1-3.77-4.17V2.5h-3.19v12.66a2.9 2.9 0 1 1-2.01-2.76V9.17a6.16 6.16 0 1 0 5.2 6.09V8.84a7.95 7.95 0 0 0 4.77 1.6V7.25c-.36-.16-.7-.35-1-.56Z" />
                </svg>
              </a>
              <a href="https://wa.me/+642110118892" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-xl hover:-translate-y-1 hover:bg-white transition-all">
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
import logo from '../assets/98.jpg'
