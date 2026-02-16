'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = ['Home', 'About', 'Services', 'Experience', 'Projects', 'Skills', 'Education', 'Certifications', 'Contact']

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] lg:hidden"
          />
          
          {/* Enhanced Modern Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-gradient-to-b from-dark-900/98 to-dark-950/98 backdrop-blur-2xl border-l border-white/10 z-[101] lg:hidden shadow-2xl"
          >
            {/* Modern Header with gradient */}
            <div className="relative p-6 border-b border-white/10 bg-gradient-to-r from-primary-900/10 to-accent-900/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Logo with shimmer effect */}
                  <div className="relative w-10 h-10 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                      <span className="text-white font-bold text-xl relative z-10">N</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                      Nabeel&apos;s Code
                    </div>
                    <div className="text-xs text-gray-400">AI Software Engineer</div>
                  </div>
                </div>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative w-10 h-10 glass rounded-lg flex items-center justify-center border border-white/10 group overflow-hidden"
                >
                  <FaTimes className="text-xl relative z-10 group-hover:text-red-400 transition-colors" />
                  <span className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/20 transition-all"></span>
                </motion.button>
              </div>
            </div>

            {/* Enhanced Navigation Items */}
            <nav className="p-6 space-y-2 overflow-y-auto h-[calc(100vh-180px)] custom-scrollbar">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block relative px-6 py-4 glass rounded-xl border border-white/10 group overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/10 group-hover:to-accent-500/10 transition-all duration-300"></span>
                  <span className="relative z-10 text-gray-300 group-hover:text-primary-400 font-medium transition-colors">
                    {item}
                  </span>
                  {/* Animated border */}
                  <motion.span
                    className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ width: '100%' }}
                  ></motion.span>
                </motion.a>
              ))}
              
              {/* Enhanced Consultation Button */}
              <motion.a
                href="#consultation"
                onClick={onClose}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: menuItems.length * 0.05 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block mt-4 px-6 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-semibold text-center shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Book Consultation</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.a>
            </nav>

            {/* Modern Footer Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-gradient-to-t from-dark-950/50 to-transparent backdrop-blur-sm">
              <p className="text-sm text-gray-400 text-center font-medium">
                Available for Freelance Projects
              </p>
              <p className="text-xs text-gray-500 text-center mt-2">
                nabeelscode@gmail.com
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
