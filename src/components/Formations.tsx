import { content } from '../content'
import practice1Img from '../assets/practice1.jpg'
import practice2Img from '../assets/practice2.jpg'

const { title, items } = content.formations

export default function Formations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
          {title}
        </h2>

        <div className="grid md:grid-cols-[1fr_280px] gap-12 items-center">
          <div className="relative border-l-2 border-teal-200 ml-4 md:ml-8">
            {items.map((item) => (
              <div key={item.title} className="relative pl-10 pb-12 last:pb-0">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-teal-500 rounded-full border-4 border-white" />
                <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                <p className="text-gray-700 mt-1">{item.subtitle}</p>
                <p className="text-gray-400 text-sm mt-1">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            <img
              src={practice1Img}
              alt="Pratiques sur dos d'un patient assis"
              loading="lazy"
              className="w-full rounded-2xl object-cover aspect-[3/4]"
            />
            <img
              src={practice2Img}
              alt="Pratiques sur dos d'un patient allongé"
              loading="lazy"
              className="hidden md:block w-full rounded-2xl object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
