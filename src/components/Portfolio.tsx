'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt, FaRobot, FaShieldAlt, FaImage, FaChartLine } from 'react-icons/fa'
import { useState } from 'react'

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'RankGuide - SEO Analytics Tool',
      description: 'Advanced SEO analytics and rank tracking platform with AI-powered insights. Features real-time keyword tracking, competitor analysis, backlink monitoring, and automated reporting for digital marketing agencies.',
      category: 'web',
      icon: FaChartLine,
      tags: ['React', 'Node.js', 'MongoDB', 'Python', 'AI/ML'],
      image: '/assets/projects/rankguide.jpg',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Real-time keyword rank tracking',
        'Competitor analysis dashboard',
        'AI-powered SEO recommendations',
        'Automated report generation',
        'Backlink monitoring system'
      ]
    },
    {
      id: 2,
      title: 'Global Background Check Automation',
      description: 'Enterprise-level automated background verification system that streamlines the verification process across multiple countries. Integrates with various APIs and databases for comprehensive background checks.',
      category: 'automation',
      icon: FaShieldAlt,
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'AWS', 'Selenium'],
      image: '/assets/projects/background-check.jpg',
      color: 'from-green-500 to-emerald-500',
      features: [
        'Multi-country verification support',
        'API integrations with verification services',
        'Automated document processing',
        'Real-time status tracking',
        'Compliance & security features'
      ]
    },
    {
      id: 3,
      title: 'AI Image Generation Platform',
      description: 'Cutting-edge AI-powered image generation platform using state-of-the-art models. Features include text-to-image generation, style transfer, image enhancement, and custom model training capabilities.',
      category: 'ai',
      icon: FaImage,
      tags: ['Python', 'TensorFlow', 'React', 'FastAPI', 'AWS S3'],
      image: '/assets/projects/ai-image-gen.jpg',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Text-to-image generation',
        'Style transfer & customization',
        'Batch processing capabilities',
        'High-resolution output',
        'API access for developers'
      ]
    },
    {
      id: 4,
      title: 'E-Commerce Automation Suite',
      description: 'Comprehensive automation solution for e-commerce businesses including inventory management, order processing, customer communication, and analytics dashboard.',
      category: 'automation',
      icon: FaRobot,
      tags: ['Node.js', 'React', 'MongoDB', 'Puppeteer', 'Redis'],
      image: '/assets/projects/ecommerce.jpg',
      color: 'from-orange-500 to-red-500',
      features: [
        'Automated inventory sync',
        'Order processing automation',
        'Customer email campaigns',
        'Sales analytics dashboard',
        'Multi-platform integration'
      ]
    },
    {
      id: 5,
      title: 'Smart Web Scraping Framework',
      description: 'Robust and scalable web scraping framework with anti-detection mechanisms, proxy rotation, and data processing pipeline. Built for enterprise-level data extraction needs.',
      category: 'automation',
      icon: FaRobot,
      tags: ['Python', 'Scrapy', 'Docker', 'MongoDB', 'AWS'],
      image: '/assets/projects/web-scraper.jpg',
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Anti-detection mechanisms',
        'Proxy rotation system',
        'Distributed scraping',
        'Data validation & cleaning',
        'Scheduled scraping jobs'
      ]
    },
    {
      id: 6,
      title: 'AI Chatbot Platform',
      description: 'Intelligent chatbot platform with NLP capabilities, multi-language support, and seamless integration options. Powers customer support for multiple businesses.',
      category: 'ai',
      icon: FaRobot,
      tags: ['Python', 'OpenAI', 'React', 'Node.js', 'WebSocket'],
      image: '/assets/projects/chatbot.jpg',
      color: 'from-cyan-500 to-blue-500',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Context-aware responses',
        'Easy integration',
        'Analytics & insights'
      ]
    },
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'automation', name: 'Automation' },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="portfolio" className="relative py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest projects showcasing expertise in web development, AI/ML, and automation
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/50'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-800/80'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 card-hover"
            >
              {/* Project Icon/Image Header */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <project.icon className="text-6xl text-white z-10 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-primary-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Features List */}
                <div className="pt-4 border-t border-slate-700/50">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                        <span className="text-primary-400 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href="#contact"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg text-white text-sm font-semibold text-center hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
                  >
                    View Details
                  </a>
                  <button className="px-4 py-2 bg-slate-700/50 rounded-lg text-white hover:bg-slate-700 transition-all duration-300">
                    <FaExternalLinkAlt />
                  </button>
                </div>
              </div>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Interested in working together?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Let&apos;s Build Something Amazing
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
