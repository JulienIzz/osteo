import type { JSX } from 'react'
import { content } from '../content'
import {
  Baby,
  Zap,
  Heart,
  Users,
  Bone,
  Stethoscope,
  Brain,
  UtensilsCrossed,
} from 'lucide-react'

const { title, subtitle, patientTypes, symptoms } = content.reasons

const iconMap: Record<string, JSX.Element> = {
  baby: <Baby className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  bone: <Bone className="w-6 h-6" />,
  utensils: <UtensilsCrossed className="w-6 h-6" />,
  brain: <Brain className="w-6 h-6" />,
  stethoscope: <Stethoscope className="w-6 h-6" />,
}

function Card({
  item,
}: {
  item: { icon: string; title: string; description: string }
}) {
  const icon = iconMap[item.icon]
  return (
    <div className="bg-white rounded-xl p-5 border-l-4 border-teal-500 shadow-sm hover:translate-x-1 transition-transform">
      <div className="flex items-start gap-3">
        {icon && (
          <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 shrink-0">
            {icon}
          </div>
        )}
        <div>
          <h4 className="font-semibold text-gray-900">{item.title}</h4>
          <p className="text-gray-500 text-sm mt-1 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function BookingReasons() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-500 text-lg">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-teal-600 text-center mb-6">
              Pour qui ?
            </h3>
            <div className="space-y-4">
              {patientTypes.map((item) => (
                <Card key={item.title} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-teal-600 text-center mb-6">
              Pour quoi ?
            </h3>
            <div className="space-y-4">
              {symptoms.map((item) => (
                <Card key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
