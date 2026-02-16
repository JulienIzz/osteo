import { content } from '../content'
import profilePicture from '../assets/quentin.jpg'
import heroBg from '../assets/osteo.jpg'

const {
  subtitle,
  firstName,
  lastName,
  quote,
  description,
  cta,
  ctaSecondary,
  photoAlt,
} = content.hero

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroBg}
          alt={photoAlt}
          className="absolute inset-0 w-full h-full object-cover blur-md scale-105"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative z-10 text-center px-6 pt-20 pb-28 max-w-3xl mx-auto">
        {/* Round photo */}
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-xl">
          <img
            src={profilePicture}
            alt={photoAlt}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-gray-500 italic text-lg mb-4">{quote}</p>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          {firstName} <span className="text-teal-700">{lastName}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-teal-600 font-bold tracking-widest uppercase mb-2">
          {subtitle}
        </h2>
        <div className="h-8" />
        <p className="text-xl md:text-2xl text-gray-600 mb-16 font-light leading-relaxed whitespace-pre-line">
          {description.map((segment, i) =>
            typeof segment === 'string' ? (
              segment
            ) : (
              <b key={i}>{segment.text}</b>
            ),
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#rendez-vous"
            className="bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/25"
          >
            {cta}
          </a>
          <a
            href="#osteopathie"
            className="border-2 border-teal-600 text-teal-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-teal-50 transition-colors"
          >
            {ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}
