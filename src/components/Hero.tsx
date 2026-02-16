'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import Image from 'next/image'

const Hero = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/nabeel-imran-1708a0238/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/nabeel-imran', label: 'GitHub' },
    { icon: FaEnvelope, href: 'mailto:nabeelscode@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I&apos;m{' '}
              <span className="text-gradient animate-gradient">
                Nabeel Imran
              </span>
            </motion.h1>

            <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 h-20">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'AI/ML Specialist',
                  2000,
                  'Cloud Solutions Architect',
                  2000,
                  'Automation Expert',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gradient"
              />
            </div>

            <motion.p
              className="text-lg text-gray-400 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Transforming ideas into powerful digital solutions. Specialized in building scalable
              applications, AI-powered tools, and automation systems that drive real business results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Hire Me Now
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 border-2 border-primary-500 rounded-full text-white font-semibold hover:bg-primary-500/10 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
              
              {/* Profile Image Container */}
              <motion.div
                className="relative z-10 rounded-full overflow-hidden border-4 border-gradient-to-r from-primary-400 to-accent-400 shadow-2xl shadow-primary-500/50"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square relative bg-gradient-to-br from-slate-800 to-slate-900">
                  <Image
                    src="/assets/nabeel-profile.png"
                    alt="Nabeel Imran"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-400 to-accent-400 rounded-lg opacity-20 blur-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full opacity-20 blur-xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-gray-400 text-sm">Scroll Down</span>
            <FaArrowDown className="text-primary-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
