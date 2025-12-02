"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    details: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", projectType: "", details: "" })
  }

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl mb-4 font-bold">Let's Build Something Amazing Together</h2>
          <p className="text-xl text-gray-400">Ready to transform your business? Get in touch with us today.</p>
        </div>

        <div className="card-blur p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-2 text-gray-300 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#6C63FF] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#6C63FF] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300 font-medium">Project Type</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#6C63FF] focus:outline-none transition-colors"
              >
                <option value="">Select a service</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile Development</option>
                <option value="ai">AI Integration</option>
                <option value="cloud">Cloud Infrastructure</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300 font-medium">Project Details</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#6C63FF] focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <button type="submit" className="button-primary w-full flex items-center justify-center gap-2 text-white">
              Request Proposal
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
