'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaRocket, FaCode, FaBrain, FaAward, FaTimes, FaExternalLinkAlt, FaCheckCircle, FaLightbulb, FaTrophy, FaPaperPlane, FaRobot, FaGraduationCap, FaBriefcase, FaCalendar, FaMapMarkerAlt, FaPhone, FaUser, FaCommentDots, FaStar, FaChevronRight, FaCertificate, FaTools, FaChartLine, FaBars } from 'react-icons/fa'
import Image from 'next/image'
import MobileMenu from '@/components/MobileMenu'

export default function Home() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [activeSkill, setActiveSkill] = useState<string | null>(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState<Array<{text: string, sender: 'user' | 'bot'}>>([
              { text: "Hi! I'm Nabeel's AI assistant. Ask me anything about his services, projects, or experience!", sender: 'bot' }
  ])
  const [chatInput, setChatInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  // Education Data
  const education = [
    {
      degree: 'Bachelor of Science in Electronics Engineering',
      institution: 'COMSATS Institute of Information and Technology',
      location: 'Islamabad, Pakistan',
      period: '2016 - 2020',
      description: 'Specialized in Electronics Engineering with focus on Computer Vision, IoT, and embedded systems. Strong foundation in signal processing and automation.',
      achievements: ['Dean\'s List', 'Final Year Project Excellence', 'Research Publication']
    },
    {
      degree: 'Intermediate in Pre-Engineering',
      institution: 'Army Public School (APSACS)',
      location: 'Pakistan',
      period: '2018 - 2020',
      description: 'Completed FSc Pre-Engineering with distinction in Physics, Chemistry, and Mathematics.',
      achievements: ['Academic Excellence Award', 'Science Olympiad Participant']
    }
  ]

  // Professional Experience Data
  const experience = [
    {
      title: 'AI Software Engineer',
      company: 'Peersol Consulting',
      location: 'Islamabad, Pakistan',
      period: 'Aug 2024 - Present',
      type: 'Full-time · On-site',
      description: 'Delivering custom software development, production-grade AI-driven automation, RPA solutions, and enterprise integrations for global clients in HR tech, compliance, and digital transformation.',
      achievements: [
        'Designed intelligent automation systems achieving 40-70% efficiency gains across client operations',
        'Led end-to-end Veremark background screening automation for multi-country compliance checks',
        'Engineered secure portal interactions with SSO, session handling, CAPTCHA challenges, and retry logic',
        'Served as Workday Integration specialist, configuring Custom Objects and RAAS-based reporting',
        'Transitioned legacy Studio solutions to modern custom API-driven architectures',
        'Delivered audit-friendly pipelines syncing to Google Sheets and internal systems'
      ],
      technologies: ['Python', 'Workday', 'RPA', 'Browser Automation', 'API Integration', 'Google Sheets', 'AI/ML']
    },
    {
      title: 'Internet of Things Intern',
      company: 'Zigron',
      location: 'Islamabad, Pakistan',
      period: 'Jul 2022 - Sep 2022',
      type: 'Internship · On-site',
      description: 'Worked on Computer Vision and Natural Language Processing projects. Performed object detection, segmentation and classification using YOLO.',
      achievements: [
        'Implemented YOLO-based object detection systems',
        'Developed NLP models for text classification',
        'Created computer vision pipelines for real-time analysis',
        'Contributed to IoT sensor integration projects'
      ],
      technologies: ['Python', 'YOLO', 'Computer Vision', 'NLP', 'TensorFlow', 'OpenCV']
    }
  ]

  // Professional Certifications
  const certifications = [
    { title: 'AI Engineer Course 2024: Complete AI Engineer Bootcamp', issuer: 'Udemy', date: 'Oct 2024', id: 'UDM-AI-2024' },
    { title: 'Google Digital Marketing & E-commerce', issuer: 'Google', date: 'Jan 2024', id: 'EVJGBAPTWPRY' },
    { title: 'Full Stack Software Developer', issuer: 'IBM', date: 'Jun 2023', id: '2R3XS4ZVWT77' },
    { title: 'Python Programming Specialization', issuer: 'Coursera', date: 'May 2023', id: 'CRSA-PY-2023' },
    { title: 'Machine Learning Fundamentals', issuer: 'DeepLearning.AI', date: 'Apr 2023', id: 'DL-ML-2023' },
    { title: 'Web Development Bootcamp', issuer: 'Udemy', date: 'Mar 2023', id: 'UDM-WEB-2023' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Veremark Background Screening Automation',
      short: 'Multi-country compliance automation for global background checks',
      full: 'Led end-to-end automation of Veremark background screening platform for multi-country compliance checks including Directorship Checks, Philippine Criminal Records, Australian Police Checks, and Employment Verification. Built resilient browser workflows with SSO authentication, session management, CAPTCHA handling, and intelligent retry logic.',
      tech: ['Python', 'Selenium', 'Playwright', 'Browser Automation', 'SSO', 'API Integration', 'Google Sheets API', 'PostgreSQL'],
      features: [
        'Multi-country compliance checks automation',
        'SSO authentication and session management',
        'CAPTCHA challenge resolution',
        'Intelligent retry logic for failed operations',
        'Secure portal interactions (login, navigation, data extraction)',
        'Real-time status updates and notifications',
        'Google Sheets integration for reporting',
        'Audit-friendly pipeline with complete logging'
      ],
      challenges: [
        'Handling SSO authentication across multiple portals',
        'Managing session expiry and re-authentication',
        'Dealing with CAPTCHA challenges and rate limiting',
        'Ensuring data accuracy across different document formats',
        'Building resilient workflows for unreliable third-party systems'
      ],
      outcomes: [
        '40-70% efficiency gains in background check processing',
        'Reduced manual intervention by 80%',
        'Eliminated human errors in data entry',
        '24/7 automated processing capability',
        'Complete audit trail for compliance',
        'Real-time sync with internal systems'
      ],
      impact: '70% efficiency gain, 80% less manual work, zero data entry errors',
      metrics: {
        efficiency: '70% gain',
        automation: '80% reduction',
        accuracy: '99.9%'
      }
    },
    {
      id: 2,
      title: 'Workday Integration & Custom Objects',
      short: 'Enterprise HR system integration with Workday',
      full: 'Served as Workday Integration specialist, configuring Custom Objects, enabling RAAS-based reporting, managing security groups, and driving transition from legacy Studio-based solutions to modern custom API-driven architectures. Built scalable, reliable integrations for enterprise HR operations.',
      tech: ['Workday', 'Workday Studio', 'RAAS', 'REST APIs', 'Custom Objects', 'Integration Cloud', 'XML', 'XSLT'],
      features: [
        'Custom Objects configuration and management',
        'RAAS (Reporting as a Service) implementation',
        'Security groups and access control setup',
        'Custom API development for integrations',
        'Legacy Studio to API migration',
        'Real-time data synchronization',
        'Automated reporting pipelines',
        'Integration monitoring and alerting'
      ],
      challenges: [
        'Migrating from legacy Studio-based integrations',
        'Complex security group configurations',
        'Data mapping across different HR systems',
        'Ensuring zero downtime during migration',
        'Meeting strict compliance requirements'
      ],
      outcomes: [
        'Migrated 15+ legacy integrations to modern APIs',
        'Reduced integration maintenance time by 60%',
        'Improved data accuracy to 99.9%',
        'Enabled real-time HR data access',
        'Streamlined security management',
        'Built reusable integration framework'
      ],
      impact: '15+ integrations modernized, 60% less maintenance, 99.9% accuracy',
      metrics: {
        integrations: '15+ migrated',
        maintenance: '60% reduction',
        uptime: '99.9%'
      }
    },
      {
        id: 3,
        title: 'AI Image Generation Platform',
        short: 'Professional AI image generation with custom models',
        full: 'State-of-the-art AI image generation platform powered by Stable Diffusion and custom-trained models. Features include text-to-image generation, style transfer, image-to-image transformation, inpainting, outpainting, and 4K upscaling. Built for professional designers, marketers, and content creators.',
        tech: ['PyTorch', 'Stable Diffusion', 'CUDA', 'React', 'FastAPI', 'PostgreSQL', 'Redis', 'AWS S3', 'CloudFront', 'Docker'],
        features: [
          'Text-to-image with 50+ styles',
          'Custom model training',
          'Batch processing (up to 1000 images)',
          '4K upscaling with ESRGAN',
          'Style transfer and mixing',
          'Inpainting and outpainting',
          'API for developers',
          'Commercial licensing'
        ],
        challenges: [
          'Optimizing inference speed for real-time generation',
          'Managing GPU resources efficiently',
          'Training custom models with limited data',
          'Handling high-resolution outputs'
        ],
        outcomes: [
          '100K+ images generated',
          '1,000+ active users',
          '3-second average generation time',
          '40% better quality than competitors',
          'Featured in AI art competitions'
        ],
        impact: '100K+ images generated, 3-second avg time, 40% quality improvement',
        metrics: {
          users: '1000+',
          images: '100K+',
          speed: '3s avg'
        }
      },
      {
        id: 4,
        title: 'E-Commerce Automation Suite',
        short: 'Complete automation for online stores',
        full: 'Comprehensive e-commerce automation platform that handles inventory management, order processing, customer communication, and analytics. Integrates with major platforms like Shopify, WooCommerce, and Amazon. Features AI-powered inventory forecasting, automated customer support, multi-channel synchronization, and advanced analytics.',
        tech: ['Node.js', 'React', 'MongoDB', 'Redis', 'RabbitMQ', 'Stripe API', 'SendGrid', 'AWS Lambda', 'GraphQL'],
        features: [
          'Multi-platform integration (Shopify, WooCommerce, Amazon)',
          'AI-powered inventory forecasting',
          'Automated order processing & fulfillment',
          'Smart customer communication system',
          'Real-time analytics dashboard',
          'Automated pricing optimization',
          'Multi-warehouse management',
          'Fraud detection system'
        ],
        challenges: [
          'Syncing data across multiple platforms in real-time',
          'Handling high transaction volumes',
          'Building accurate inventory forecasting models',
          'Ensuring payment security and compliance'
        ],
        outcomes: [
          '200+ online stores automated',
          '$10M+ in transactions processed',
          '70% reduction in manual work',
          '99.9% order accuracy',
          '50% improvement in inventory turnover'
        ],
        impact: '200+ stores, $10M+ processed, 70% manual work reduction',
        metrics: {
          stores: '200+',
          transactions: '$10M+',
          accuracy: '99.9%'
        }
      },
      {
        id: 5,
        title: 'Smart Web Scraping Framework',
        short: 'Enterprise-grade web scraping with AI',
        full: 'Robust and scalable web scraping framework with anti-detection mechanisms, proxy rotation, CAPTCHA solving, and intelligent data extraction. Uses machine learning for adaptive scraping strategies and handles dynamic JavaScript-heavy websites. Built for data intelligence, price monitoring, and market research.',
        tech: ['Python', 'Scrapy', 'Selenium', 'Puppeteer', 'BeautifulSoup', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'],
        features: [
          'Distributed scraping architecture',
          'AI-powered anti-detection system',
          'Automatic CAPTCHA solving',
          'Proxy rotation & management',
          'Dynamic content handling (JavaScript rendering)',
          'Data validation & cleaning',
          'Scheduled & event-driven scraping',
          'RESTful API for data access'
        ],
        challenges: [
          'Bypassing advanced anti-bot systems',
          'Handling rate limiting and IP blocks',
          'Extracting data from complex JavaScript applications',
          'Maintaining scraper reliability at scale'
        ],
        outcomes: [
          '50+ websites scraped simultaneously',
          '10M+ data points extracted daily',
          '95% success rate',
          '30+ enterprise clients',
          'Average uptime: 99.7%'
        ],
        impact: '50+ sites, 10M+ daily data points, 95% success rate',
        metrics: {
          websites: '50+',
          dataPoints: '10M+/day',
          uptime: '99.7%'
        }
      },
      {
        id: 6,
        title: 'AI-Powered Customer Support Chatbot',
        short: 'Intelligent customer service automation',
        full: 'Advanced customer support chatbot powered by GPT-4 with custom training on company knowledge bases. Features multi-language support, sentiment analysis, ticket routing, and seamless handoff to human agents. Integrates with major CRM platforms and provides real-time analytics.',
        tech: ['Python', 'FastAPI', 'OpenAI GPT-4', 'React', 'WebSocket', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
        features: [
          'Natural language understanding with GPT-4',
          'Multi-language support (25+ languages)',
          'Sentiment analysis & emotion detection',
          'Smart ticket routing to human agents',
          'Custom training on company data',
          'Live chat & messaging integration',
          'Analytics dashboard with insights',
          'CRM integration (Salesforce, HubSpot)'
        ],
        challenges: [
          'Training on domain-specific knowledge',
          'Maintaining conversation context across sessions',
          'Handling edge cases and unusual queries',
          'Ensuring data privacy and security'
        ],
        outcomes: [
          '80% of queries resolved automatically',
          '50K+ conversations handled monthly',
          '4.8/5 customer satisfaction rating',
          '60% reduction in support costs',
          '30+ companies deployed'
        ],
        impact: '80% auto-resolution, 50K+ monthly chats, 60% cost reduction',
        metrics: {
          resolution: '80%',
          conversations: '50K+/mo',
          satisfaction: '4.8/5'
        }
      },
      {
        id: 7,
        title: 'Machine Learning Model Deployment Platform',
        short: 'MLOps platform for model deployment',
        full: 'Complete MLOps platform for deploying, monitoring, and managing machine learning models in production. Features automated model versioning, A/B testing, performance monitoring, auto-scaling, and rollback capabilities. Supports TensorFlow, PyTorch, scikit-learn, and custom models.',
        tech: ['Python', 'FastAPI', 'TensorFlow', 'PyTorch', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'AWS', 'MLflow'],
        features: [
          'Automated model deployment pipeline',
          'Model versioning & registry',
          'A/B testing framework',
          'Real-time performance monitoring',
          'Auto-scaling based on load',
          'One-click rollback capability',
          'Multi-framework support',
          'API gateway with rate limiting'
        ],
        challenges: [
          'Handling different ML framework requirements',
          'Optimizing inference latency',
          'Managing model versions and experiments',
          'Ensuring high availability at scale'
        ],
        outcomes: [
          '100+ models deployed in production',
          '1M+ predictions per day',
          'Average latency: 50ms',
          '99.99% uptime',
          '20+ data science teams using it'
        ],
        impact: '100+ models, 1M+ daily predictions, 50ms latency',
        metrics: {
          models: '100+',
          predictions: '1M+/day',
          latency: '50ms'
        }
      },
      {
        id: 8,
        title: 'Real-Time Analytics Dashboard',
        short: 'Live business intelligence platform',
        full: 'High-performance real-time analytics platform that processes streaming data from multiple sources and provides instant insights through interactive dashboards. Features custom data visualizations, alerting system, and predictive analytics. Built for enterprise businesses requiring real-time decision making.',
        tech: ['React', 'Next.js', 'D3.js', 'Apache Kafka', 'ClickHouse', 'Redis', 'Node.js', 'WebSocket', 'AWS', 'Docker'],
        features: [
          'Real-time data streaming & processing',
          'Custom interactive visualizations',
          'Predictive analytics with ML',
          'Automated alerting system',
          'Multi-source data integration',
          'Drill-down analysis capabilities',
          'Export & sharing functionality',
          'Mobile-responsive design'
        ],
        challenges: [
          'Processing high-velocity data streams',
          'Maintaining low latency visualizations',
          'Handling concurrent users at scale',
          'Complex data aggregations in real-time'
        ],
        outcomes: [
          '100M+ events processed daily',
          'Sub-second data refresh rate',
          '1000+ concurrent users supported',
          '40+ enterprise deployments',
          '90% faster decision making'
        ],
        impact: '100M+ daily events, sub-second refresh, 90% faster decisions',
        metrics: {
          events: '100M+/day',
          latency: '<1s',
          users: '1000+'
        }
      }
    ]

  const skills = [
    { name: 'Python', cat: 'Language', level: 95, projects: [1,2,3], icon: '🐍' },
    { name: 'JavaScript', cat: 'Language', level: 90, projects: [1,4,6,8], icon: '⚡' },
    { name: 'TypeScript', cat: 'Language', level: 90, projects: [1,4,8], icon: '📘' },
    { name: 'React', cat: 'Frontend', level: 95, projects: [1,3,4,6,7,8], icon: '⚛️' },
    { name: 'Next.js', cat: 'Frontend', level: 90, projects: [1,8], icon: '▲' },
    { name: 'Node.js', cat: 'Backend', level: 85, projects: [1,4,6,8], icon: '🟢' },
    { name: 'FastAPI', cat: 'Backend', level: 90, projects: [2,3], icon: '⚡' },
    { name: 'TensorFlow', cat: 'AI/ML', level: 85, projects: [1,3,7], icon: '🧠' },
    { name: 'PyTorch', cat: 'AI/ML', level: 85, projects: [3,7], icon: '🔥' },
    { name: 'OpenAI', cat: 'AI/ML', level: 90, projects: [6], icon: '🤖' },
    { name: 'AWS', cat: 'Cloud', level: 85, projects: [1,2,3,4,5,7,8], icon: '☁️' },
    { name: 'Docker', cat: 'DevOps', level: 85, projects: [2,5,8], icon: '🐳' },
    { name: 'Kubernetes', cat: 'DevOps', level: 75, projects: [2,5], icon: '☸️' },
    { name: 'MongoDB', cat: 'Database', level: 85, projects: [1,4,5], icon: '🍃' },
    { name: 'PostgreSQL', cat: 'Database', level: 90, projects: [2,6,8], icon: '🐘' },
    { name: 'Redis', cat: 'Database', level: 85, projects: [1,3,4,5,6,7], icon: '🔴' }
  ]

  const sendMessage = async () => {
    if (!chatInput.trim()) return
    
    const userMsg = chatInput
    setChatMessages(prev => [...prev, { text: userMsg, sender: 'user' }])
    setChatInput('')
    setIsTyping(true)

    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg })
      })
      const data = await res.json()
      setTimeout(() => {
        setChatMessages(prev => [...prev, { text: data.response || 'How can I help you?', sender: 'bot' }])
        setIsTyping(false)
      }, 500)
    } catch {
      setTimeout(() => {
        setChatMessages(prev => [...prev, { text: "I'm here to help! Reach Nabeel at nabeelscode@gmail.com or WhatsApp: +923239960094", sender: 'bot' }])
        setIsTyping(false)
      }, 500)
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        setFormStatus('error')
        setTimeout(() => setFormStatus('idle'), 5000)
      }
    } catch {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 5000)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 text-white relative">
      {/* AI & Coding Themed Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-600/10 to-accent-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-accent-600/10 to-primary-600/10 rounded-full blur-3xl" />
        
        {/* Binary code pattern */}
        <div className="absolute top-10 left-10 text-primary-500/5 font-mono text-xs leading-relaxed max-w-xs hidden lg:block">
          01001110 01100001 01100010 01100101 01100101 01101100<br/>
          01000001 01001001 00100000 01000101 01101110 01100111<br/>
          01010000 01111001 01110100 01101000 01101111 01101110<br/>
          01010010 01100101 01100001 01100011 01110100 00100000<br/>
        </div>
        
        {/* Code snippet decoration top-right */}
        <div className="absolute top-20 right-10 text-accent-500/5 font-mono text-xs max-w-sm hidden lg:block">
          <div className="space-y-1">
            <div>def <span className="text-primary-500/5">predict</span>(model, data):</div>
            <div className="pl-4">result = model.analyze(data)</div>
            <div className="pl-4">return result.optimize()</div>
          </div>
        </div>
        
        {/* AI/Tech icons scattered */}
        <div className="absolute top-1/4 left-20 text-primary-500/5 hidden lg:block">
          <FaBrain className="text-6xl" />
        </div>
        <div className="absolute bottom-1/4 right-32 text-accent-500/5 hidden lg:block">
          <FaRobot className="text-7xl" />
        </div>
        <div className="absolute top-2/3 left-1/3 text-primary-500/5 hidden lg:block">
          <FaCode className="text-5xl" />
        </div>
        
        {/* Tech stack badges */}
        <div className="absolute bottom-32 left-20 flex gap-2 opacity-5 hidden lg:block">
          <div className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-mono">Python</div>
          <div className="px-3 py-1 rounded-full bg-accent-500/20 text-accent-300 text-xs font-mono">React</div>
          <div className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-mono">AI/ML</div>
        </div>
        
        {/* Circuit pattern */}
        <div className="absolute top-1/2 right-20 w-32 h-32 opacity-5 hidden lg:block">
          <svg viewBox="0 0 100 100" className="text-primary-500">
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
            <line x1="50" y1="30" x2="50" y2="10" stroke="currentColor" strokeWidth="1"/>
            <line x1="50" y1="70" x2="50" y2="90" stroke="currentColor" strokeWidth="1"/>
            <line x1="30" y1="50" x2="10" y2="50" stroke="currentColor" strokeWidth="1"/>
            <line x1="70" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1"/>
            <circle cx="50" cy="10" r="3" fill="currentColor"/>
            <circle cx="50" cy="90" r="3" fill="currentColor"/>
            <circle cx="10" cy="50" r="3" fill="currentColor"/>
            <circle cx="90" cy="50" r="3" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(26, 84, 144, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(26, 84, 144, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-dark-950/70"></div>
      </div>

      {/* Premium Modern Header */}
      <nav className="fixed w-full z-50 backdrop-blur-2xl bg-dark-950/90 border-b border-white/5 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Premium Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-primary-500/50 transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-2xl">N</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-dark-950 animate-pulse"></div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">Nabeel Imran</div>
                <div className="text-xs text-gray-400 font-roboto flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  AI Software Engineer
                </div>
              </div>
            </a>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-2">
              {['Home', 'About', 'Services', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-all font-medium rounded-lg hover:bg-white/5 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-3/4 transition-all duration-300"></span>
                </a>
              ))}
              
              {/* CTA Button */}
              <a
                href="#contact"
                className="ml-3 px-6 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-xl font-semibold text-sm shadow-lg transition-all flex items-center gap-2"
              >
                <FaCalendar className="text-sm" />
                Let&apos;s Talk
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-all"
            >
              <FaBars className="text-xl text-gray-300" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Motion Graphics */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 scroll-mt-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full text-sm font-semibold text-primary-300">
                ⚡ Available for Freelance Projects
              </span>
            </motion.div>

            <div>
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-white via-primary-300 to-accent-400 bg-clip-text text-transparent">
                  Nabeel Imran
                </span>
              </motion.h1>
              
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
                  AI Software Engineer
                </span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-roboto">
                  Transforming businesses with intelligent solutions powered by <span className="text-primary-400 font-semibold">AI</span>, <span className="text-primary-400 font-semibold">Machine Learning</span>, and <span className="text-primary-400 font-semibold">Automation</span>.
                </p>
                <p className="text-base text-gray-400 leading-relaxed font-roboto">
                  🚀 50+ successful projects • 🌟 Top Rated Plus on Upwork • 💼 5+ years experience
                </p>
              </motion.div>
            </div>

            <motion.div 
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={() => setVideoOpen(true)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-xl font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all flex items-center gap-3 text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch Intro Video
              </motion.button>
              
              <motion.a
                href="https://wa.me/923239960094?text=Hi%20Nabeel!%20I%27m%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 rounded-xl font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all flex items-center gap-3 text-lg"
              >
                <FaWhatsapp className="text-2xl" />
                Let&apos;s Talk
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center gap-3 text-lg border border-white/10"
              >
                <FaRocket />
                View Projects
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { icon: FaLinkedin, url: 'https://www.linkedin.com/in/nabeel-imran-1708a0238/', color: 'hover:text-blue-400' },
                { icon: FaGithub, url: 'https://github.com/nabeel-imran', color: 'hover:text-gray-300' },
                { icon: FaEnvelope, url: 'mailto:nabeelscode@gmail.com', color: 'hover:text-red-400' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className={`w-14 h-14 glass rounded-full flex items-center justify-center transition-all ${social.color} border border-white/10`}
                >
                  <social.icon className="text-2xl" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Picture with Video Play */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 rounded-3xl blur-lg opacity-50"></div>
              
              {/* Image container with square crop and video play */}
              <div 
                className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 group cursor-pointer" 
                onClick={() => setVideoOpen(true)}
              >
                <Image
                  src="/assets/nabeel-profile-new.png"
                  alt="Nabeel Imran - AI Software Engineer"
                  fill
                  className="object-cover object-center scale-110 group-hover:scale-115 transition-transform duration-300"
                  style={{ objectPosition: 'center 20%' }}
                  priority
                  sizes="(max-width: 768px) 320px, 450px"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Tech badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full shadow-xl flex items-center gap-2 border border-white/10">
                <FaCode className="text-white" />
                <span className="text-white font-semibold text-sm">AI Engineer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <FaUser className="text-5xl text-primary-400 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg text-gray-400 font-roboto max-w-2xl mx-auto">
              AI Software Engineer building intelligent solutions for global clients
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-2xl p-8 md:p-10 border border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative">
                <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden border-2 border-primary-500/30 shadow-xl">
                  <Image
                    src="/assets/nabeel-profile.png"
                    alt="Nabeel Imran - AI Software Engineer"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Nabeel Imran</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I&apos;m an AI Software Engineer at Peersol Consulting, delivering custom software, AI-driven automation, RPA, and enterprise integrations for HR tech and digital transformation. I specialize in building systems that replace manual workflows with intelligent automation—achieving 40-70% efficiency gains for clients.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  From Veremark background screening automation to Workday integrations, I bring technical depth and business focus to every project. Based in Islamabad, Pakistan.
                </p>
                <div className="flex flex-wrap gap-3">
                  <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-semibold">
                    Get in Touch
                  </motion.a>
                  <motion.a href="#services" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 glass rounded-lg font-semibold border border-white/10">
                    My Services
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Nabeel Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-dark-900/50 to-dark-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <FaStar className="text-5xl text-primary-400 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Nabeel?</span>
            </h2>
            <p className="text-lg text-gray-400 font-roboto">What sets me apart</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaLightbulb, title: 'Business-Focused', desc: 'Solutions that drive real commercial value, not just clever tech' },
              { icon: FaCheckCircle, title: 'Proven Results', desc: '40-70% efficiency gains and on-time delivery for global clients' },
              { icon: FaCode, title: 'Full-Stack Depth', desc: 'From RPA and Workday to AI models and custom APIs' },
              { icon: FaTrophy, title: 'High Satisfaction', desc: 'Collaborative approach and clear communication' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glassmorphism p-6 rounded-xl border border-white/10 text-center hover:border-primary-500/30 transition-colors"
              >
                <item.icon className="text-3xl text-primary-400 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 font-roboto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Can I Do For You - Services Section */}
      <section id="services" className="py-16 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <FaTools className="text-5xl text-primary-400 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Can I Do <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">For You?</span>
            </h2>
            <p className="text-lg text-gray-400 font-roboto">Professional services tailored to your needs</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Full Stack Web Application Development',
              'Custom Software Development',
              'AI Automation',
              'Robotic Process Automation',
              'AI Chatbot Development',
              'AI Marketing Automation',
              'Mobile App Development',
              'Custom WordPress/Shopify Site Development',
              'AI Models Integrations'
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 glassmorphism p-4 rounded-xl border border-white/10 hover:border-primary-500/30 transition-colors"
              >
                <FaCheckCircle className="text-primary-400 flex-shrink-0 text-lg" />
                <span className="font-roboto text-gray-300">{service}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-semibold shadow-lg"
            >
              Discuss Your Project
            </motion.a>
          </motion.div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-dark-900/50 to-dark-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: FaRocket, number: '50+', label: 'Projects Delivered', color: 'from-blue-500 to-cyan-500' },
              { icon: FaStar, number: '30+', label: 'Happy Clients', color: 'from-yellow-500 to-orange-500' },
              { icon: FaBriefcase, number: '5+', label: 'Years Experience', color: 'from-green-500 to-emerald-500' },
              { icon: FaTrophy, number: '100%', label: 'Satisfaction', color: 'from-purple-500 to-pink-500' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center glassmorphism p-8 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-all"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                  className={`inline-block p-4 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 shadow-lg`}
                >
                  <stat.icon className="text-4xl text-white" />
                </motion.div>
                <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium font-roboto">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <FaBriefcase className="text-6xl text-primary-400 mx-auto mb-4" />
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Professional <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-xl text-gray-400 font-roboto">My journey in tech and innovation</p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glassmorphism p-8 rounded-2xl border border-white/10 hover:bg-white/5 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-lg text-primary-400 font-semibold mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaCalendar /> {exp.period}
                      </span>
                      <span className="px-3 py-1 bg-primary-500/20 rounded-full text-primary-300 font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed font-roboto">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <FaTrophy className="text-yellow-400" /> Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300 font-roboto">
                        <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 font-roboto">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Enhanced */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-b from-transparent to-dark-900/50 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <FaRocket className="text-6xl text-primary-400 mx-auto mb-4" />
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 font-roboto">Innovative solutions that make a difference</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveProject(project.id)}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glassmorphism p-6 rounded-2xl border border-white/10 hover:bg-white/5 transition cursor-pointer group shadow-xl hover:shadow-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                    <FaCode className="text-2xl text-white" />
                  </div>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="text-primary-400"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 font-roboto">{project.short}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-lg text-xs text-primary-300 font-medium">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-lg text-xs text-primary-300 font-medium">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-primary-400 font-semibold">
                  <span>Click for details</span>
                  <FaChevronRight />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal - Enhanced */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glassmorphism rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setActiveProject(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 glass p-3 rounded-xl hover:bg-red-500/20 transition border border-white/10"
              >
                <FaTimes className="text-2xl" />
              </motion.button>
              
              {projects.filter(p => p.id === activeProject).map(project => (
                <div key={project.id} className="space-y-8">
                  {/* Header */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(t => (
                        <motion.span
                          key={t}
                          whileHover={{ scale: 1.1 }}
                          className="px-4 py-2 bg-primary-500/20 border border-primary-500/40 rounded-full text-sm font-medium"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
                      {project.title}
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed font-roboto">{project.full}</p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="glass p-4 rounded-xl text-center border border-white/10">
                        <div className="text-2xl font-bold text-primary-400">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                      <FaCheckCircle className="text-green-400" /> Key Features
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.features.map((f, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-3 glass p-4 rounded-xl border border-white/10"
                        >
                          <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 font-roboto">{f}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Solutions */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="glass p-6 rounded-2xl border border-white/10">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <FaLightbulb className="text-yellow-400" /> Technical Challenges
                      </h3>
                      <ul className="space-y-3">
                        {project.challenges.map((c, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300 font-roboto">
                            <span className="text-primary-400">•</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="glass p-6 rounded-2xl border border-white/10">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <FaTrophy className="text-primary-400" /> Outcomes & Impact
                      </h3>
                      <ul className="space-y-3">
                        {project.outcomes.map((o, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300 font-roboto">
                            <FaChartLine className="text-green-400 mt-1 flex-shrink-0" />
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <FaTools className="text-6xl text-primary-400 mx-auto mb-4" />
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Technical <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-400 font-roboto">Click any skill to see related projects</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`glassmorphism p-6 rounded-2xl text-center transition cursor-pointer border ${
                  activeSkill === skill.name ? 'bg-primary-500/20 border-primary-500' : 'border-white/10 hover:border-primary-500/50'
                }`}
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <div className="font-bold text-lg mb-2">{skill.name}</div>
                <div className="text-xs text-gray-500 mb-3 font-roboto">{skill.cat}</div>
                
                {/* Skill Level Bar */}
                <div className="w-full bg-dark-800 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05 }}
                    className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                  ></motion.div>
                </div>
                <div className="text-xs text-primary-400 font-semibold">{skill.level}%</div>

                {activeSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-3 text-xs text-primary-300 font-roboto"
                  >
                    Used in {skill.projects.length} project{skill.projects.length > 1 ? 's' : ''}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gradient-to-b from-dark-900/50 to-transparent scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <FaGraduationCap className="text-6xl text-primary-400 mx-auto mb-4" />
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Education & <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Learning</span>
            </h2>
            <p className="text-xl text-gray-400 font-roboto">Academic foundation and continuous learning</p>
          </motion.div>

          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glassmorphism p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
            >
              <div className="flex items-start gap-6">
                <div className="hidden md:block w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-lg">
                  <FaGraduationCap className="text-4xl text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3">{edu.degree}</h3>
                  <p className="text-xl text-primary-400 font-semibold mb-4">{edu.institution}</p>
                  
                  <div className="flex flex-wrap gap-4 text-gray-400 mb-6">
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt /> {edu.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCalendar /> {edu.period}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed font-roboto">{edu.description}</p>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <FaTrophy className="text-yellow-400" /> Achievements
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {edu.achievements.map((achievement, idx) => (
                        <span key={idx} className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full text-sm font-medium">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <FaCertificate className="text-6xl text-primary-400 mx-auto mb-4" />
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Certifications & <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Credentials</span>
            </h2>
            <p className="text-xl text-gray-400 font-roboto">Industry-recognized certifications</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glassmorphism p-6 rounded-2xl border border-white/10 hover:bg-white/5 transition shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary-500/30">
                    <FaAward className="text-3xl text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                    <p className="text-sm text-gray-400 mb-2 font-roboto">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-primary-300 font-medium">{cert.date}</span>
                      <span className="text-xs text-gray-500 font-mono">{cert.id}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Booking Section */}
      <section id="consultation" className="py-20 px-4 bg-gradient-to-r from-primary-900/20 to-accent-900/20 backdrop-blur-sm scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <FaCalendar className="text-6xl text-primary-400" />
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Book a <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Free Consultation</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-roboto">
              Let&apos;s discuss your project and how I can help you achieve your goals. 30-minute free consultation call to explore possibilities.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: FaCommentDots, title: 'Discuss Your Project', desc: 'Share your vision and requirements' },
                { icon: FaLightbulb, title: 'Get Expert Advice', desc: 'Receive tailored recommendations' },
                { icon: FaRocket, title: 'Start Building', desc: 'Turn ideas into reality' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6 rounded-2xl border border-white/10"
                >
                  <item.icon className="text-4xl text-primary-400 mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 font-roboto">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/923239960094?text=Hi%20Nabeel!%20I%27d%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-green-600 to-green-500 rounded-xl font-bold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all flex items-center justify-center gap-3 text-lg"
              >
                <FaWhatsapp className="text-2xl" />
                Book via WhatsApp
              </motion.a>
              
              <motion.a
                href="mailto:nabeelscode@gmail.com?subject=Consultation%20Request"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 glass border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-lg"
              >
                <FaEnvelope className="text-2xl" />
                Email Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <FaEnvelope className="text-6xl text-primary-400 mx-auto mb-4" />
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Get in <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 font-roboto">Let&apos;s bring your ideas to life</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glassmorphism p-8 rounded-3xl border border-white/10 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Your Name *</label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-4 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary-500 transition font-roboto"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Email Address *</label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary-500 transition font-roboto"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Phone Number</label>
                  <div className="relative">
                    <FaPhone className="absolute left-4 top-4 text-gray-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary-500 transition font-roboto"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary-500 transition font-roboto"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Message *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary-500 transition resize-none font-roboto"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-bold shadow-lg hover:shadow-xl transition flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <FaCheckCircle />
                      Message Sent!
                    </>
                  ) : formStatus === 'error' ? (
                    <>
                      <FaTimes />
                      Failed. Try Again
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glassmorphism p-8 rounded-3xl border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {[
                    { icon: FaEnvelope, label: 'Email', value: 'nabeelscode@gmail.com', link: 'mailto:nabeelscode@gmail.com' },
                    { icon: FaWhatsapp, label: 'WhatsApp', value: '+92 323 9960094', link: 'https://wa.me/923239960094' },
                    { icon: FaLinkedin, label: 'LinkedIn', value: '/nabeel-imran-1708a0238', link: 'https://www.linkedin.com/in/nabeel-imran-1708a0238/' },
                    { icon: FaGithub, label: 'GitHub', value: '/nabeel-imran', link: 'https://github.com/nabeel-imran' },
                    { icon: FaMapMarkerAlt, label: 'Location', value: 'Islamabad, Pakistan', link: null }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary-500/30">
                        <item.icon className="text-xl text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-primary-400 transition font-roboto"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-white font-roboto">{item.value}</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="glassmorphism p-8 rounded-3xl border border-white/10 shadow-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Quick Connect</h3>
                <p className="text-gray-400 mb-6 font-roboto">Prefer a direct message? Reach out instantly!</p>
                <motion.a
                  href="https://wa.me/923239960094"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 rounded-xl font-bold shadow-lg hover:shadow-xl transition flex items-center justify-center gap-3"
                >
                  <FaWhatsapp className="text-2xl" />
                  Message on WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 bg-dark-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">N</span>
                </div>
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    Nabeel&apos;s Code
                  </div>
                  <div className="text-xs text-gray-400 font-roboto">AI Software Engineer</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm font-roboto">
                Building intelligent solutions with AI, ML, and cutting-edge technologies. Transforming ideas into reality.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-400 hover:text-primary-400 transition text-sm">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex gap-3 mb-4">
                {[
                  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/nabeel-imran-1708a0238/' },
                  { icon: FaGithub, url: 'https://github.com/nabeel-imran' },
                  { icon: FaWhatsapp, url: 'https://wa.me/923239960094' },
                  { icon: FaEnvelope, url: 'mailto:nabeelscode@gmail.com' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition border border-white/10"
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
              <p className="text-gray-400 text-sm font-roboto">
                Available for freelance projects and consultations
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-gray-400 space-y-2">
            <p className="font-semibold">© 2026 Nabeel Imran - AI Software Engineer</p>
            <p className="text-sm font-roboto">
              nabeelscode.com
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Live Assistant */}
      <AnimatePresence>
        {!chatOpen ? (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={() => setChatOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center shadow-xl z-50"
            aria-label="Open Live Assistant"
          >
            <FaRobot className="text-2xl text-white" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-dark-950 animate-pulse" />
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-8 right-8 w-96 max-w-[calc(100vw-2rem)] bg-dark-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 z-50 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-primary-900/30 to-accent-900/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center relative">
                  <FaRobot className="text-xl text-white" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-dark-900" />
                </div>
                <div>
                  <h3 className="font-bold">Live Assistant</h3>
                  <p className="text-xs text-gray-400">Ask me anything</p>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-lg transition"
              >
                <FaTimes />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-3 custom-scrollbar">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-2.5 rounded-xl text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white' 
                      : 'bg-dark-800/80 border border-white/10'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-dark-800/80 border border-white/10 px-4 py-2.5 rounded-xl">
                    <span className="inline-flex gap-1">
                      <span className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-white/10 space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2.5 bg-dark-800/50 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-primary-500 font-roboto"
                />
                <button
                  onClick={sendMessage}
                  className="px-4 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg hover:opacity-90 transition"
                >
                  <FaPaperPlane className="text-sm" />
                </button>
              </div>
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/923239960094?text=Hi%20Nabeel!%20I%20have%20a%20question%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-green-600 to-green-500 rounded-lg font-semibold text-sm hover:opacity-90 transition"
              >
                <FaWhatsapp className="text-lg" />
                Talk on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
              >
                <FaTimes className="text-white" />
              </button>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yjKuT579uYo?si=CR8T34LsutRU3rfz&autoplay=1"
                title="Nabeel Imran - Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
