import Link from 'next/link'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">B</span>
              </div>
              <span className="font-bold text-lg">Bright</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Launch your career with our premium internship opportunities.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-foreground/80 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/internships" className="hover:text-primary-foreground/80 transition-colors">
                  Internships
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-primary-foreground/80 transition-colors">
                  Apply
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-foreground/80 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="hover:text-primary-foreground/80 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#careers" className="hover:text-primary-foreground/80 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-primary-foreground/80 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-primary-foreground/80 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:hello@bright.com" className="hover:text-primary-foreground/80 transition-colors">
                  hello@bright.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:text-primary-foreground/80 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-3 pt-2">
                <a href="#linkedin" className="hover:text-primary-foreground/80 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#github" className="hover:text-primary-foreground/80 transition-colors">
                  <Github size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
            <p>&copy; {currentYear} Bright Internships. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
