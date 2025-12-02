import { Code, Smartphone, Brain, MessageSquare, Cloud, Gauge } from "lucide-react"

interface ServiceCard {
  icon: typeof Code
  title: string
  description: string
}

const services: ServiceCard[] = [
  {
    icon: Code,
    title: "Web App Development",
    description: "Custom web applications built with cutting-edge technologies for optimal performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile solutions that deliver exceptional user experiences.",
  },
  {
    icon: Brain,
    title: "AI Integration & Automation",
    description: "Integrate intelligent AI systems to automate workflows and enhance decision-making.",
  },
  {
    icon: MessageSquare,
    title: "Chatbot & Voice Assistant",
    description: "Smart conversational AI that engages customers and streamlines support operations.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions with enterprise-grade security and reliability.",
  },
  {
    icon: Gauge,
    title: "System Optimization",
    description: "Performance tuning and optimization to maximize efficiency and reduce costs.",
  },
]

export function SolutionsOverview() {
  return (
    <section id="solutions" className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 font-bold">Our Solutions</h2>
          <p className="text-xl text-gray-400">Comprehensive services to transform your business</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group card-blur p-8 hover:bg-white/10 hover:border-[#6C63FF]/50 transition-all cursor-pointer"
              >
                <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl mb-3 font-semibold">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
