import { useState } from 'react'
import { content } from '../content'
import { Menu, X } from 'lucide-react'

const { links, cta } = content.nav
const { firstName, lastName } = content.hero

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg text-gray-900">
          {firstName}{' '}
          <span className="text-teal-600">{lastName}</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-teal-600 transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#rendez-vous"
            className="bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors"
          >
            {cta}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-600"
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-gray-600 hover:text-teal-600 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#rendez-vous"
            onClick={() => setOpen(false)}
            className="block bg-teal-600 text-white px-5 py-2 rounded-full text-center font-medium hover:bg-teal-700 transition-colors"
          >
            {cta}
          </a>
        </div>
      )}
    </nav>
  )
}
