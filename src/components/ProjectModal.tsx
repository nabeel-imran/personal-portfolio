'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaLightbulb, FaTrophy } from 'react-icons/fa'
import { Project } from '@/data/portfolio'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glassmorphism rounded-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-3 glass rounded-full hover:bg-red-500/20 transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>

          {/* Header */}
          <div className="relative h-64 bg-gradient-to-br from-primary-600 to-accent-600 rounded-t-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 h-full flex flex-col justify-end p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-4xl font-bold mb-2">{project.title}</h2>
              <p className="text-lg text-gray-200">{project.shortDescription}</p>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Overview */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">Project Overview</h3>
              <p className="text-gray-300 leading-relaxed text-lg">{project.fullDescription}</p>
            </div>

            {/* Details grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass p-4 rounded-xl">
                <p className="text-sm text-gray-400 mb-1">Duration</p>
                <p className="text-lg font-semibold">{project.duration}</p>
              </div>
              <div className="glass p-4 rounded-xl">
                <p className="text-sm text-gray-400 mb-1">Role</p>
                <p className="text-lg font-semibold">{project.role}</p>
              </div>
              {project.client && (
                <div className="glass p-4 rounded-xl">
                  <p className="text-sm text-gray-400 mb-1">Client</p>
                  <p className="text-lg font-semibold">{project.client}</p>
                </div>
              )}
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-gradient">Tech Stack</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 glass rounded-lg font-medium hover:bg-primary-500/20 transition-colors cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                <span className="text-gradient">Key Features</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 glass p-4 rounded-lg"
                  >
                    <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FaLightbulb className="text-yellow-400" />
                <span className="text-gradient">Technical Challenges</span>
              </h3>
              <div className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3 glass p-4 rounded-lg">
                    <FaLightbulb className="text-yellow-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FaTrophy className="text-primary-400" />
                <span className="text-gradient">Outcomes & Impact</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3 glass p-4 rounded-lg hover:bg-primary-500/10 transition-colors">
                    <FaTrophy className="text-primary-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.liveUrl || project.githubUrl) && (
              <div className="flex gap-4 pt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all"
                  >
                    <FaExternalLinkAlt />
                    View Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 glass rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    <FaGithub />
                    View Code
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectModal
