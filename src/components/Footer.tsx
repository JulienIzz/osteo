import {
  content,
  PHONE_NUMBER,
  PHONE_HREF,
  EMAIL_ADDRESS,
  EMAIL_HREF,
} from '../content'

const { cabinetsTitle, navTitle, contactTitle, navLinks, copyright } =
  content.footer
const { locations } = content.booking

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <h4 className="font-semibold mb-4 text-teal-400">
              {cabinetsTitle}
            </h4>
            <div className="space-y-4">
              {locations.map((loc) => (
                <div key={loc.name}>
                  <p className="font-medium">{loc.name}</p>
                  <p className="text-gray-400 text-sm">{loc.address}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-teal-400">{contactTitle}</h4>
            <div className="space-y-2">
              <a
                href={PHONE_HREF}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {PHONE_NUMBER}
              </a>
              <a
                href={EMAIL_HREF}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                {EMAIL_ADDRESS}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-teal-400">{navTitle}</h4>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm space-y-2">
          <p>
            &copy; {new Date().getFullYear()} {copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
