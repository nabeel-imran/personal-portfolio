'use client'

import { motion } from 'framer-motion'

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <motion.div
      className={`${className} relative`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Hexagon background */}
        <path
          d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z"
          className="fill-gradient-to-br from-primary-500 to-accent-500"
          stroke="url(#gradient)"
          strokeWidth="2"
        />
        
        {/* N letter */}
        <path
          d="M35 35 L35 65 M35 35 L55 65 M55 35 L55 65"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Code brackets */}
        <path
          d="M60 40 L70 45 L70 55 L60 60"
          stroke="url(#gradient2)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M30 40 L20 45 L20 55 L30 60"
          stroke="url(#gradient2)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066ff" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary-500 blur-xl opacity-30 -z-10"></div>
    </motion.div>
  )
}

export default Logo
