import { content } from '../content'
import { Star } from 'lucide-react'

const { title, subtitle, rating, items } = content.reviews

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} étoiles sur 5`} role="img">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          stroke="none"
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="avis" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <Stars count={5} />
            <span className="text-2xl font-bold text-gray-900">{rating}</span>
          </div>
          <p className="text-gray-500">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((review, i) => (
            <div
              key={review.name}
              className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow${i >= 3 ? ' hidden md:block' : ''}`}
            >
              <Stars count={review.rating} />
              <p className="text-gray-600 mt-4 mb-5 leading-relaxed text-sm">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-700 font-semibold text-sm">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">
                    {review.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
