'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923001234567'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Nabeel!%20I'm%20interested%20in%20your%20services.`

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transition z-50 group"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp className="text-3xl text-white group-hover:scale-110 transition" />
      <motion.span
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-green-500 opacity-20"
      />
      
      {/* Tooltip */}
      <div className="absolute left-full ml-4 px-4 py-2 bg-dark-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl border border-white/10">
        Chat on WhatsApp
        <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-dark-900" />
      </div>
    </motion.a>
  )
}
