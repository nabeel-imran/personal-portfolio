'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaGraduationCap, FaAward, FaCertificate } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      type: 'work',
      icon: FaBriefcase,
      title: 'Senior Full Stack Developer',
      company: 'Freelance / Upwork',
      period: '2020 - Present',
      description: 'Leading complex full-stack projects for international clients. Specialized in AI/ML integration, automation systems, and scalable web applications.',
      achievements: [
        'Successfully delivered 50+ projects with 100% client satisfaction',
        'Built enterprise-level automation systems saving clients 1000+ hours',
        'Developed AI-powered tools generating $100K+ in client revenue',
        'Maintained Top Rated Plus status on Upwork'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'work',
      icon: FaBriefcase,
      title: 'Software Engineer',
      company: 'Tech Solutions',
      period: '2019 - 2020',
      description: 'Developed and maintained multiple web applications and APIs. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Architected and built RESTful APIs serving 100K+ daily requests',
        'Reduced application load time by 60% through optimization',
        'Implemented CI/CD pipelines reducing deployment time by 80%',
        'Mentored junior developers and conducted code reviews'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      type: 'work',
      icon: FaBriefcase,
      title: 'Junior Developer',
      company: 'StartupHub',
      period: '2018 - 2019',
      description: 'Started career building responsive web applications and learning modern development practices. Gained expertise in React, Node.js, and database management.',
      achievements: [
        'Developed 10+ responsive web applications',
        'Collaborated on agile development teams',
        'Learned and implemented best coding practices',
        'Contributed to open-source projects'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      type: 'education',
      icon: FaGraduationCap,
      title: 'Bachelor of Computer Science',
      company: 'University of Technology',
      period: '2014 - 2018',
      description: 'Comprehensive study of computer science fundamentals, algorithms, data structures, and software engineering principles.',
      achievements: [
        'Graduated with Honors',
        'Led university tech club',
        'Won multiple hackathons',
        'Published research on AI applications'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const certifications = [
    {
      icon: FaCertificate,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2022'
    },
    {
      icon: FaCertificate,
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      year: '2021'
    },
    {
      icon: FaCertificate,
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University',
      year: '2021'
    },
    {
      icon: FaAward,
      title: 'Top Rated Plus Badge',
      issuer: 'Upwork',
      year: '2020'
    }
  ]

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of my professional experience and educational background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 card-hover">
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${exp.color} mb-4`}>
                      <exp.icon className="text-2xl text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 mb-2 text-primary-400 font-semibold">
                      <span>{exp.company}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    
                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-primary-400 mt-1">✓</span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 items-center justify-center">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${exp.color} border-4 border-slate-900 shadow-lg`}></div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Certifications & <span className="text-gradient">Awards</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 card-hover text-center"
              >
                <cert.icon className="text-4xl text-primary-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-xs text-primary-300">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
