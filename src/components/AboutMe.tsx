import { content } from '../content'
import trust from '../assets/trust.jpg'

const { title, photoAlt, paragraphs } = content.aboutMe

export default function AboutMe() {
  return (
    <section
      id="a-propos"
      className="py-20 bg-gradient-to-br from-teal-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-teal-100 rounded-3xl overflow-hidden">
              <img
                src={trust}
                alt={photoAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
