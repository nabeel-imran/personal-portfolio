'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPython, FaReact, FaNode, FaDocker, FaAws, FaDatabase } from 'react-icons/fa'
import { SiTensorflow, SiNextdotjs, SiMongodb, SiPostgresql, SiKubernetes, SiTypescript } from 'react-icons/si'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { icon: FaPython, name: 'Python', color: 'text-yellow-400' },
    { icon: FaReact, name: 'React', color: 'text-cyan-400' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'text-white' },
    { icon: FaNode, name: 'Node.js', color: 'text-green-400' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-400' },
    { icon: SiTensorflow, name: 'TensorFlow', color: 'text-orange-400' },
    { icon: FaAws, name: 'AWS', color: 'text-orange-300' },
    { icon: FaDocker, name: 'Docker', color: 'text-blue-400' },
    { icon: SiKubernetes, name: 'Kubernetes', color: 'text-blue-500' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-300' },
    { icon: FaDatabase, name: 'Databases', color: 'text-purple-400' },
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gradient">
              Full Stack Developer & AI Specialist
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              I&apos;m a passionate software engineer with expertise in building end-to-end solutions
              that solve real-world problems. With over 5 years of experience, I specialize in
              creating scalable web applications, AI-powered tools, and automation systems.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              My journey in tech has been driven by curiosity and a desire to push boundaries.
              From developing sophisticated web scrapers and automation tools to building AI models
              and cloud infrastructure, I bring a comprehensive skill set to every project.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              I believe in writing clean, maintainable code and following best practices. Whether
              it&apos;s architecting a complex backend system, designing an intuitive frontend, or
              implementing machine learning algorithms, I&apos;m committed to delivering excellence.
            </p>

            {/* Download CV Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient">Technical Skills</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="flex flex-col items-center gap-2 p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300 card-hover"
                  whileHover={{ y: -5 }}
                >
                  <skill.icon className={`text-4xl ${skill.color}`} />
                  <span className="text-sm text-gray-300 text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl backdrop-blur-sm border border-primary-500/20 card-hover"
            >
              <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
