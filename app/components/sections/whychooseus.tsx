import { Zap, Shield, Award, Headphones } from "lucide-react"

interface Benefit {
  icon: typeof Zap
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile development process ensures rapid deployment without compromising quality.",
  },
  {
    icon: Shield,
    title: "Scalable System Architecture",
    description: "Future-proof solutions designed to grow seamlessly with your business.",
  },
  {
    icon: Award,
    title: "Proven Quality",
    description: "Industry best practices and rigorous testing for exceptional results.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "24/7 technical support and ongoing maintenance to keep you running.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 font-bold">Why Choose Us</h2>
          <p className="text-xl text-gray-400">Your trusted partner for digital transformation</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="card-blur p-8 text-center hover:bg-white/10 transition-all">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl mb-3 font-semibold">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
