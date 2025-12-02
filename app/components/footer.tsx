import { Sparkles, Twitter, Linkedin, Github, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    quick: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "AI Services", href: "/ai-services" },
      { label: "Portfolio", href: "#portfolio" },
    ],
    services: [
      { label: "Web Development", href: "#" },
      { label: "Mobile Apps", href: "#" },
      { label: "AI Integration", href: "#" },
      { label: "Cloud Solutions", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  return (
    <footer className="py-12 px-6 border-t border-white/10 mt-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xl font-semibold">Genix Solution</span>
            </div>
            <p className="text-gray-400">Transforming businesses with cutting-edge web and AI solutions.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#6C63FF] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#6C63FF] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">Get in Touch</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>contact@genixsolution.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tech Street, Suite 100</li>
              <li>San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {currentYear} Genix Solution. All rights reserved.</p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.href}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#6C63FF] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
