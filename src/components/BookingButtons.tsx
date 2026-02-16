import { content } from '../content'
import { MapPin, Info } from 'lucide-react'
import mareilImg from '../assets/mareil.jpg'
import laQueueImg from '../assets/laqueue.jpg'

const { title, subtitle, buttonLabel, mapLabel, mutuelleNote, locations } =
  content.booking

const locationImages: Record<string, string> = {
  'Mareil-Marly': mareilImg,
  'La Queue-lez-Yvelines': laQueueImg,
}

export default function BookingButtons() {
  return (
    <section id="rendez-vous" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-gray-500 text-center mb-12 text-lg">{subtitle}</p>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="group relative bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={locationImages[loc.name]}
                alt={loc.name}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="p-8 text-center">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <MapPin className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  {loc.name}
                </h3>
                <p className="text-teal-600 text-sm font-medium mb-1">
                  {loc.place}
                </p>
                <p className="text-gray-500 text-sm">{loc.address}</p>

                <div className="bg-teal-50 rounded-xl px-4 py-3 mb-5">
                  <p className="text-teal-800 font-bold text-lg">
                    Consultation : {loc.price}
                  </p>
                  <p className="text-gray-500 text-xs">
                    Moyens de paiement : {loc.payment}
                  </p>
                </div>

                <a
                  href={loc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-700 transition-colors shadow-md shadow-teal-600/20"
                >
                  {buttonLabel} à {loc.name}
                  <span className="sr-only"> (nouvel onglet)</span>
                </a>
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-teal-600 text-sm hover:underline"
                >
                  {mapLabel}
                  <span className="sr-only"> (nouvel onglet)</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-3 bg-teal-50 px-6 py-3 rounded-full border border-teal-100">
            <Info className="w-5 h-5 text-teal-600 shrink-0" />
            <span className="text-teal-800 text-sm font-medium">
              {mutuelleNote}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
