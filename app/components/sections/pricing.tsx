"use client"

import { Check, ArrowRight } from "lucide-react"

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$2,999",
    description: "Perfect for small businesses and startups",
    features: [
      "Web or Mobile App Development",
      "Basic UI/UX Design",
      "Responsive Design",
      "3 Months Support",
      "Source Code Included",
      "Documentation",
    ],
  },
  {
    name: "Business",
    price: "$7,999",
    description: "Ideal for growing companies",
    popular: true,
    features: [
      "Web + Mobile App Development",
      "Advanced UI/UX Design",
      "AI Integration",
      "Custom API Development",
      "6 Months Premium Support",
      "Analytics Dashboard",
      "Cloud Deployment",
      "Security Audit",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale organizations",
    features: [
      "Full-Stack Development",
      "Custom AI Solutions",
      "Dedicated Development Team",
      "Priority Support 24/7",
      "Advanced Security Features",
      "Scalable Infrastructure",
      "DevOps & CI/CD",
      "Ongoing Maintenance",
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 font-bold">Pricing Plans</h2>
          <p className="text-xl text-gray-400">Choose the perfect plan for your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((plan, index) => (
            <div
              key={index}
              className="card-blur p-8 transition-all hover:scale-105"
              style={plan.popular ? { borderColor: "#6C63FF", boxShadow: "0 0 30px rgba(108, 99, 255, 0.2)" } : {}}
            >
              {plan.popular && (
                <div className="inline-block px-4 py-1 gradient-primary rounded-full text-sm mb-4 text-white">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl mb-2 font-semibold">{plan.name}</h3>
              <div className="text-4xl mb-2 font-bold">
                {plan.price}
                {plan.price !== "Custom" && <span className="text-lg text-gray-400 font-normal">/project</span>}
              </div>
              <p className="text-gray-400 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 flex-shrink-0" style={{ color: "#6C63FF" }} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3 rounded-xl transition-all font-semibold flex items-center justify-center gap-2 text-white"
                style={
                  plan.popular
                    ? { background: "linear-gradient(to right, #6C63FF, #4F46E5)" }
                    : { background: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(255, 255, 255, 0.1)" }
                }
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
