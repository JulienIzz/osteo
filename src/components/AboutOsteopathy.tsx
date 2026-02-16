import { content } from '../content'
import { Hand, Heart, Lightbulb } from 'lucide-react'

const { title, subtitle, quote, description, features, sessionInfo } =
  content.osteopathy

const icons = [
  <Hand className="w-7 h-7" />,
  <Heart className="w-7 h-7" />,
  <Lightbulb className="w-7 h-7" />,
]

export default function AboutOsteopathy() {
  return (
    <section id="osteopathie" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          <p className="text-teal-600 font-medium text-lg mb-8">{subtitle}</p>
          <blockquote className="text-gray-500 italic text-lg leading-relaxed mb-6">
            "{quote}"
          </blockquote>
          <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, i) => (
            <div key={feature.title} className="text-center">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-5 text-teal-600">
                {icons[i]}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-teal-50 rounded-2xl px-8 py-4 border border-teal-100">
            <p className="text-teal-800 font-medium">{sessionInfo}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
