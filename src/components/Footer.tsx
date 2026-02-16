'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/nabeel-imran-1708a0238/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: FaGithub, href: 'https://github.com/nabeel-imran', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: FaTwitter, href: 'https://twitter.com/nabeelimrann', label: 'Twitter', color: 'hover:text-cyan-400' },
    { icon: FaEnvelope, href: 'mailto:nabeelscode@gmail.com', label: 'Email', color: 'hover:text-red-400' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-slate-900/50 backdrop-blur-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div>
            <motion.h3
              className="text-2xl font-bold text-gradient mb-4"
              whileHover={{ scale: 1.05 }}
            >
              &lt;NabeelCode/&gt;
            </motion.h3>
            <p className="text-gray-400 mb-4">
              Crafting exceptional digital experiences through innovative solutions in full-stack development, AI/ML, and automation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="text-2xl" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p>
                <span className="text-primary-400 font-semibold">Email:</span><br />
                nabeelscode@gmail.com
              </p>
              <p>
                <span className="text-primary-400 font-semibold">Location:</span><br />
                Available Worldwide (Remote)
              </p>
              <p>
                <span className="text-primary-400 font-semibold">Status:</span><br />
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Available for Projects
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Nabeel Imran. All rights reserved. Made with{' '}
              <FaHeart className="inline text-red-500 animate-pulse" /> and lots of coffee.
            </p>
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Back to Top</span>
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
