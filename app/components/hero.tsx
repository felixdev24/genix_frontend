import { ArrowRight } from "lucide-react"
import { ImageWithFallback } from "./common/ImageWithFallback"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#6C63FF]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#4F46E5]/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
              <span className="text-sm text-[#6C63FF]">🚀 Next-Gen Technology Solutions</span>
            </div>

            <h1 className="text-5xl lg:text-7xl mb-6 gradient-text font-bold">
              All-in-One Web & AI Solutions for Modern Businesses
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-xl">
              We build high-performance web apps, mobile apps, and custom AI systems tailored to your business needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-[#6C63FF] to-[#4F46E5] rounded-xl hover:shadow-lg hover:shadow-[#6C63FF]/50 transition-all flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="button-secondary">View Solutions</button>
            </div>
          </div>

          <div className="relative">
             <div className="relative rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762279388952-85187155e48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc2NDYxNjg4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Futuristic Technology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F14] via-transparent to-transparent"></div>
              </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#6C63FF] to-[#4F46E5] rounded-2xl rotate-12 blur-xl opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#5A5CFF] to-[#6C63FF] rounded-2xl -rotate-12 blur-xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
