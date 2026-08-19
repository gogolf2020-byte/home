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
              Future Smart Health<br />
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
              <li>📧 wellness.spring.sys@gmail.com</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-2.5 flex-wrap">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:-translate-y-1 hover:bg-white hover:text-emerald-950 transition-all text-white"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:-translate-y-1 hover:bg-white hover:text-emerald-950 transition-all text-white"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:-translate-y-1 hover:bg-white hover:text-emerald-950 transition-all text-white"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M19.59 6.69a4.79 4.79 0 0 1-3.77-4.17V2.5h-3.19v12.66a2.9 2.9 0 1 1-2.01-2.76V9.17a6.16 6.16 0 1 0 5.2 6.09V8.84a7.95 7.95 0 0 0 4.77 1.6V7.25c-.36-.16-.7-.35-1-.56Z" />
                </svg>
              </a>
              <a
                href="https://wa.me/+642110118892"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:-translate-y-1 hover:bg-white hover:text-emerald-950 transition-all text-white"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
              <a
                href="#contact"
                aria-label="WeChat"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:-translate-y-1 hover:bg-white hover:text-emerald-950 transition-all text-white"
                title="Connect via WeChat"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[22px] w-[22px] translate-y-[2px] fill-current">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.5 1.8C3.8 1.8 0 4.8 0 8.4c0 2.1 1.2 3.9 3.0 5.0l-.8 2.3 2.7-1.3c.9.3 2.0.4 3.3.4.3 0 .6 0 .8-.02-.4-1.0-.5-2.0-.5-3.0 0-3.8 3.1-6.9 7.2-7.5-1.3-1.4-4.1-2.5-7.2-2.5zm-2.6 5.4a1.0 1.0 0 1 0 0 2.0 1.0 1.0 0 0 0 0-2.0zm5.1 0a1.0 1.0 0 1 0 0 2.0 1.0 1.0 0 0 0 0-2.0zm4.5-2.7c-4.1 0-7.4 2.8-7.4 6.1s3.3 6.1 7.4 6.1c.9 0 1.8-.1 2.7-.4l2.5 1.2-.8-2.0c1.6-1.1 2.6-2.8 2.6-4.9 0-3.3-3.3-6.1-7.0-6.1zm-2.4 4.2a.95.95 0 1 0 0 1.9.95.95 0 0 0 0-1.9zm4.7 0a.95.95 0 1 0 0 1.9.95.95 0 0 0 0-1.9z"
                  />
                </svg>
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
